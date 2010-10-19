MVC.StartupCommand	= function() {
	MVC.Command.apply(this, arguments);
};

MVC.StartupCommand.prototype	= new MVC.Command(null);

MVC.StartupCommand.prototype.execute	= function(notification) {
	// TODO: Make async
	// 0:
	this.facade.initializeController();

	// 1: prepare Model
	//
	this.facade.initializeModel();
	//
	for (var sName in this.facade.proxies)
		if (this.facade.proxies.hasOwnProperty(sName))
			this.facade.proxies[sName].onRegister();

	// 2: prepare View
	//
	this.facade.initializeView();
	//
	for (var sName in this.facade.mediators)
		if (this.facade.mediators.hasOwnProperty(sName))
			this.facade.mediators[sName].onRegister();

	// Process children
	for (var n = 0, l = this.facade.children.length; n < l; n++)
		new MVC.StartupCommand(this.facade.children[n]).execute(notification);
	//
	this.facade.sendNotification("_Ready");
};