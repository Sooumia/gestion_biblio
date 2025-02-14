<!DOCTYPE html>
<html>
  <head>
    @include('admin.css')
    <style>
      .div_center {
        max-width: 900px;
        margin: 30px auto;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #034d59;
        font-size: 24px;
      }
      form {
        padding: 10px;
        display: flex;
        flex-direction: column;
      }
      .form-group {
        margin-bottom: 15px;
      }
      label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
      }
      input, select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 5px;
      }
      button.btn-info {
        background-color: #034d59;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
      }
      button.btn-info:hover {
        background-color: #034d59;
      }
      .alert {
        padding: 10px;
        background-color: #d4edda;
        color: #034d59;
        border: 1px solid #c3e6cb;
        border-radius: 5px;
        margin-bottom: 10px;
        text-align: center;
      }
      .close {
        float: right;
        font-size: 20px;
        cursor: pointer;
      }
    </style>
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
                <h1>Modifier Livre</h1>
                <form action="{{ url('book_update',$data->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="title">Titre</label>
                        <input type="text" name="title" class="form-control" value="{{$data->title}}">
                    </div>
                    <div class="form-group">
                        <label for="auther_name">Autheur</label>
                        <input type="text" name="auther_name" class="form-control" value="{{$data->auther_name}}">
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="text" name="price" class="form-control" value="{{$data->price}}">
                    </div>
                    <div class="form-group">
                        <label for="quantity">Quantite</label>
                        <input type="text" name="quantity" class="form-control" value="{{$data->quantity}}">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" name="description" class="form-control" value="{{$data->description}}">
                    </div>
                    <div class="form-group">
                        <label for="category">Categorie</label>
                        <select name="category" class="form-control" required>
                            @foreach($category as $cat)
                                <option value="{{$cat->id}}" @if($cat->id==$data->category_id) selected @endif>{{$cat->cat_title}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="auther_img">Photo Auteur</label>
                        <input type="file" name="auther_img" class="form-control">
                        <img src="{{asset('author/'.$data->auther_img)}}" alt="" style="width: 80px; height: 80px;border-radius: 50%;">
                    </div>
                    <div class="form-group">
                        <label for="book_img">Image Livre</label>
                        <input type="file" name="book_img" class="form-control">
                        <img src="{{asset('book/'.$data->book_img)}}" alt="" style="width: 80px; height: 80px;">
                    </div>
                    <button type="submit" class="btn btn-info">modifier</button>
                </form>
            </div>
          </div>
        </div>
      </div>
     <!-- Page Footer-->
      @include('admin.footer')
    </div>
    </div>
    
  </body>
</html>