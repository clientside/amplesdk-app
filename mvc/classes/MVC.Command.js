MVC.Command	= function(facade) {
	this.facade	= facade;
};

//
MVC.Command.prototype.facade	= null;

//
MVC.Command.prototype.sendNotification	= function(sNotification, oDetail) {
	// Forward notification to facade
	this.facade.sendNotification(sNotification, oDetail);
};

//
MVC.Command.prototype.execute	= function() {

};
