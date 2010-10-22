Workspace.DataProxy	= function() {
	MVC.Proxy.apply(this, arguments);
};

Workspace.DataProxy.prototype	= new MVC.Proxy;

Workspace.DataProxy.prototype.selectedItem	= null;

Workspace.DataProxy.prototype.onRegister	= function() {
	this.data.push(new Workspace.DataItemEntity("1", "A name", "A description"));
	this.data.push(new Workspace.DataItemEntity("2", "B name", "B description"));
	this.data.push(new Workspace.DataItemEntity("3", "C name", "C description"));
	this.data.push(new Workspace.DataItemEntity("4", "D name", "D description"));
	this.data.push(new Workspace.DataItemEntity("5", "E name", "E description"));
};

Workspace.DataProxy.prototype.createItem	= function() {
	//
	var that	= this;
	setTimeout(function(){
		var item	= new Workspace.DataItemEntity("temp-" + new Date().getTime());
		that.data.push(item);
		// Notify
		that.sendNotification("DataItemCreated", item);
	}, 100);
};

Workspace.DataProxy.prototype.updateItem	= function(/* Workspace.DataItemEntity */ item) {
	//
	var that	= this;
	setTimeout(function(){
		for (var n = 0; n < that.data.length; n++)
			if (that.data[n].id == item.id) {
				// TODO: Update
				that.data[n].name			= item.name;
				that.data[n].description	= item.description;
				break;
			}
		//
		that.sendNotification("DataItemUpdated", item);
	}, 100);
};

Workspace.DataProxy.prototype.deleteItem	= function(/* Workspace.DataItemEntity */ item) {
	//
	var that	= this;
	setTimeout(function(){
		that.data.splice(that.data.indexOf(item), 1);
		//
		that.sendNotification("DataItemDeleted", item);
	}, 100);
};

Workspace.DataProxy.prototype.getItem	= function(sId) {
	for (var nIndex = 0; nIndex < this.data.length; nIndex++)
		if (this.data[nIndex].id == sId)
			return this.data[nIndex];
	return null;
};