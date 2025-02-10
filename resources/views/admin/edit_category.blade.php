<!DOCTYPE html>
<html>
  <head>
    @include('admin.css')
    <style type="text/css">
        .div_center{
            margin: auto;
            text-align: center;
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
                <h1 class="text-white">Modifier Categorie</h1>
                <form action="{{url('update_category/'.$data->id)}}" method="POST">
                    @csrf
                    <span style="padding-right:15px">
                      <label for="">nom de categorie</label>
                      <input type="text" name="cat_name" value="{{$data->cat_title}}" required>
                      <button class="btn btn-info">Modifier</button>
                    </span>
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