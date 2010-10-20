Main.LoginMediator	= function() {
	MVC.Mediator.apply(this, arguments);
};

Main.LoginMediator.prototype	= new MVC.Mediator;

Main.LoginMediator.prototype.onRegister	= function() {
	ample.query("#Main-login, #Main-logout", this.element)
		.bind("DOMActivate", this)
		.bind("change", this);
};

Main.LoginMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "ShowLogin":
			ample.query("#Main-login").show("slow");
			ample.query("#Main-logout").hide();
			break;

		case "HideLogin":
			ample.query("#Main-login").hide();
			ample.query("#Main-logout").show();
			break;

		case "TryLogout":
			ample.query("#Main-logout-button", this.element).attr("disabled", "true");
			break;

		case "LogoutFailure":
		case "LogoutSuccess":
			ample.query("#Main-logout-button", this.element).attr("disabled", null);
			ample.query("#Main-logout-button", this.element).attr("disabled", null);
			break;

		case "TryLogin":
			ample.query("#Main-login-form-submit", this.element).attr("disabled", "true");
			break;

		case "LoginFailure":
		case "LoginSuccess":
			ample.query("#Main-login-form-submit", this.element).attr("disabled", null);
			ample.query("#Main-login-form-submit", this.element).attr("disabled", null);
			break;

	}
};

Main.LoginMediator.prototype.handleEvent	= function(oEvent) {
	if (oEvent.type == "change") {
		switch (oEvent.target.getAttribute("id")) {

		}
	}
	else
	if (oEvent.type == "DOMActivate") {
		switch (oEvent.target.getAttribute("id")) {
			case "Main-login-form-submit":
				this.sendNotification("TryLogin", new Main.LoginEntity(
															ample.query("[name=login]", this.element).attr("value"),
															ample.query("[name=password]", this.element).attr("value"),
															ample.query("[name=remember]", this.element).attr("checked") == "true"
													));
				break;

			case "Main-logout-button":
				this.sendNotification("TryLogout");
				break;
		}
	}
};