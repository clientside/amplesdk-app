Main.ShowWorkspaceCommand	= function() {
	Command.apply(this, arguments);
};

Main.ShowWorkspaceCommand.prototype	= new Command;

Main.ShowWorkspaceCommand.prototype.execute	= function() {
	var that	= this,
		oController	= this.controller,
		oWorkspace	= this.controller.getChild("Workspace");
	if (oWorkspace) {
		oWorkspace.sendNotification("Show");
		this.sendNotification("ShowLogout");
	}
	else {
//		ample.get("res/.children/workspace/workspace.css", null, function(sCss) {
//			ample.get("src/.children/workspace/workspace.js", null, function(sJavaScript) {
				ample.get("res/.children/workspace/workspace.xml", null, function(oDocument) {
					var oView	= ample.importNode(oDocument.documentElement, true);
					ample.query("#Main$children", oController.view.element)[0].appendChild(oView);

					var oWorkspace	= new Workspace;
					oController.addChild("Workspace", oWorkspace);
					//
					oWorkspace.sendNotification("Startup");
					//
					that.sendNotification("ShowLogout");
				});
//			});
//		});
	}
};