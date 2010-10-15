Login.View.FormMediator	= function() {
	Mediator.apply(this, arguments);
};

Login.View.FormMediator.prototype	= new Mediator;

Login.View.FormMediator.prototype.onRegister	= function() {
	ample.query("#Login-form", this.view.element)
		.bind("click", this)
		.bind("change", this);
};

Login.View.FormMediator.prototype.handleNotification	= function(oNotification) {
	switch (oNotification.name) {
		case "$Ready":
		case "Show":
			ample.query(this.view.element).show("slow");
			break;

		case "Hide":
			ample.query(this.view.element).hide("slow");
			break;

		case "TryLogin":
			ample.query("#Login-form-submit", this.view.element).attr("disabled", "true");
			break;

		case "LoginFailed":
			ample.query("#Login-form-submit", this.view.element).attr("disabled", null);
			break;

		case "LoginSuccess":
			ample.query("#Login-form-submit", this.view.element).attr("disabled", null);
			break;

	}
};

Login.View.FormMediator.prototype.handleEvent	= function(oEvent) {
	if (oEvent.type == "change") {
		switch (oEvent.target.getAttribute("id")) {
			case "Login-form-name":
				break;

			case "Login-form-pass":
				break;
		}
	}
	else
	if (oEvent.type == "click") {
		switch (oEvent.target.getAttribute("id")) {
			case "Login-form-submit":
				this.sendNotification("TryLogin");
				break;
		}
	}
};