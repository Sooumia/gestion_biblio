<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

Route::get('/home', [AdminController::class, 'index']);

Route::get('/logout', [AdminController::class, 'logout'])->name('logout');

Route::get('/category_page', [AdminController::class, 'category_page']);
Route::post('/add_category', [AdminController::class, 'add_category']);
Route::post('/cat_delete/{id}', [AdminController::class, 'cat_delete']);
Route::get('/edit_category/{id}', [AdminController::class, 'edit_category']);
Route::post('/update_category/{id}', [AdminController::class, 'update_category']);

Route::get('/add_book', [AdminController::class, 'add_book']);
Route::post('/store_book', [AdminController::class, 'store_book']);
Route::get('/show_book', [AdminController::class, 'show_book']);
Route::get('/book_delete/{id}', [AdminController::class, 'book_delete']);
Route::get('/book_edit/{id}', [AdminController::class, 'book_edit']);
Route::post('/book_update/{id}', [AdminController::class, 'book_update'])->name('book_update');

Route::get('/books', [UserController::class, 'index'])->name('books');
Route::get('/book_details/{id}', [UserController::class, 'show'])->name('book_details');
Route::get('/borrow_books/{id}', [UserController::class, 'borrow_books'])->name('borrow_books');


