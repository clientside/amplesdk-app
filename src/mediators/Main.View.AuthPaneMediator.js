Main.View.AuthPaneMediator	= function() {
	Mediator.apply(this, arguments);
};

Main.View.AuthPaneMediator.prototype	= new Mediator;

Main.View.AuthPaneMediator.prototype.init	= function() {
	ample.query("#Main-pane-auth", this.view.element).bind("click", this);
};

Main.View.AuthPaneMediator.prototype.handleEvent	= function(event) {
	switch (event.target.getAttribute("class")) {
		case "Main_button-login":
			new Main.ShowLoginCommand(this.controller);
			break;

		case "Main_button-logout":
			alert("logout");
			break;
	}
};