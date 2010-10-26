function MVC() {
	this.children	= [];

	this.commands	= {};
	this.proxies	= {};
	this.mediators	= {};
};

MVC.prototype.parent	= null;
MVC.prototype.children	= null;

MVC.prototype.commands	= null;
MVC.prototype.proxies	= null;
MVC.prototype.mediators	= null;

// Hierarchy
MVC.prototype.addChild		= function(sName, oFacade) {
	this.children.push(oFacade);
	this.children[sName]	= oFacade;
	oFacade.parent	= this;
};

MVC.prototype.getChild		= function(sName) {
	return this.children.hasOwnProperty(sName) ? this.children[sName] : null;
};

/*
MVC.prototype.removeChild	= function(oFacade) {
	if (this.children.hasOwnProperty(sName)) {
		this.children[sName].parent	= null;
		delete this.children[sName];
	}
};
*/

// Notifications
MVC.routeNotification	= function(oFacade, oNotification) {
	for (var sName in oFacade.mediators)
		if (oFacade.mediators.hasOwnProperty(sName))
			oFacade.mediators[sName].handleNotification(oNotification);

	//
	if (oNotification.name == "Startup")
		new MVC.StartupCommand(oFacade).execute(oNotification);
	else
	if (oNotification.name == "Shutdown")
		new MVC.ShutdownCommand(oFacade).execute(oNotification);
	else
	if (oFacade.commands.hasOwnProperty(oNotification.name)) {
		if (window.console && console.warn)
			console.warn("command: ", oNotification.name);
		new oFacade.commands[oNotification.name](oFacade).execute(oNotification);
	}

	// Pass notification to parent
	if (oFacade.parent) {
		oNotification.name	= "child" + ':' + oNotification.name;
		if (window.console && console.info)
			console.info("notification (routing): ", oNotification.name);
		MVC.routeNotification(oFacade.parent, oNotification);
	}
};

MVC.prototype.sendNotification	= function(sNotification, oDetail) {
	if (window.console && console.info)
		console.info("notification: ", sNotification, oDetail);
	MVC.routeNotification(this, new MVC.Notification(sNotification, oDetail));
};

// Commands
MVC.prototype.hasCommand	= function(sNotification) {
	return this.commands.hasOwnProperty(sNotification);
};

MVC.prototype.registerCommand	= function(sNotification, cCommand) {
	if (!(cCommand.prototype instanceof MVC.Command))
		throw "Type Error: " + String(cCommand) + " is not instanceof MVC.Command";

	this.commands[sNotification]	= cCommand;
};

MVC.prototype.removeCommand	= function(sNotification) {
	delete this.commands[sNotification];
};

// Proxies
MVC.prototype.retrieveProxy	= function(sName) {
	return this.proxies.hasOwnProperty(sName) ? this.proxies[sName] : null;
};

MVC.prototype.registerProxy	= function(sName, oProxy) {
	if (!(oProxy instanceof MVC.Proxy))
		throw "Type Error: " + String(oProxy) + " is not instanceof MVC.Proxy";

	this.proxies[sName]	= oProxy;
	oProxy.facade	= this;
};

// Mediators
MVC.prototype.retrieveMediator	= function(sName) {
	return this.mediators.hasOwnProperty(sName) ? this.mediators[sName] : null;
};

MVC.prototype.registerMediator	= function(sName, oMediator) {
	if (!(oMediator instanceof MVC.Mediator))
		throw "Type Error: " + String(oMediator) + " is not instanceof MVC.Mediator";

	this.mediators[sName]	= oMediator;
	oMediator.facade	= this;
};

/* */
MVC.prototype.initializeController	= function() {

};

MVC.prototype.initializeModel	= function() {

};

MVC.prototype.initializeView	= function() {

};