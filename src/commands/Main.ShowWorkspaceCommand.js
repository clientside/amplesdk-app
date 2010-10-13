Main.ShowWorkspaceCommand	= function() {
	Command.apply(this, arguments);
};

Main.ShowWorkspaceCommand.prototype	= new Command;

Main.ShowWorkspaceCommand.prototype.execute	= function() {
	switch (this.current) {
		case 0:
			// Asynch
			var oController	= new Workspace;
			this.controller.addChild(oController);
			break;

		case 1:
			oController	= this.controller.getChild(Workspace);
			break;
	}
	//
	this.route();
};