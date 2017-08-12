<?php
header("Content-Type:text/html;charset-utf-8");
//   echo $_SERVER["PATH_INFO"];
//var_dump($_SERVER);
//include '/views/dashboard/index.html'
//include $path . ".html";


$path = $_SERVER["PATH_INFO"];
include $path . ".html";
?>