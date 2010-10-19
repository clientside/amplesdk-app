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

		case "TryLogin":
			ample.query("#Main-login-form-submit", this.element).attr("disabled", "true");
			break;

		case "LoginFailed":
			ample.query("#Main-login-form-submit", this.element).attr("disabled", null);
			break;

		case "LoginSuccess":
			ample.query("#Main-login-form-submit", this.element).attr("disabled", null);
			break;

	}
};

Main.LoginMediator.prototype.handleEvent	= function(oEvent) {
	if (oEvent.type == "change") {
		switch (oEvent.target.getAttribute("id")) {
			case "Main-login-form-name":
				this.facade.retrieveProxy("UserProxy").setData("name", oEvent.target.getAttribute("value"));
				break;

			case "Main-login-form-pass":
				this.facade.retrieveProxy("UserProxy").setData("pass", oEvent.target.getAttribute("value"));
				break;
		}
	}
	else
	if (oEvent.type == "DOMActivate") {
		switch (oEvent.target.getAttribute("id")) {
			case "Main-login-form-submit":
				this.sendNotification("TryLogin");
				break;

			case "Main-logout-button":
				this.sendNotification("TryLogout");
				break;
		}
	}
};