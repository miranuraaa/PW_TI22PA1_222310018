<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
      public function index() {
        $data = [
            "title" => "Sample IF Else",
            "npm" => "222310018",
        ];
            $students[] = array("npm" => "222310018", "name" => "Mira Nur Aulia");
            $students[] = array("npm" => "222310017", "name" => "Fadlan Syakur");
            $students[] = array("npm" => "222310019", "name" => "Siti Sarah");
            $students[] = array("npm" => "212310034", "name" => "Rayyan Pratama");

            $data['students'] = $students;

        // // untuk banyak data
        // $data = [
        //     "title" => "Sample if Else",
        //     "npm" => "222310018"
        // ];
        return view("modules.home.home", ["data"=>$data]); //key dan value
        // // return view("modules.home.home", ["title" => "Ini Title Home!"]); >> untuk 1 data
      }

      public function course(){
        $data = [
            ["course"=> "Matematika", "type"=> "Diskrit", "rate"=> "4"],
            ["course"=> " ", "type"=> "Aljabar Linear", "rate" => "3"],
            ["course"=> "Basis data", "type"=> "DDL", "rate" => "2"],
            ["course"=> "Bahasa Inggris", "type"=> "Speaker", "rate" => "1"],

        ];
        return view("modules.home.course", ["data"=> $data]);
      }
}
