<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VenueController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [VenueController::class, 'index']);


Route::get("/booking", [VenueController::class, 'booking']);

Route::get("/shop", function() {
    return Inertia::render("Shop/index", [
        "title" => "Shop"
    ]);
});

Route::get("/contact", function() {
    return Inertia::render("Contact/index", [
        "title" => "Contact"
    ]);
});

Route::get('/events', [EventController::class, 'index']);

// Route::get("/event", function() {
//     return Inertia::render("Event/index", [
//         "title" => "Event"
//     ]);
// });

// Route::get('/', function () {
//     return Inertia::render('Homepage/Homepage', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', [UserController::class, "index"])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
