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
			break;

		case "TryLogin":
			ample.query("#Main-login-form-submit", this.element).attr("disabled", "true");
			break;

		case "LoginSuccess":
			this.clearForm();
			// No break intentionally left
		case "LoginFailure":
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
				var bValid	= true,
					sLogin		= ample.query("[name=login]", this.element).attr("value"),
					sPassword	= ample.query("[name=password]", this.element).attr("value");

				if (sLogin == "") {
					bValid	= false;
				}
				if (sPassword == "") {
					bValid	= false;
				}

				if (bValid)
					this.sendNotification("TryLogin", new Main.LoginEntity(
															sLogin,
															sPassword
					));
				else
					ample.query(this.element).animate({"background-color":"pink"}, "fast", "ease", function() {
						ample.query(this).animate({"background-color":"white"});
					});
				break;

			case "Main-logout-button":
				this.sendNotification("TryLogout");
				break;
		}
	}
};

Main.LoginMediator.prototype.clearForm	= function() {
	ample.query("[name=login]", this.element).attr("value", "");
	ample.query("[name=password]", this.element).attr("value", "");
};

Main.LoginMediator.prototype.isRemember	= function() {
	return ample.query("[name=remember]", this.element).attr("checked") == "true";
};