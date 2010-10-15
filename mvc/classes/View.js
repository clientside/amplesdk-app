function View(oController) {
	this.mediators	= {};
	this.controller	= oController;
};

//
View.prototype.mediators	= null;
View.prototype.controller	= null;

//
View.prototype.init	= function() {

};

//
View.prototype.addMediator	= function(sName, oMediator) {
	this.mediators[sName]	= oMediator;
	oMediator.view	= this;
};