<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    // Design One Pages
    public function homeOne()
    {
        return Inertia::render('DesignOne/HomeOne');
    }
    public function aboutOne()
    {
        return Inertia::render('DesignOne/AboutOne');
    }
    public function contactOne()
    {
        return Inertia::render('DesignOne/ContactOne');
    }
    public function roomDetailsOne(Request $request)
    {
        $room = json_decode($request->query('room'), true);
        return Inertia::render('DesignOne/RoomDetailsOne', ['room' => $room]);
    }

    // Design Two Pages
    public function homeTwo()
    {
        return Inertia::render('DesignTwo/HomeTwo');
    }
    public function aboutTwo()
    {
        return Inertia::render('DesignTwo/AboutTwo');
    }
    public function contactTwo()
    {
        return Inertia::render('DesignTwo/ContactTwo');
    }
    public function roomsTwo()
    {
        return Inertia::render('DesignTwo/RoomsTwo');
    }
    public function roomDetailsTwo(Request $request)
    {
        $room = json_decode($request->query('room'), true);
        return Inertia::render('DesignTwo/RoomDetailsTwo', ['room' => $room]);
    }

    // Design Three Pages
    public function homeThree()
    {
        return Inertia::render('DesignThree/HomeThree');
    }
    public function aboutThree()
    {
        return Inertia::render('DesignThree/AboutThree');
    }
    public function contactThree()
    {
        return Inertia::render('DesignThree/ContactThree');
    }
    public function packageDetailsThree(Request $request)
    {
        $package = json_decode($request->query('package'), true);
        return Inertia::render('DesignThree/PackageDetailsThree', ['package' => $package]);
    }
}
