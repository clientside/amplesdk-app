function View() {
	this.mediators	= {};
};

//
View.prototype.mediators	= null;

//
View.prototype.init	= function() {
	for (var sName in this.mediators)
		if (this.mediators.hasOwnProperty(sName))
			this.mediators[sName].onRegister();
};

//
View.prototype.addMediator	= function(sName, oMediator) {
	this.mediators[sName]	= oMediator;
	oMediator.view	= this;
};