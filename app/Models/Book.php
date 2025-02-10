<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'auther_name', 'quantity', 'price', 'description', 'book_img', 'auther_img'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
