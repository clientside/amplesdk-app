function Command(controller) {
	this.controller	= controller;
	//
	this.children	= [];
};

//
Command.prototype.controller= null;

//
Command.prototype.children	= null;
Command.prototype.current	=-1;

Command.prototype.addChild	= function(oCommand) {
	var nIndex	= this.children.indexOf(oCommand);
	if (nIndex < 0) {
		this.children.push(oCommand);
	}
};
/*
Command.prototype.removeChild	= function(oCommand) {
	var nIndex	= this.children.indexOf(oController);
	if (nIndex >-1) {
		this.children	= this.children.slice(0, nIndex).concat(this.children.slice(nIndex + 1));
	}
};
*/

//
Command.prototype.sendNotification	= function(sNotification) {
	// Forward notification to controller
	this.controller.sendNotification(sNotification);
};

//
Command.prototype.execute	= function() {
	for (var n = 0, l = this.children.length; n < l; n++)
		this.children[n].execute();
};

Command.prototype.cancel	= function() {

};

Command.prototype.pause		= function() {

};

Command.prototype.resume	= function() {

};