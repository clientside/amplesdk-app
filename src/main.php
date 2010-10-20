<?php
	$aFiles		= array();

	// Classes
	$aFiles[]	= "Main.js";
	//
	$aFiles[]	= "controller/_ReadyCommand.js";
	$aFiles[]	= "controller/TryLoginCommand.js";
	$aFiles[]	= "controller/TryLogoutCommand.js";
	$aFiles[]	= "controller/LoginSuccessCommand.js";
	$aFiles[]	= "controller/LogoutSuccessCommand.js";
	$aFiles[]	= "controller/ShowWorkspaceCommand.js";
	$aFiles[]	= "controller/HideWorkspaceCommand.js";
	//
	$aFiles[]	= "view/LoginMediator.js";
	//
	$aFiles[]	= "model/entities/AuthEntity.js";
	$aFiles[]	= "model/entities/LoginEntity.js";
	$aFiles[]	= "model/AuthProxy.js";

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