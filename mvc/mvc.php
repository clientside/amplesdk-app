<?php
	$aFiles		= array();

	// Classes
	$aFiles[]	= "classes/MVC.js";
	$aFiles[]	= "classes/MVC.Command.js";
	$aFiles[]	= "classes/MVC.Mediator.js";
	$aFiles[]	= "classes/MVC.Notification.js";
	$aFiles[]	= "classes/MVC.Proxy.js";
	//
	$aFiles[]	= "classes/MVC.MacroCommand.js";
	//
	$aFiles[]	= "classes/MVC.StartupCommand.js";
	$aFiles[]	= "classes/MVC.ShutdownCommand.js";

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