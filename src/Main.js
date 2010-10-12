function Main() {
	//
	Controller.call(this);
};

Main.prototype	= new Controller;

Main.prototype.init	= function() {
	this.model	= new Main.Model;
	this.view	= new Main.View;
	//
	Controller.prototype.init.call(this);
};

Main.prototype.sendNotification	= function(oNotification) {
	switch (oNotification.type) {
		case "ready":
			if (this.model.getKey() == "secret")
				new Main.ShowWorkspaceCommand(this).execute();
			else
				new Main.ShowLoginCommand(this).execute();
			break;
	}
};
