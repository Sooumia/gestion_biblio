<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Book;
use App\Models\Borrow;
use App\Models\Category;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $data = Book::all(); // Fetch all books from the database
        $category = Category::all(); // Fetch all categories from the database
        return view('user.books', compact('data', 'category')); // Pass the data to the view
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

    public function book_history()
    {
        if(Auth::id())
        {
            $userid = Auth::user()->id;
            $data = Borrow::where('user_id', '=', $userid)->get();
        }
        return view('user.book_history', compact('data'));
    }

    public function cancel_req($id)
    {
        $data = Borrow::find($id);
        if ($data) {
            $data->delete();
            return redirect()->back()->with('message', 'Demande d\'emprunt de livre annulée avec succès.');
        } else {
            return redirect()->back()->with('error', 'Demande d\'emprunt non trouvée.');
        }
    }

    public function search(Request $request)
    {
        $category = Category::all(); // Ensure $category is defined correctly
        $search = $request->search;
        $data = Book::where('title', 'LIKE', '%' . $search . '%')
                    ->orWhere('auther_name', 'LIKE', '%' . $search . '%')
                    ->get();
        return view('user.books', compact('data', 'category')); // Pass the book data to the view
    }

    public function cat_search($id)
    {   
        $category = Category::all(); // Fetch all categories from the database
        $data = Book::where('category_id', $id)->get(); // Fetch books by category ID
        return view('user.books', compact('data', 'category')); // Pass the data to the view
    }

    
    public function favoris_page() {
    // Logic to fetch and display favorite items
    return view('favoris.favoris_page');
    }

    

}
