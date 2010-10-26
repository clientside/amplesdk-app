<?php
//sleep(2);
	switch ($_GET["action"]) {
		case "login":
			if (isset($_POST["login"]) && $_POST["login"] == "admin" && isset($_POST["password"]) && $_POST["password"] == "admin")
				echo "a23hhje33h3912p";
			else
				echo "failure";
			break;

		case "logout":
			echo "success";
			break;
	}
?>