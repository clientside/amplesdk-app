function Controller() {
	this.children	= {};
	//
	this.commands	= {};
};

//
Controller.prototype.model	= null;
Controller.prototype.view	= null;
//
Controller.prototype.commands	= null;

Controller.prototype.name		= null;
Controller.prototype.parent		= null;
Controller.prototype.children	= null;

// Static Properties
Controller.current	=-1;
Controller.queue	= [];

// Public Methods
Controller.prototype.init	= function() {

};

Controller.prototype.getChild		= function(sName) {
	return this.children.hasOwnProperty(sName) ? this.children[sName] : null;
};

Controller.prototype.addChild		= function(sName, oController) {
	this.children[sName]	= oController;
	oController.parent	= this;
	oController.name	= sName;
};
/*
Controller.prototype.removeChild	= function(oController) {
	if (this.children.hasOwnProperty(sName)) {
		this.children[sName].parent	= null;
		delete this.children[sName];
	}
};
*/
//
Controller.routeNotification	= function(oController, oNotification) {
	if (oController.view)
		for (var sName in oController.view.mediators)
			if (oController.view.mediators.hasOwnProperty(sName))
				oController.view.mediators[sName].handleNotification(oNotification);

	//
	if (oNotification.name == "Startup")
		new Controller.StartupCommand(oController).execute();
	else
	if (oNotification.name == "Shutdown")
		new Controller.ShutdownCommand(oController).execute();
	else
	if (oNotification.name in oController.commands)
		for (var nIndex = 0, cCommand; cCommand = oController.commands[oNotification.name][nIndex]; nIndex++) {
			console.warn("command: ", oNotification.name);
			new cCommand(oController).execute();
		}

	// Pass notification to parent
	if (oController.parent) {
		oNotification.name	= oController.name + ':' + oNotification.name;
		console.info("notification (routing): ", oNotification.name);
		Controller.routeNotification(oController.parent, oNotification);
	}
};

Controller.prototype.sendNotification	= function(sNotification) {
console.info("notification: ", sNotification);
	Controller.routeNotification(this, new Notification(sNotification));
};

//
Controller.prototype.registerCommand	= function(sNotification, cCommand) {
	if (!(cCommand.prototype instanceof Command))
		throw String(cCommand) + " is not instanceof Command";

	if (!(sNotification in this.commands))
		this.commands[sNotification]	= [];
	this.commands[sNotification].push(cCommand);
};

// Static Methods
Controller.route	= function() {

};