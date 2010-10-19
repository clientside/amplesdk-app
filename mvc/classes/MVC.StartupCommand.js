MVC.StartupCommand	= function() {
	MVC.Command.apply(this, arguments);
};

MVC.StartupCommand.prototype	= new MVC.Command;

MVC.StartupCommand.prototype.execute	= function() {
	// TODO: Make async
	// 0:
	this.facade.initController();

	// 1: prepare Model
	//
	this.facade.initModel();
	//
	for (var sName in this.facade.proxies)
		if (this.facade.proxies.hasOwnProperty(sName))
			this.facade.proxies[sName].onRegister();

	// 2: prepare View
	//
	this.facade.initView();
	//
	for (var sName in this.facade.mediators)
		if (this.facade.mediators.hasOwnProperty(sName))
			this.facade.mediators[sName].onRegister();

	// Process children
	for (var n = 0, l = this.facade.children.length; n < l; n++)
		new MVC.StartupCommand(this.facade.children[n]).execute();
	//
	this.facade.sendNotification("_Ready");
};