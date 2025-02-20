<!DOCTYPE html>
<html>
  <head>
    <title>user</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" 
    integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" 
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  
    @include('user.css')
    <style>
      .div_center {
        max-width: 900px;
        margin: 30px auto;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .table-center {
        margin: 30px auto 0;
        width: 80%;
      }
    </style>
    
  </head>
  <body>
    <!-- Header-->
    @include ('user.sidebar')
    <div class="d-flex align-items-stretch">
      <!-- Sidebar Navigation-->
      @include('user.header')
     <!-- Sidebar Navigation end-->
     <div class="page-content">
        <div class="page-header">
          <div class="container-fluid">
          @if(Session::has('message'))
                    <div class="alert alert-success">
                   {{Session::get('message')}}
                   <button type="button" class="close" data-dismiss="alert"
                   aria-hidden="true">x</button>
                    </div>
                @endif
            <table class="table table-striped table-hover text-center table-center ">
                <tr>
                    <th>nom</th>
                    <th>auteur</th>
                    <th>status</th>
                    <th>Image</th>
                    <th>Annuler la demande</th>
                </tr>
                @foreach ($data as $data)
                <tr>
                    <td>{{$data->book->title}}</td>
                    <td>{{$data->book->auther_name}}</td>
                    <td>{{$data->status}}</td>
                    <td>
                        <img width="80" src="book/{{$data->book->book_img}}" alt="">
                    </td>
                    <td>
                        @if($data->status=='Demande envoyée')

                            <a href="{{url('cancel_req',$data->id)}}" class="btn btn-warning">supprimer</a>
                        @else
                            <p class='text-light'>Vous n'êtes pas autorisé à annuler cette demande.</p>

                        @endif
                    </td>
                </tr>
                @endforeach
            </table>
</div>
</div>
</div>
        <!-- Page Footer-->
      @include('user.footer')
    </div>
    
  </body>
</html>