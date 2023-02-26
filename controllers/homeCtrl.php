<?php

require_once(__DIR__ . '/../models/Map.php');

$listMap = Map::getall();
include(__DIR__ . '/../views/home.php');
