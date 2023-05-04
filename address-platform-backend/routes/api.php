<?php

use App\Http\Controllers\API\V1\AddressBookController;
use App\Http\Controllers\API\V1\Auth\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'v1/'], function () {
    Route::post('/login', [AuthenticationController::class, 'login'])->name('login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/auth-user', [AuthenticationController::class, 'me'])->name('auth-user');
        Route::post('/logout', [AuthenticationController::class, 'logout'])->name('logout');
        Route::group(['prefix' => 'address-books'], function () {
            Route::get('/',[AddressBookController::class,'index']);
            Route::post('/',[AddressBookController::class,'store']);
            Route::put('/{addressBook}',[AddressBookController::class,'update']);
            Route::get('/{addressBook}',[AddressBookController::class,'edit']);
            Route::delete('/{addressBook}',[AddressBookController::class,'destroy']);
        });
    });
});
