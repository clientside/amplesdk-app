MVC.Mediator	= function(mvc, element) {
	this.facade		= mvc;
	this.element	= element;
};

MVC.Mediator.prototype.facade	= null;
MVC.Mediator.prototype.element	= null;

MVC.Mediator.prototype.sendNotification	= function(sNotification, oDetail) {
	// Forward notification to facade
	this.facade.sendNotification(sNotification, oDetail);
};

//
MVC.Mediator.prototype.handleNotification	= function(oNotification) {

};

MVC.Mediator.prototype.onRegister	= function() {

};

MVC.Mediator.prototype.onRemove		= function() {

};