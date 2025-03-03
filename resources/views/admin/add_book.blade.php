<!DOCTYPE html>
<html>
  <head>
    @include('admin.css')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" 
    integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" 
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  </head>
  <body>
    <!-- Header-->
    @include ('admin.sidebar')
    <div class="d-flex align-items-stretch">
        <!-- Sidebar Navigation-->
        @include('admin.header')
     <!-- Sidebar Navigation end-->
     <div class="page-content">
        <div class="page-header">
          <div class="container-fluid">
            <div class="container center">
            <div>
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
  
            <form style="" action="{{url('store_book')}}" method="POST" enctype="multipart/form-data">
                @csrf
            <div class="user-details">
                <div class="input-box">
                    <span class="details">Titre</span>
                    <input type="text" name="book_title" required>
                </div>
                <div class="input-box">
                    <span class="details">Auteur</span>
                    <input type="text" name="book_author" required>
                </div>
                <div class="input-box">
                    <span class="details">Prix</span>
                    <input type="text" name="book_price" required>
                </div>
                <div class="input-box">
                    <span class="details">Quantité</span>
                    <input type="number" name="book_quantity" required>
                </div>
                <div class="input-box">
                    <span class="details">Description</span>
                    <textarea name="book_description"></textarea>
                </div>
                <div class="input-box">
                    <span class="details">Categorie</span>
                    <select name="book_category" required >
                        <option value="">Choisir Categorie</option>
                        @foreach($data as $category)
                        <option value="{{$category->id}}">{{$category->cat_title}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="input-box">
                    <span class="details">Image de Livre</span>
                    <input type="file" name="book_img">
                </div>
                <div class="input-box">
                    <span class="details">Photo de Auteur</span>
                    <input type="file" name="author_img">
                </div>
            </div>
            <div class="button">
                <input type="submit" value="Ajouter" class="ajouter-button">
            </div>
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