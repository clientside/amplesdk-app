Workspace.Model	= function() {
	//
	Model.apply(this, arguments);
};

Workspace.Model.prototype	= new Model;

Workspace.Model.prototype.init	= function() {
	//
	Model.prototype.init.call(this);
};