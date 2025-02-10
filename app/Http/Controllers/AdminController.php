<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use App\Models\Book;

class AdminController extends Controller
{
    public function index()
    {
        if(Auth::id())
        {
            $usertype=Auth()->user()->usertype;
            if ($usertype=='admin')
            {
                return view('admin.index');
            }
            else if ($usertype=='user')
            {
                return view('user.index');
            }
        }
        else
        {
            return redirect()->back();
        }

    }

    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }

    public function category_page()
    {
        $data = Category::all();
        return view('admin.category', compact('data'));
    }

    public function add_category(Request $request)
    {
        $data = new Category;
        $data->cat_title = $request->category;
        $data->save();
        return redirect()->back()->with('message', 'Categorie ajoutée avec succès');
    }

    public function cat_delete($id)
    {
        $data = Category::find($id);
        $data->delete();
        return redirect()->back()->with('message', 'Categorie supprimée avec succès');
    }

    public function edit_category($id)
    {
        $data = Category::find($id);
        return view('admin.edit_category', compact('data'));

    } 

    public function update_category(Request $request, $id)
    {
        $data = Category::find($id);
        $data->cat_title = $request->cat_name;
        $data->save();
        return redirect('/category_page')->with('message', 'Categorie modifiée avec succès');
    }

    public function add_book()
    {
        $data = Category::all();
        return view('admin.add_book', compact('data'));
    }

    public function store_book(Request $request)
    {
        $data = new Book;
        $data->title = $request->book_title;
        $data->auther_name = $request->book_author;
        $data->category_id = $request->book_category;
        $data->price = $request->book_price;
        $data->quantity = $request->book_quantity;
        $data->description = $request->book_description;
        $book_img = $request->file('book_img');
        if($book_img){
            $book_img_name = time().'.'.$book_img->getClientOriginalExtension();
            $book_img->move('book', $book_img_name);
            $data->book_img = $book_img_name;
        }

        $author_img = $request->file('auther_img');
        if($author_img){
            $author_img_name = time().'.'.$author_img->getClientOriginalExtension();
            $author_img->move('author', $author_img_name);
            $data->author_img = $author_img_name;
        }

        $data->save();
        return redirect()->back()->with('message', 'Livre ajouté avec succès');
    }

    
    public function show_book()
    {
        $data = Book::all();
        return view('admin.show_book', compact('data'));
        
    }

    public function book_delete($id)
    {
        $data = Book::find($id);
        $data->delete();
        return redirect()->back()->with('message', 'Livre supprimé avec succès');
    }

    public function book_edit($id)
    {
        $data = Book::find($id);
        $category = Category::all();
        return view('admin.book_edit', compact('data', 'category'));
    }

    public function book_update(Request $request, $id)
    {
        $data = Book::find($id);
        $data->title = $request->title;
        $data->auther_name = $request->auther_name;
        $data->category_id = $request->category;
        $data->price = $request->price;
        $data->quantity = $request->quantity;
        $data->description = $request->description;
        $book_img = $request->file('book_img');
        if($book_img){
            $book_img_name = time().'.'.$book_img->getClientOriginalExtension();
            $book_img->move('book', $book_img_name);
            $data->book_img = $book_img_name;
        }

        $author_img = $request->file('auther_img');
        if($author_img){
            $author_img_name = time().'.'.$author_img->getClientOriginalExtension();
            $author_img->move('author', $author_img_name);
            $data->auther_img = $author_img_name;
        }

        $data->save();
        return redirect('/show_book')->with('message', 'Livre modifié avec succès');
    }

}


