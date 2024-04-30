<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller{
    public function index(){
        return view('profile.profile');
  }
    public function identity(){
        return view('profile.identity');
  }
    public function family(){
        return view('profile.family');
  }
}
