Workspace.DataProxy	= function() {
	MVC.Proxy.apply(this, arguments);
};

Workspace.DataProxy.prototype	= new MVC.Proxy;

Workspace.DataProxy.prototype.selectedItem	= null;

Workspace.DataProxy.prototype.onRegister	= function() {
	this.createItem(new Workspace.DataItemEntity("1", "A name", "A description"));
	this.createItem(new Workspace.DataItemEntity("2", "B name", "B description"));
	this.createItem(new Workspace.DataItemEntity("3", "C name", "C description"));
	this.createItem(new Workspace.DataItemEntity("4", "D name", "D description"));
	this.createItem(new Workspace.DataItemEntity("5", "E name", "E description"));
};

Workspace.DataProxy.prototype.createItem	= function(/* Workspace.DataItemEntity */ item) {
	this.data.push(item);
	//
	this.sendNotification("DataItemCreated", item);
};

Workspace.DataProxy.prototype.updateItem	= function(/* Workspace.DataItemEntity */ item) {
	if (item == this.getItem(item.id)) {
		//
		this.sendNotification("DataItemUpdated", item);
	}
};

Workspace.DataProxy.prototype.deleteItem	= function(/* Workspace.DataItemEntity */ item) {
	var removed = this.data.splice(this.data.indexOf(item), 1);

	//
	this.sendNotification("DataItemDeleted", removed);
};

Workspace.DataProxy.prototype.getItem	= function(sId) {
	for (var nIndex = 0; nIndex < this.data.length; nIndex++)
		if (this.data[nIndex].id == sId)
			return this.data[nIndex];
	return null;
};