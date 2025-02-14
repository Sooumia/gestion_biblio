<!DOCTYPE html>
<html>
  <head>
    @include('admin.css')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" 
    integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" 
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <style>
      .div_center {
        max-width: 600px;
        margin: 30px auto;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h1.p-4 {
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
      input, select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ced4da;
        border-radius: 5px;
      }
      button.btn-primary {
        background-color: #2a2185;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
      }
      button.btn-primary:hover {
        background-color: #2a2185;
      }
      .alert {
        padding: 10px;
        background-color: #d4edda;
        color: #2a2185;
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
      .table-container {
        margin: 30px;
        padding: 30px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        background: white;
      }
      .table th, .table td {
        vertical-align: middle;
      }
      .btn-info, .btn-danger {
        margin: 5px;
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
              <h1 class="p-4">Ajouter Categorie</h1>
              <form action="{{url('add_category')}}" method="POST">
                @csrf
                <div class="form-group">
                  <label for="category">Nom Categorie</label>
                  <input type="text" name="category" required>
                </div>
                <button class="btn btn-primary">Ajouter</button>
              </form>
            </div>
            <div class="table-container">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nom Categorie</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  @foreach($data as $category)
                  <tr>
                    <td>{{$category->id}}</td>
                    <td>{{$category->cat_title}}</td>
                    <td>
                      <form action="{{url('edit_category/'.$category->id)}}" method="GET" style="display:inline;">
                        <button type="submit" class="btn btn-info">Editer</button>
                      </form>
                      <form action="{{url('cat_delete/'.$category->id)}}" method="POST" style="display:inline;">
                        @csrf
                        <button type="submit" class="btn btn-danger" onClick="confirmation(event)">Supprimer</button>
                      </form>
                    </td>
                  </tr>
                  @endforeach
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Page Footer-->
      @include('admin.footer')
      <script type="text/javascript">
        function confirmation(ev) { 
          ev.preventDefault(); 
          var form = ev.currentTarget.closest('form');
          var urlToRedirect = form.action; 
          console.log(urlToRedirect); 
          swal({ 
            title: "Vous êtes sûr?", 
            text: "Une fois supprimé, vous ne pourrez pas récupérer ces données", 
            icon: "warning",
            buttons: true, 
            dangerMode: true, 
          })
          .then((willCancel) => { 
            if (willCancel) { 
              form.submit(); 
            }
          });
        }
      </script>
    </div>
  </body>
</html>