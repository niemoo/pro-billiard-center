<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventCollection;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $events = new EventCollection(Event::paginate(5));

    //     return Inertia::render('Event/index', [
    //         'title' => 'Events',
    //         'events' => $events,
    //     ]);
    // }
    public function index()
    {
        $limit = request()->query('limit', 5);

        $limit = is_numeric($limit) && $limit > 0 ? min($limit, 100): 5;

        $events = Event::paginate($limit);

        return response()->json([
            'meta' => [
                'current_page' => $events->currentPage(),
                'last_page' => $events->lastPage(),
                'per_page' => $events->perPage(),
                'total' => $events->total(),
            ],
            'success' => true,
            'data' => new EventCollection($events),
            'message' => 'Events retrieved successfully',
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
