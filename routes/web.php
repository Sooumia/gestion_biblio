<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;


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

Route::get('/category_page', [AdminController::class, 'category_page'])->middleware(['auth','admin']);
Route::post('/add_category', [AdminController::class, 'add_category'])->middleware(['auth','admin']);
Route::post('/cat_delete/{id}', [AdminController::class, 'cat_delete'])->middleware(['auth','admin']);
Route::get('/edit_category/{id}', [AdminController::class, 'edit_category'])->middleware(['auth','admin']);
Route::post('/update_category/{id}', [AdminController::class, 'update_category'])->middleware(['auth','admin']);

Route::get('/add_book', [AdminController::class, 'add_book'])->middleware(['auth','admin']);
Route::post('/store_book', [AdminController::class, 'store_book'])->middleware(['auth','admin']);
Route::get('/show_book', [AdminController::class, 'show_book'])->middleware(['auth','admin']);
Route::get('/book_delete/{id}', [AdminController::class, 'book_delete'])->middleware(['auth','admin']);
Route::get('/book_edit/{id}', [AdminController::class, 'book_edit'])->middleware(['auth','admin']);
Route::post('/book_update/{id}', [AdminController::class, 'book_update'])->name('book_update')->middleware(['auth','admin']);

Route::get('/books', [UserController::class, 'index'])->name('books');
Route::get('/book_details/{id}', [UserController::class, 'show'])->name('book_details');
Route::get('/borrow_books/{id}', [UserController::class, 'borrow_books'])->name('borrow_books');
Route::get('/borrow_request', [AdminController::class, 'borrow_request'])->middleware(['auth','admin']);
Route::get('/approve_book/{id}', [AdminController::class, 'approve_book'])->middleware(['auth','admin']);
Route::get('/return_book/{id}', [AdminController::class, 'return_book'])->middleware(['auth','admin']);
Route::get('/rejected_book/{id}', [AdminController::class, 'rejected_book'])->middleware(['auth','admin']);


Route::get('/book_history',[UserController::class,'book_history']);


Route::get('/cancel_req/{id}',[UserController::class,'cancel_req']);

Route::get('/search',[UserController::class,'search']);

Route::get('/cat_search/{id}',[UserController::class,'cat_search']);



Route::put('update_profil', [ProfileController::class, 'update_profil'])->name('profile.update');
