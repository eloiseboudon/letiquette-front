<?php

echo 'coucou';

//header('Content-type: application/json');


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);



$nom = $request->nom;
$prenom = $request->prenom;
$from_email = $request->email;
$telephone = $request->telephone;
$message = $request->message;


$to_email = 'eloise.boudon@letiquette-shop.com';

$content = "$nom $prenom $from_email $telephone a envoyé un message : $message
<br/>";


$email_subject = "[Contactez-nous MARKETPLACE]";


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: L'etiquette <ne-pas-repondre@letiquette-shop.com>" . "\r\n";

mail($to_email,$email_subject,$content,$headers);

mail($from_email, "Merci pour votre message", "Merci", $headers);

?>