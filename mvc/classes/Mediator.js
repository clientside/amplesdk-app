function Mediator(view) {
	this.view	= view;
};

Mediator.prototype.view	= null;

Mediator.prototype.sendNotification	= function(oNotification) {
	// Forward notification to controller
	oNotification.target.sendNotification(oNotification);
};

//
Mediator.prototype.handleNotification	= function(oNotification) {

};

Mediator.prototype.onRegister	= function() {

};

Mediator.prototype.onRemove		= function() {

};