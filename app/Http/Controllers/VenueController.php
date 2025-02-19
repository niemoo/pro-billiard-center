<?php

namespace App\Http\Controllers;

use App\Http\Resources\VenueCollection;
use App\Models\Venue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VenueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $venue = new VenueCollection(Venue::all());
        
        return Inertia::render("Homepage/index", [
            "title" => "Pro Billiard Center",
            "venues" => $venue
        ]);
    }
    
    public function booking()
    {
        $venue = new VenueCollection(Venue::all());

        return Inertia::render("Booking/index", [
            "title" => "Booking",
            "venues" => $venue
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
