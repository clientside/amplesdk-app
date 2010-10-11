function Command(controller) {
	this.controller	= controller;
	//
	this.children	= [];
};

//
Command.prototype.controller= null;

//
Command.prototype.parent	= null;
Command.prototype.children	= null;

Command.prototype.addChild	= function(oCommand) {
	var nIndex	= this.children.indexOf(oController);
	if (nIndex < 0) {
		this.children.push(oController);
		oController.parent	= this;
	}
};
/*
Command.prototype.removeChild	= function(oCommand) {
	var nIndex	= this.children.indexOf(oController);
	if (nIndex >-1) {
		oController	= null;
		this.children	= this.children.slice(0, nIndex).concat(this.children.slice(nIndex + 1));
	}
};
*/
//
Command.prototype.execute	= function() {

};