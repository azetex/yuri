<?php
	//reCAPTCHA Configuration - go to Google and get the below keys http://www.google.com/recaptcha/admin
	//reCAPTCHA keys for westcoastfalller.ca
	define('SITE_KEY',"6Lfj02cdAAAAAHnvaS4r1yjMSdPx0x6hLUcylIQb"); 
	define('SECRET_KEY',"6Lfj02cdAAAAADk1H0bWSovCpQYfx3iDyERBQonv");
	define('EMAIL_TO', "azetex@gmail.com");

	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
	header("Content-Type: application/json");

	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);

	if (empty($_POST['name']) && empty($_POST['email'])) die();

	if ($_POST) {
		http_response_code(200);

		$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
		$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
		$message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

		$name = str_replace(
			array('á', 'č', 'ď', 'é', 'ě', 'í', 'ň', 'ó', 'ř', 'š', 'ť', 'ú', 'ů', 'ý', 'ž', 'Á', 'Č', 'Ď', 'É', 'Ě', 'Í', 'Ň', 'Ó', 'Ř', 'Š', 'Ť', 'Ú', 'Ů', 'Ý', 'Ž'),
			array('a', 'c', 'd', 'e', 'e', 'i', 'n', 'o', 'r', 's', 't', 'u', 'u', 'y', 'z', 'A', 'C', 'D', 'E', 'E', 'I', 'N', 'O', 'R', 'S', 'T', 'U', 'U', 'Y', 'Z'),
			$name
		);

		$message = str_replace(
			array('á', 'č', 'ď', 'é', 'ě', 'í', 'ň', 'ó', 'ř', 'š', 'ť', 'ú', 'ů', 'ý', 'ž', 'Á', 'Č', 'Ď', 'É', 'Ě', 'Í', 'Ň', 'Ó', 'Ř', 'Š', 'Ť', 'Ú', 'Ů', 'Ý', 'Ž'),
			array('a', 'c', 'd', 'e', 'e', 'i', 'n', 'o', 'r', 's', 't', 'u', 'u', 'y', 'z', 'A', 'C', 'D', 'E', 'E', 'I', 'N', 'O', 'R', 'S', 'T', 'U', 'U', 'Y', 'Z'),
			$message
		);

		$mailTo = EMAIL_TO;

		$mailSubject = "WestCoastFaller Web Contact Form";

		$mailBody = "Name:" . $name . "\n";
		$mailBody .= "Email:" . $email . "\n";
		$mailBody .= "Message:" . $message . "\n";

		$mailHeaders = "MIME-Version:1.0\r\n";
		$mailHeaders .= "Content-type:application/json\r\n";
		$mailHeaders .= "From:" . $name . "<" . $email . ">\r\n";

		//reCAPTCHA validation
		if (isset($_POST['g-recaptcha-response'])) {
			require('component/recaptcha/src/autoload.php');		
			
			$recaptcha = new \ReCaptcha\ReCaptcha(SECRET_KEY);

			$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

			if (!$resp->isSuccess()) {
					$output = json_encode(array('type'=>'error', 'text' => '<b>Captcha</b> Validation Required!'));
					die($output);				
			}	
		}

		if (!@mail($mailTo, $mailSubject, $mailBody, $mailHeaders)){
			$error = error_get_last();
			echo json_encode(array("sent" => false, "errorType" => $error['type'], "errorMessage" => $error['message'], "errorFile" => $error['file'], "errorLine" => $error['line']));
		} else {
			echo json_encode(array("sent" => true));
		}
	}
	else
	{
		echo json_encode(array("sent" => false, "errorMessage" => "Something went wrong"));
	}
?>

