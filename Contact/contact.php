<?php

$name=$_REQUEST['floatingName'];
$email=$_REQUEST['floatingInput'];
$message=$_REQUEST['floatingTextarea'];
  

mail("ayush.071998@gmail.com","feedback",$message,"From:$name< $email>");
echo "<script type=text/javascript>alert('your message sent succesfully')
window.history.log(-1);
</script>";






?>
