Main.AuthProxy	= function() {
	MVC.Proxy.apply(this, arguments);
};

Main.AuthProxy.prototype	= new MVC.Proxy;

Main.AuthProxy.prototype.onRegister	= function() {
	this.data.token	= ample.cookie("token");
};

Main.AuthProxy.prototype.login	= function(/* LoginEntity */login) {
	var that	= this;
	ample.post( "srv/auth.php?action=login",
				"login=" + encodeURIComponent(login.login) + "&password=" + encodeURIComponent(login.password),
				function(response) {
					if (response == "failure")
						that.sendNotification("LoginFailure");
					else {
						that.data.token	= response;
						that.sendNotification("LoginSuccess");
					}
				}
	);
};

Main.AuthProxy.prototype.logout	= function() {
	var that	= this;
	ample.post( "srv/auth.php?action=logout",
				"token=" + encodeURIComponent(this.data.token),
				function(response) {
					if (response == "failure")
						that.sendNotification("LogoutFailure");
					else {
						that.data.token	= "";
						//
			//			ample.cookie("token", null);
						that.sendNotification("LogoutSuccess");
					}
				}
	);
};

Main.AuthProxy.prototype.isAuthenticated	= function() {
	return !!this.data.token;
};