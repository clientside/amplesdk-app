Main.AuthProxy	= function() {
	MVC.Proxy.apply(this, arguments);
};

Main.AuthProxy.prototype	= new MVC.Proxy;

Main.AuthProxy.prototype.onRegister	= function() {
	// Read token from cookie
//	that.data.token	= ample.cookie("token");
};

Main.AuthProxy.prototype.login	= function(/* LoginEntity */login) {
	var that	= this;
	ample.ajax({type: "POST",
				url: "srv/auth.php?action=login",
				data: "login=" + encodeURIComponent(login.login) + "&password=" + encodeURIComponent(login.password),
				headers: {"Content-Type": "application/x-www-form-urlencoded"},
				success: function(response) {
					if (response == "failure")
						that.sendNotification("LoginFailure");
					else {
						that.data.token	= response;
						// Save token to cookie
//						if (login.remeber)
//							ample.cookie("token", that.data.token);
						that.sendNotification("LoginSuccess");
					}
				}
	});
};

Main.AuthProxy.prototype.logout	= function() {
	var that	= this;
	ample.post("srv/auth.php?action=logout", null, function(response) {
		if (response == "failure")
			that.sendNotification("LogoutFailure");
		else {
			that.data.token	= "";
			//
//			ample.cookie("token", null);
			that.sendNotification("LogoutSuccess");
		}
	});
};

Main.AuthProxy.prototype.isAuthenticated	= function() {
	return !!this.data.token;
};