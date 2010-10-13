function Controller() {
	this.children	= [];
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

// Public Methods
Controller.prototype.init	= function() {
	// TODO: Make async
	if (this.model)
		this.model.init();
	if (this.view)
		this.view.init();
	for (var n = 0, l = this.children.length; n < l; n++)
		this.children[n].init();
	//
	this.sendNotification(new Notification("ready", this));
};

Controller.prototype.getChild		= function(cController, fCallback) {
	for (var n = 0, oController; oController = this.children[n]; n++)
		if (oController instanceof cController)
			break;
	if (!oController) {
		oController	= new cController;
		this.addChild(oController);
		oController.init();
	}

	fCallback(oController);
};

Controller.prototype.addChild		= function(oController) {
	var nIndex	= this.children.indexOf(oController);
	if (nIndex < 0) {
		this.children.push(oController);
		oController.parent	= this;
	}
};
/*
Controller.prototype.removeChild	= function(oController) {
	var nIndex	= this.children.indexOf(oController);
	if (nIndex >-1) {
		oController.parent	= null;
		this.children	= this.children.slice(0, nIndex).concat(this.children.slice(nIndex + 1));
	}
};
*/
//
Controller.prototype.sendNotification	= function(oNotification) {
	console.log(oNotification.name)
	if (oNotification.name in this.commands)
		for (var nIndex = 0, cCommand; cCommand = this.commands[oNotification.name][nIndex]; nIndex++)
			new cCommand(this).execute();
};

//
Controller.prototype.registerCommand	= function(sNotification, cCommand) {
	if (!(sNotification in this.commands))
		this.commands[sNotification]	= [];
	this.commands[sNotification].push(cCommand);
};