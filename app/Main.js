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

Main.prototype.handleNotification	= function(oNotification) {
	if (oNotification.target == this) {
		switch (oNotification.type) {
			case "ready":
				alert("Main is ready");
				break;
		}
	}
};