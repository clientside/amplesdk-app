Main.ShowWorkspaceCommand	= function() {
	Command.apply(this, arguments);
};

Main.ShowWorkspaceCommand.prototype	= new Command;

Main.ShowWorkspaceCommand.prototype.execute	= function() {
	var oController	= this.controller,
		oWorkspace	= this.controller.getChild("Workspace");
	if (oWorkspace)
		oWorkspace.sendNotification("Show");
	else {
		ample.get("res/.children/workspace/workspace.xml", null, function(oDocument) {
			var oView	= ample.importNode(oDocument.documentElement, true);
			ample.query("#Main$children", oController.view.element)[0].appendChild(oView);

			var oWorkspace	= new Workspace;
			oWorkspace.sendNotification(new Notification("Startup", oWorkspace));
			//
			oController.addChild("Workspace", oWorkspace);
		});
	}
};