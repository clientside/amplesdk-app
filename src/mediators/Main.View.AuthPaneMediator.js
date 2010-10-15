Main.View.AuthPaneMediator	= function() {
	Mediator.apply(this, arguments);
};

Main.View.AuthPaneMediator.prototype	= new Mediator;

Main.View.AuthPaneMediator.prototype.onRegister	= function() {
	ample.query("#Main-pane-auth", this.view.element).bind("click", this);
};

Main.View.AuthPaneMediator.prototype.handleNotification	= function(notification) {
	switch (notification.name) {

	}
};

Main.View.AuthPaneMediator.prototype.handleEvent	= function(event) {
	switch (event.target.getAttribute("class")) {
		case "Main_button-login":
			this.sendNotification("Login");
			break;

		case "Main_button-logout":
			this.sendNotification("Logout");
			break;
	}
};