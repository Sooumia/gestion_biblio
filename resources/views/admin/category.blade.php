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
            <div>
                @if(Session::has('message'))
                    <div class="alert alert-success">
                   {{Session::get('message')}}
                   <button type="button" class="close" data-dismiss="alert"
                   aria-hidden="true">x</button>
                    </div>
                @endif
            </div>

            <h1 class="p-4"> ajouter categorie</h1>
         <form action="{{url('add_category')}}" method="POST">
            @csrf
         <span style="padding-right:15px">
                <label for="" > nom categorie</label>
                <input type="text"  name="category" required>
                <button class="btn btn-primary">ajouter</button>
            </span> 
         </form>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>nom categorie</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($data as $category)
                                <tr>
                                    <td>{{$category->id}}</td>
                                    <td>{{$category->cat_title}}</td>
                                    <td>
                                        <form action="{{url('edit_category/'.$category->id)}}" method="GET" style="display:inline;">
                                            
                                            <button type="submit" class="btn btn-info">editer</button>
                                        </form>
                                        <form action="{{url('cat_delete/'.$category->id)}}" method="POST" style="display:inline;">
                                            @csrf
                                            <button type="submit" class="btn btn-danger" onClick="confirmation(event)">supprimer</button>
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
            title: "vous etes sur?", 
            text: "une fois supprimer, vous ne pourrez pas recuperer ces donne", 
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