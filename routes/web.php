<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Homepage/index', [
        'title' => "Pro Billiard Center",
    ]);
});

Route::get("/booking", function() {
    return Inertia::render("Booking/index", [
        "title" => "Booking"
    ]);
});

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
