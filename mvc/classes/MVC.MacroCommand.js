MVC.MacroCommand	= function() {
	MVC.Command.apply(this, arguments);
	//
	this.subCommands	= [];
};

MVC.MacroCommand.prototype	= new MVC.Command(null);

//
MVC.MacroCommand.prototype.parent		= null;
MVC.MacroCommand.prototype.subCommands	= null;
MVC.MacroCommand.prototype.current		=-1;

// Hierarchy
MVC.MacroCommand.prototype.addSubCommand	= function(command) {
	var nIndex	= this.subCommands.indexOf(command);
	if (nIndex < 0) {
		this.subCommands.push(command);
		command.parent	= this;
	}
};
/*
MVC.Command.prototype.removeSubCommand	= function(command) {
	var nIndex	= this.children.indexOf(command);
	if (nIndex >-1)
		this.subCommands	= this.subCommands.slice(0, nIndex).concat(this.subCommands.slice(nIndex + 1));
};
*/
MVC.MacroCommand.prototype.execute	= function(notification) {
	this.progress	= function() {
		if (++this.current < this.children.length)
			this.subCommands[this.current].execute(notification);
	};
	this.progress();
};

MVC.MacroCommand.prototype.initializeMacroCommand	= function() {

};
