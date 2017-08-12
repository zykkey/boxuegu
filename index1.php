<?php
   header("Content-Type:text/html;charset-utf-8");
//   echo $_SERVER["PATH_INFO"];
//var_dump($_SERVER);


$path=$_SERVER["PATH_INFO"];
include $path.".html";
?>