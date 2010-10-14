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

Controller.prototype.parent		= null;
Controller.prototype.children	= null;

// Static Properties
Controller.current	=-1;
Controller.queue	= [];

// Public Methods
Controller.prototype.init	= function() {
	if (this.model)
		this.model.init();
	if (this.view)
		this.view.init();
};

Controller.prototype.getChild		= function(sName) {
	return this.children.hasOwnProperty(sName) ? this.children[sName] : null;
};

Controller.prototype.addChild		= function(sName, oController) {
	this.children[sName]	= oController;
	oController.parent	= this;
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
Controller.prototype.sendNotification	= function(oNotification) {
console.log(oNotification);
	if (this.view)
		for (var sName in this.view.mediators)
			if (this.view.mediators.hasOwnProperty(sName))
				this.view.mediators[sName].handleNotification(oNotification);

	//
	if (oNotification.name == "Startup")
		new Controller.StartupCommand(this).execute();
	else
	if (oNotification.name == "Shutdown")
		new Controller.ShutdownCommand(this).execute();
	else
	if (oNotification.name in this.commands)
		for (var nIndex = 0, cCommand; cCommand = this.commands[oNotification.name][nIndex]; nIndex++)
			new cCommand(this).execute();
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