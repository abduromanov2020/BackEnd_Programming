<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

# Endpoint Animal
# method get, endpoint animals
Route::get('/animals', [AnimalController::class, 'index']);

# method post, endpoint animals
Route::post('/animals', [AnimalController::class, 'store']);

# method put, endpoint animals
Route::put('/animals/{id}', [AnimalController::class, 'update']);

# method delete
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);



# endpoint student
# Route Students 
Route::get('/students', [StudentController::class, 'index']);

# Route Post endpoint student
Route::post('/students', [StudentController::class, 'store']);

# Route Show endpoint student
Route::get('/students/{id}', [StudentController::class, 'show']);

# Route Update endpoint student
Route::put('/students/{id}', [StudentController::class, 'update']);

# Route Delete endpoint student
Route::delete('/students/{id}', [StudentController::class, 'destroy']);
