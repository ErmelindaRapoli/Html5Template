<?php
$to = "youremailaddress@sssssss.yyy";
$cc = "";

$email = $_POST["email"];
$cc = $email;
$message = $_POST["message"];
//... get here other info...
$subject = "From Racen.it contact form";
//Mail Body - Position, background, font color, font size...
$body ='
    <!DOCTYPE HTML>
    <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <style>
        <!--
        body, P.msoNormal, LI.msoNormal
        {
        background-position: top;
        background-color: #336699;
        margin-left:  10em;
        margin-top: 1em;
        font-family: "verdana";
        font-size:   10pt;
        font-weight:bold ;
        color:    "000000";
        }
        -->
        </style>
        </head>
        <body>
        <div style="background-color:rgb(50,176,238)"><img src=""></div>
        <div>
        
        Mail mittente: __mail__<br>
        Messaggio:<br>
        __text__
        </div>
        </body>
    </html>
';
//To send HTML mail, the Content-type header must be set:
$headers   = array();
$headers[]="MIME-Version: 1.0";
$headers[]= "Content-type: text/html;charset=iso-8859-1";
$headers[] = "From: webmaster <webmaster@domain.com>";
$headers[] = "X-Mailer: PHP/".phpversion();

$body = str_replace("__text__", $message, $body);
$body = str_replace("__mail__", $email, $body);

if(mail($to, $subject, $body, implode("\r\n", $headers)))
{
    //echo "Email sent!<br>";
            echo "<p style='color:'#494545'>Your mail has been received.<br>We will contact you soon. ";
            echo "Please, press \"OK\"</p><br>";
            echo "<div class=line><input type='button' class='form-btn'  id='back' value='OK' onclick='document.location.href=\"index.html\"'></div>";
        
}
else
{
    //ko.
    echo "Mailer Error";
}
?>
