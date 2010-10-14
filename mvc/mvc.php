<?php
	$aFiles		= array();

	// Classes
	$aFiles[]	= "classes/Command.js";
	$aFiles[]	= "classes/Controller.js";
	$aFiles[]	= "classes/Mediator.js";
	$aFiles[]	= "classes/Model.js";
	$aFiles[]	= "classes/Notification.js";
	$aFiles[]	= "classes/Proxy.js";
	$aFiles[]	= "classes/View.js";
	//
	$aFiles[]	= "classes/Controller.StartupCommand.js";
	$aFiles[]	= "classes/Controller.ShutdownCommand.js";

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