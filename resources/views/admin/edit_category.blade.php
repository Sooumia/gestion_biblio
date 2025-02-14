<!DOCTYPE html>
<html>
  <head>
    @include('admin.css')
    <style>
      .div_center {
        max-width: 600px;
        margin: 30px auto;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h1.text-white {
        color: #493dc5;
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
      input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ced4da;
        border-radius: 5px;
      }
      button.btn-info {
        background-color: #2a2185;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
      }
      button.btn-info:hover {
        background-color: #2a2185;
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
                <h1 class="text-white">Modifier Categorie</h1>
                <form action="{{url('update_category/'.$data->id)}}" method="POST">
                    @csrf
                    <div class="form-group">
                      <label for="cat_name">Nom de Categorie</label>
                      <input type="text" name="cat_name" value="{{$data->cat_title}}" required>
                    </div>
                    <button class="btn btn-info">Modifier</button>
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