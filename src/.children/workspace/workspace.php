<?php
	$aFiles		= array();

	// Classes
	$aFiles[]	= "Workspace.js";
	//
	$aFiles[]	= "controller/_ReadyCommand.js";
	//
	$aFiles[]	= "view/DataListMediator.js";
	$aFiles[]	= "view/DataItemFormMediator.js";
	//
	$aFiles[]	= "model/entities/DataItemEntity.js";
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