Workspace.View	= function() {

};

Workspace.View.prototype	= new View;

Workspace.View.prototype.init	= function() {
	var o = new XMLHttpRequest;
	o.open("GET", "res/.children/workspace/workspace.xml", false);
	o.send(null);
	console.log(this);
};