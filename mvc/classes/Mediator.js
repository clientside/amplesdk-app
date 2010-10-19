function Mediator(view) {
	this.view	= view;
};

Mediator.prototype.view	= null;

Mediator.prototype.sendNotification	= function(sNotification, oDetail) {
	// Forward notification to controller
	this.view.controller.sendNotification(sNotification, oDetail);
};

//
Mediator.prototype.handleNotification	= function(oNotification) {

};

Mediator.prototype.onRegister	= function() {

};

Mediator.prototype.onRemove		= function() {

};