MVC.Command	= function(mvc) {
	this.facade	= mvc;
	//
	this.children	= [];
};

//
MVC.Command.prototype.facade	= null;

//
MVC.Command.prototype.children	= null;
MVC.Command.prototype.current	=-1;

MVC.Command.prototype.addChild	= function(oMvc) {
	var nIndex	= this.children.indexOf(oMvc);
	if (nIndex < 0) {
		this.children.push(oMvc);
	}
};
/*
MVC.Command.prototype.removeChild	= function(oMvc) {
	var nIndex	= this.children.indexOf(oController);
	if (nIndex >-1)
		this.children	= this.children.slice(0, nIndex).concat(this.children.slice(nIndex + 1));
};
*/

//
MVC.Command.prototype.sendNotification	= function(sNotification, oDetail) {
	// Forward notification to facade
	this.facade.sendNotification(sNotification, oDetail);
};

//
MVC.Command.prototype.execute	= function() {
	for (var n = 0, l = this.children.length; n < l; n++)
		this.children[n].execute();
};

MVC.Command.prototype.cancel	= function() {

};

MVC.Command.prototype.pause		= function() {

};

MVC.Command.prototype.resume	= function() {

};