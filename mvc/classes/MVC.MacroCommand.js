MVC.MacroCommand	= function() {
	MVC.Command.apply(this, arguments);
	//
	this.children	= [];
};

MVC.MacroCommand.prototype	= new MVC.Command;

//
MVC.MacroCommand.prototype.parent	= null;
MVC.MacroCommand.prototype.children	= null;
MVC.MacroCommand.prototype.current	=-1;
// Callbacks
MVC.MacroCommand.prototype.success	= null;
MVC.MacroCommand.prototype.failure	= null;

MVC.MacroCommand.prototype.addChild	= function(command) {
	var nIndex	= this.children.indexOf(command);
	if (nIndex < 0) {
		this.children.push(command);
		command.parent	= this;
	}
};
/*
MVC.Command.prototype.removeChild	= function(oMvc) {
	var nIndex	= this.children.indexOf(oController);
	if (nIndex >-1)
		this.children	= this.children.slice(0, nIndex).concat(this.children.slice(nIndex + 1));
};
*/

MVC.MacroCommand.prototype.execute	= function(success, failure) {
	this.success	= success;
	this.failure	= failure;
	this.progress();
};

MVC.MacroCommand.prototype.progress	= function() {
	if (this.current < this.children.length)
		this.children[this.current++].execute();
	else
	if (this.success)
		this.success();
};
