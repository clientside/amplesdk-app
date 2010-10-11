function View() {
	this.mediators	= [];
};

//
View.prototype.mediators	= null;

View.prototype.sendNotification	= function(oNotification) {
	this.handleNotification(oNotification);
};

View.prototype.handleNotification	= function(oNotification) {

};

//
View.prototype.init	= function() {
	for (var n = 0, l = this.mediators.length; n < l; n++)
		this.mediators[n].init();
};

//
View.prototype.addMediator	= function(oMediator) {
	this.mediators.push(oMediator);
	oMediator.view	= this;
};