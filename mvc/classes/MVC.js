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
MVC.prototype.addChild		= function(sName, oMvc) {
	this.children.push(oMvc);
	this.children[sName]	= oMvc;
	oMvc.parent	= this;
};

MVC.prototype.getChild		= function(sName) {
	return this.children.hasOwnProperty(sName) ? this.children[sName] : null;
};

/*
MVC.prototype.removeChild	= function(oMvc) {
	if (this.children.hasOwnProperty(sName)) {
		this.children[sName].parent	= null;
		delete this.children[sName];
	}
};
*/

// Notifications
MVC.routeNotification	= function(oMvc, oNotification) {
	for (var sName in oMvc.mediators)
		if (oMvc.mediators.hasOwnProperty(sName))
			oMvc.mediators[sName].handleNotification(oNotification);

	//
	if (oNotification.name == "Startup")
		new MVC.StartupCommand(oMvc).execute();
	else
	if (oNotification.name == "Shutdown")
		new MVC.ShutdownCommand(oMvc).execute();
	else
	if (oNotification.name in oMvc.commands)
		for (var nIndex = 0, cCommand; cCommand = oMvc.commands[oNotification.name][nIndex]; nIndex++) {
			console.warn("command: ", oNotification.name);
			new cCommand(oMvc).execute();
		}

	// Pass notification to parent
	if (oMvc.parent) {
		oNotification.name	= oMvc.name + ':' + oNotification.name;
		console.info("notification (routing): ", oNotification.name);
		MVC.routeNotification(oMvc.parent, oNotification);
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
MVC.prototype.init	= function() {

};

MVC.prototype.initController	= function() {

};

MVC.prototype.initModel	= function() {

};

MVC.prototype.initView	= function() {

};