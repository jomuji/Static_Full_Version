<?php
  $json = file_get_contents("php://input");
  $file = fopen('ingredients.json','w+');
    $request = json_decode($file);
  fwrite($request, $json);
  fclose($request);
?>