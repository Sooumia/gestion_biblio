<!DOCTYPE html>
<html>
  <head>
    @include('admin.css')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" 
    integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" 
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <style type="text/css">
        .div_center{
            margin: auto;
            text-align: center;
        }
        .title{
            color: white;
            text-align: center;
            padding: 35px;
            font-size:40px;
            font-weight: bold;
        }
        label{
            display: inline-block;
            width: 200px;

        }
    </style>
  </head>
  <body>
    <!-- Header-->
     @include('admin.header')
    <div class="d-flex align-items-stretch">
      <!-- Sidebar Navigation-->
      @include ('admin.sidebar')
     <!-- Sidebar Navigation end-->
     <div class="page-content">
        <div class="page-header">
          <div class="container-fluid">
            <div class="div_center">
            <div class="div_center">
            <div>
                @if(Session::has('message'))
                    <div class="alert alert-success">
                   {{Session::get('message')}}
                   <button type="button" class="close" data-dismiss="alert"
                   aria-hidden="true">x</button>
                    </div>
                @endif
            </div>
            <h1 class='title'>Ajouter Livre</h1>
            <form action="{{url('store_book')}}" method="POST" enctype="multipart/form-data">
                @csrf
            <div class="p-2">
                    <label for="">Titre</label>
                    <input type="text" name="book_title" required>
                </div>
                <div class="p-2">
                    <label for="">Auteur</label>
                    <input type="text" name="book_author" required>
    </div>
                <div class="p-2">
                    <label for="">Price</label>
                    <input type="text" name="book_price" required>
    </div>
                <div class="p-2">
                    <label for="">Quantité</label>
                    <input type="number" name="book_quantity" required>
    </div>
                <div class="p-2">
                    <label>Description</label>
                    <textarea name="book_description"></textarea>
    </div>
    <div class="p-2">
                    <label>Categorie</label>
                    <select name="book_category" required >
                        <option value="">Choisir Categorie</option>
                        @foreach($data as $category)
                        <option value="{{$category->id}}">{{$category->cat_title}}</option>
                        @endforeach
                    </select>
    </div>
                <div class="p-2">
                    <label for="">Image de Livre</label>
                    <input type="file" name="book_img" >
    </div>
                <div class="p-2">
                    <label for="">Photo de Auteur</label>
                    <input type="file" name="author_img" >
    </div>
                <button class="btn btn-success">Ajouter</button>
            </form>
</div>


</div>
</div>
</div>
        <!-- Page Footer-->
      @include('admin.footer')
    </div>

    
    
  </body>
</html>