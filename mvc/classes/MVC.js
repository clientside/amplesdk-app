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
	if (oNotification.name in oFacade.commands)
		for (var nIndex = 0, cCommand; cCommand = oFacade.commands[oNotification.name][nIndex]; nIndex++) {
			console.warn("command: ", oNotification.name);
			new cCommand(oFacade).execute(oNotification);
		}

	// Pass notification to parent
	if (oFacade.parent) {
		oNotification.name	= oFacade.name + ':' + oNotification.name;
		console.info("notification (routing): ", oNotification.name);
		MVC.routeNotification(oFacade.parent, oNotification);
	}
};

MVC.prototype.sendNotification	= function(sNotification, oDetail) {
console.info("notification: ", sNotification);
	MVC.routeNotification(this, new MVC.Notification(sNotification, oDetail));
};

// Commands
MVC.prototype.registerCommand	= function(sNotification, cCommand) {
	if (!(cCommand.prototype instanceof MVC.Command))
		throw String(cCommand) + " is not instanceof MVC.Command";

	if (!(sNotification in this.commands))
		this.commands[sNotification]	= [];
	this.commands[sNotification].push(cCommand);
};

MVC.prototype.retrieveProxy	= function(sName) {
	return this.proxies.hasOwnProperty(sName) ? this.proxies[sName] : null;
};

MVC.prototype.registerProxy	= function(sName, oProxy) {
	if (!(oProxy instanceof MVC.Proxy))
		throw String(oProxy) + " is not instanceof MVC.Proxy";

	this.proxies[sName]	= oProxy;
};

// Mediators
MVC.prototype.retrieveMediator	= function(sName) {
	return this.mediators.hasOwnProperty(sName) ? this.mediators[sName] : null;
};

MVC.prototype.registerMediator	= function(sName, oMediator) {
	if (!(oMediator instanceof MVC.Mediator))
		throw String(oMediator) + " is not instanceof MVC.Mediator";

	this.mediators[sName]	= oMediator;
};

/* */
MVC.prototype.initializeController	= function() {

};

MVC.prototype.initializeModel	= function() {

};

MVC.prototype.initializeView	= function() {

};