<?php
	$aFiles		= array();

	// Classes
	$aFiles[]	= "Workspace.js";
	$aFiles[]	= "Workspace.Model.js";
	$aFiles[]	= "Workspace.View.js";
	//
	$aFiles[]	= "commands/_ReadyCommand.js";
	//
	$aFiles[]	= "mediators/DummyMediator.js";
	//
	$aFiles[]	= "proxies/DataProxy.js";

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