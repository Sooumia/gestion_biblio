<!DOCTYPE html>
<html>
  <head>
    @include('admin.css')
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
                <h1>Modifier Livre</h1>
                <form action="{{ url('book_update',$data->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="title">Titre</label>
                        <input type="text" name="title" class="form-control" value="{{$data->title}}">
                        <label for="auther_name">Autheur</label>
                        <input type="text" name="auther_name" class="form-control" value="{{$data->auther_name}}">
                        <label for="price">Price</label>
                        <input type="text" name="price" class="form-control" value="{{$data->price}}">
                        <label for="quantity">Quantite</label>
                        <input type="text" name="quantity" class="form-control" value="{{$data->quantity}}">
                        <label for="description">Description</label>
                        <input type="text" name="description" class="form-control" value="{{$data->description}}">
                        <label for="category">Categorie</label>
                        <select name="category" class="form-control" required>
                            @foreach($category as $cat)
                                <option value="{{$cat->id}}" @if($cat->id==$data->category_id) selected @endif>{{$cat->cat_title}}</option>
                            @endforeach
                        </select>
                        <label for="auther_img">Photo Auteur</label>
                        <input type="file" name="auther_img" class="form-control">
                        <img src="{{asset('author/'.$data->auther_img)}}" alt="" style="width: 80px; height: 80px;border-radius: 50%;">
                        <label for="book_img">Image Livre</label>
                        <input type="file" name="book_img" class="form-control">
                        <img src="{{asset('book/'.$data->book_img)}}" alt="" style="width: 80px; height: 80px;">
                        <input type="submit" class="btn btn-info" value="modifier">
                    </div>
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