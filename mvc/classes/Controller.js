function Controller() {
	this.children	= [];
	//
	this.commands	= [];
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
	if (this.view)
		this.view.init();
	if (this.model)
		this.model.init();
	for (var n = 0, l = this.children.length; n < l; n++)
		this.children[n].init();
	//
	this.sendNotification(new Notification("ready", this));
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

};

//
Controller.prototype.addCommand	= function(oCommand) {
	this.commands.push(oCommand);
	oCommand.controller	= this;
};