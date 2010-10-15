<?php
	$aFiles		= array();

	// Classes
	$aFiles[]	= "Main.js";
	$aFiles[]	= "Main.Model.js";
	$aFiles[]	= "Main.View.js";
	//
	$aFiles[]	= "commands/_ReadyCommand.js";
	$aFiles[]	= "commands/TryLoginCommand.js";
	$aFiles[]	= "commands/TryLogoutCommand.js";
	$aFiles[]	= "commands/ShowWorkspaceCommand.js";
	$aFiles[]	= "commands/HideWorkspaceCommand.js";
	//
	$aFiles[]	= "mediators/LoginMediator.js";
	//
	$aFiles[]	= "proxies/UserProxy.js";

	$sOutput	= "";
	for ($nIndex = 0; $nIndex < count($aFiles); $nIndex++)
		$sOutput	.= join('', file($aFiles[$nIndex])) . "\n";

	header("Content-type: application/javascript");

	echo 	"" .
//			"(function(){" .
				$sOutput .
//			"})()".
			"";
?>