<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

// Design One Routes
Route::get('/starter', [PageController::class, 'homeOne'])->name('homeOne');
Route::get('/starter/about-us', [PageController::class, 'aboutOne'])->name('aboutOne');
Route::get('/starter/contact-us', [PageController::class, 'contactOne'])->name('contactOne');
Route::get('/starter/room-details', [PageController::class, 'roomDetailsOne'])->name('roomDetailsOne');
// Design Two Routes
Route::get('/business', [PageController::class, 'homeTwo'])->name('homeTwo');
Route::get('/business/about-us', [PageController::class, 'aboutTwo'])->name('aboutTwo');
Route::get('/business/contact-us', [PageController::class, 'contactTwo'])->name('contactTwo');
Route::get('/business/rooms', [PageController::class, 'roomsTwo'])->name('roomsTwo');
Route::get('/business/room-details', [PageController::class, 'roomDetailsTwo'])->name('roomDetailsTwo');

// Design Three Routes
Route::get('/enterprise', [PageController::class, 'homeThree'])->name('homeThree');
Route::get('/enterprise/about-us', [PageController::class, 'aboutThree'])->name('aboutThree');
Route::get('/enterprise/contact-us', [PageController::class, 'contactThree'])->name('contactThree');
Route::get('/enterprise/package-details', [PageController::class, 'packageDetailsThree'])->name('packageDetailsThree');