function Workspace() {

};

Workspace.prototype	= new Controller;

Workspace.prototype.init	= function() {
	this.model	= new Workspace.Model;
	this.view	= new Workspace.View;
	//
	Controller.prototype.init.call(this);
};