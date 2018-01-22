<?php
if(isset($_POST['email'])) {
     
    // EDIT THE BELOW TWO LINES AS REQUIRED
    $email_to = "info@oxoftmedia.com";
    $email_subject = "Formulario de Contacto a traves  de oxoftmedia.com";
     
     
    function errorMesg() {
        echo '2';
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['message'])) {
        errorMesg();       
    }
     
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
	$mysubject = $_POST['subject']; // required
    $mymessage = $_POST['message']; // required
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message = "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
	$email_message .= "Subject: ".clean_string($mysubject)."\n";
    $email_message .= "Message: ".clean_string($mymessage)."\n";
     
     
// create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    if(mail($email_to, $email_subject, $email_message, $headers)){
        echo '1';
    }
}
?>
