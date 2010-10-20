<?php
	$aFiles		= array();

	// Classes
	$aFiles[]	= "Workspace.js";
	//
	$aFiles[]	= "controller/_ReadyCommand.js";
	//
	$aFiles[]	= "view/DummyMediator.js";
	//
	$aFiles[]	= "model/entities/DataItem.js";
	$aFiles[]	= "model/DataProxy.js";

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