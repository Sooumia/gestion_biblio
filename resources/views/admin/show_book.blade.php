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
            <a href="{{url('add_book')}}">Ajouter Livre</a>

                <table class="table table-striped table-bordered">
                    <tr>
                        <th>Titre</th>
                        <th>Autheur</th>
                        <th>Price</th>
                        <th>Quantite</th>
                        <th>Description</th>
                        <th>Categorie</th>
                        <th>Photo Auteur</th>
                        <th>Image Livre</th>
                        <th>Action</th>
                    </tr>
                @foreach($data as $book)
                    <tr>
                        <td>{{$book->title}}</td>
                        <td>{{$book->auther_name}}</td>
                        <td>{{$book->price}}</td>
                        <td>{{$book->quantity}}</td>
                        <td>{{$book->description}}</td>
                        <td>{{$book->category->cat_title}}</td>
                        <td><img src="author/{{$book->auther_img}}" alt="" style="width: 80px; height: 80px;border-radius: 50%;"></td>
                        <td><img src="book/{{$book->book_img}}" alt="" style="width: 80px; height: 80px;"></td>
                        <td>
                            <a href="{{url('book_edit/'.$book->id)}}" class="btn btn-info">modifier</a>
                            <a href="{{url('book_delete/'.$book->id)}}" class="btn btn-danger" onClick="confirmation(event)">supprimer</a>
                        </td>
                    </tr>
                @endforeach
                </table>
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
          var urlToRedirect = ev.currentTarget.href; 
          console.log(urlToRedirect); 
          swal({ 
            title: "vous etes sur?", 
            text: "une fois supprimer, vous ne pourrez pas recuperer ces donne", 
            icon: "warning",
            buttons: true, 
            dangerMode: true, 
          })
          .then((willDelete) => { 
            if (willDelete) { 
              window.location.href = urlToRedirect; 
            }
          });
        }
      </script>
  </body>
</html>