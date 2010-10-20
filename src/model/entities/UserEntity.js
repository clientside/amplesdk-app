Main.UserEntity	= function(login, password) {
	this.login		= login;
	this.password	= password;
};

Main.UserEntity.prototype.token		= null;
Main.UserEntity.prototype.login		= null;
Main.UserEntity.prototype.password	= null;