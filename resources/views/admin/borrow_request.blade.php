<!DOCTYPE html>
<html>
  <head>
    <title>admin</title>
    @include('admin.css')
    <style>
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
      .btn-warning, .btn-danger, .btn-info {
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
            <div class="table-container">
              <table class="table">
                <thead class="table-info">
                  <tr>
                    <th>Nom de l'utilisateur</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Livre</th>
                    <th>Quantité</th>
                    <th>Statut d'emprunt</th>
                    <th>Image du livre</th>
                    <th>Change du statut</th>
                  </tr>
                </thead>
                <tbody>
                  @foreach ($data as $data)
                  <tr>
                    <td>{{$data->user->name}}</td>
                    <td>{{$data->user->email}}</td>
                    <td>{{$data->user->phone}}</td>
                    <td>{{$data->book->title}}</td>
                    <td>{{$data->book->quantity}}</td>
                    <td>
                      @if($data->status == "Approuvé")
                        <span style='color:blue;'>{{$data->status}}</span>
                      @endif
                      @if($data->status == "Rejeté")
                        <span style='color:red;'>{{$data->status}}</span>
                      @endif
                      @if($data->status == "Retourné")
                        <span style='color:yellow;'>{{$data->status}}</span>
                      @endif
                      @if($data->status == "Demande envoyée")
                        <span style='color:green;'>{{$data->status}}</span>
                      @endif
                    </td>
                    <td>
                      <img width="100px" src="book/{{$data->book->book_img}}" alt="">
                    </td>
                    <td>
                      <a href="{{url('approve_book', $data->id)}}" class="btn btn-warning">Approuvé</a>
                      <a href="{{url('rejected_book', $data->id)}}" class="btn btn-danger">Rejeté</a>
                      <a href="{{url('return_book', $data->id)}}" class="btn btn-info">Retourné</a>
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
    </div>
  </body>
</html>