<!DOCTYPE html>
<html>
  <head>
    @include('admin.css')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" 
    integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" 
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <style>
      .detail{
        position: relative;
        width: 100%;
        padding: 20px;
      }

      .detail .recentOrders {
  position: relative;
  display: grid;
  min-height: 500px;
  background: var(--white);
  padding: 30px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

.detail .cardHeader {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
      <div class="detail">
          <div>
            @if(Session::has('message'))
              <div class="alert alert-success">
                {{Session::get('message')}}
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>
              </div>
            @endif
          </div>
          <div class="recentOrders">
            <div class="cardHeader">
              <h2>Les livres</h2>
              <a href="{{url('add_book')}}" class="btn">Ajouter Livre</a>
              </div>
            <table>
              <thead>
                <tr>
                  <th>Photo Auteur</th>
                  <th>Titre</th>
                  <th>Autheur</th>
                  <th>Price</th>
                  <th>Quantite</th>
                  <th>Description</th>
                  <th>Categorie</th>
                  <th>Image Livre</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                @foreach($data as $book)
                <tr>
                    <td><img src="author/{{$book->auther_img}}" alt="" style="width: 70px; height: 70px;border-radius: 50%;"></td>
                    <td>{{$book->title}}</td>
                    <td>{{$book->auther_name}}</td>
                    <td>{{$book->price}}</td>
                    <td>{{$book->quantity}}</td>
                    <td>{{$book->description}}</td>
                    <td>{{$book->category->cat_title}}</td>
                    <td><img src="book/{{$book->book_img}}" alt="" style="width: 80px; height: 80px;"></td>
                    <td>
                      <a href="{{url('book_edit/'.$book->id)}}" class="btn btn-info">modifier</a>
                      <a href="{{url('book_delete/'.$book->id)}}" class="btn btn-danger" onClick="confirmation(event)">supprimer</a>
                    </td>
                  </tr>
                @endforeach
              </tbody>
            </table>
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