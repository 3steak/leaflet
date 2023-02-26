<?php
require_once(__DIR__ . '/../helpers/db.php');

class Map extends Database
{
    private $latitude;
    private $longitude;
    private $name;


    public function __construct()
    {
        parent::__construct();
    }

    public static function getall()
    {
        $request = 'SELECT * FROM `data`;';
        $database = new Database();
        $listMap = $database->queryRequest($request);
        return $listMap;
    }
}
