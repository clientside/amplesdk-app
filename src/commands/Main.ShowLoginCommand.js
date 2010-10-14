Main.ShowLoginCommand	= function() {
	Command.apply(this, arguments);
};

Main.ShowLoginCommand.prototype	= new Command;

Main.ShowLoginCommand.prototype.execute	= function() {
	var oController	= this.controller,
		oLogin	= this.controller.getChild("Login");
	if (oLogin)
		oLogin.sendNotification("Show");
	else {
		ample.get("res/.children/login/login.xml", null, function(oDocument) {
			var oView	= ample.importNode(oDocument.documentElement, true);
			ample.query("#Main$children", oController.view.element)[0].appendChild(oView);

			var oLogin	= new Login;
			oLogin.sendNotification(new Notification("Startup", oLogin));
			//
			oController.addChild("Login", oLogin);
		});
	}
};