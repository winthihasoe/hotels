<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

// Design One Routes
Route::get('/1', [PageController::class, 'homeOne'])->name('homeOne');
Route::get('/1/about-us', [PageController::class, 'aboutOne'])->name('aboutOne');
Route::get('/1/contact-us', [PageController::class, 'contactOne'])->name('contactOne');

// Design Two Routes
Route::get('/2', [PageController::class, 'homeTwo'])->name('homeTwo');
Route::get('/2/about-us', [PageController::class, 'aboutTwo'])->name('aboutTwo');
Route::get('/2/contact-us', [PageController::class, 'contactTwo'])->name('contactTwo');

// Design Three Routes
Route::get('/3', [PageController::class, 'homeThree'])->name('homeThree');
Route::get('/3/about-us', [PageController::class, 'aboutThree'])->name('aboutThree');
Route::get('/3/contact-us', [PageController::class, 'contactThree'])->name('contactThree');