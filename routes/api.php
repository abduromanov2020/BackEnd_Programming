<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\patientsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    // EndPoint Patients

    // Method Get, Get All Resource
    Route::get('/patients', [patientsController::class, 'index'])->middleware('auth:sanctum');

    // Method Post, Add Resource
    Route::post('/patients', [patientsController::class, 'store']);

    // Method Get, Get Detail Resource
    Route::get('/patients/{id}', [patientsController::class, 'show']);

    // Method Put, Update Resource
    Route::put('/patients/{id}', [patientsController::class, 'update']);

    // Method Delete, Delete Resource
    Route::delete('/patients/{id}', [patientsController::class, 'destroy']);


    // Method Get, Search Resource By Name
    Route::get('/patients/search/{name}', [patientsController::class, 'search']);

    // Method Get, Get Positive Resource
    Route::get('/patients/status/positive', [patientsController::class, 'positive']);

    // Method Get, Get Recovered Resource
    Route::get('/patients/status/recovered', [patientsController::class, 'recovered']);

    // Method Get, Get Dead Resource
    Route::get('/patients/status/dead', [patientsController::class, 'dead']);
});





// EndPoint Register dan Login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
