<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Book;
use App\Models\Borrow;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $data = Book::all(); // Fetch all books from the database
        return view('user.books', compact('data')); // Pass the data to the view
    }

    public function show($id) {
        $book = Book::find($id); // Fetch the book by its ID
        if (!$book) {
            return redirect()->route('books')->with('error', 'Book not found');
        }
        return view('user.book_details', compact('book')); // Pass the book data to the view
    }

    public function borrow_books($id) {
        $data = Book::find($id);

        $book_id = $id;
        $quantity = $data->quantity;

        if ($quantity >= 1) {
            if (Auth::id()) {
                $user_id = Auth::user()->id;
                $borrow = new Borrow;
                $borrow->book_id = $book_id;
                $borrow->user_id = $user_id;

                $borrow-> status='Appliqué';
                $borrow->save();

                

                return redirect()->route('books')->with('message', 'Votre demande a été envoyée à l\'administrateur pour emprunter ce livre.');
            } else {
                return redirect('/login');
            }
        } else {
            return redirect()->back()->with('message', 'Nombre de livres insuffisant disponible.');
        }
    }
}
