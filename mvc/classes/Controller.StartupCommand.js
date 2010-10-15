Controller.StartupCommand	= function() {
	Command.apply(this, arguments);
};

Controller.StartupCommand.prototype	= new Command;

Controller.StartupCommand.prototype.execute	= function() {
	// TODO: Make async
	var oController	= this.controller;

	// 0:
	oController.init();

	// 1: prepare Model
	if (oController.model) {
		//
		oController.model.init();
		//
		for (var sName in oController.model.proxies)
			if (oController.model.proxies.hasOwnProperty(sName))
				oController.model.proxies[sName].onRegister();
	}

	// 2: prepare Model
	if (oController.view) {
		//
		oController.view.init();
		//
		for (var sName in oController.view.mediators)
			if (oController.view.mediators.hasOwnProperty(sName))
				oController.view.mediators[sName].onRegister();
	}

	// Process children
	for (var n = 0, l = oController.children.length; n < l; n++)
		new Controller.StartupCommand(oController.children[n]).execute();
	//
	oController.sendNotification("_Ready");
};