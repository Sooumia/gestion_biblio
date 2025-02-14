<!DOCTYPE html>
<html>
  <head>
    <title>Utilisateur</title>
    <base href='/public'>
    @include('user.css')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" 
    integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" 
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  </head>
  <body>
    <!-- En-tête-->
    @include('user.header')
    <div class="d-flex align-items-stretch">
      <!-- Navigation de la barre latérale-->
      @include('user.sidebar')
      <!-- Fin de la navigation de la barre latérale-->
       
      <div class="currently-market">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 mt-3">
              <div class="filters">
                <ul>
                  <li data-filter="*" class="active">Tous les livres</li>
                  @foreach ($category as $cat)
                  <li>
                    <a href="{{url('cat_search', $cat->id)}}">{{$cat->cat_title}}</a>
                  </li>
                  @endforeach
                </ul>
              </div>
            </div>
          </div>
          <form action="{{url('search')}}" method="get">
            @csrf
          <div class="row m-3">
              <div class="col-md-8">
                <input type="text" class="form-control" type="search" name="search" placeholder="Recherche de livres par Titre et Auteur">
              </div>
              <div class="col-md-4">
                  <input type="submit" value="Recherche" class="btn btn-primary">
              </div>
          </div>
            </form>
          <div class="col-lg-12">
                @if(Session::has('message'))
                    <div class="alert alert-success">
                   {{Session::get('message')}}
                   <button type="button" class="close" data-dismiss="alert"
                   aria-hidden="true">x</button>
                    </div>
                @endif
              <div class="row grid">
                @foreach($data as $book)
                <div class="col-lg-6 currently-market-item all msc">
                  <div class="item">
                    <div class="left-image">
                      <img src="{{ asset('book/' . $book->book_img) }}" alt="" style="border-radius: 20px; min-width: 195px;">
                    </div>
                    <div class="right-content">
                      <h4>{{ $book->title }}</h4>
                      <span class="author">
                        <img src="{{ asset('author/' . $book->auther_img) }}" alt="" style="max-width: 50px; border-radius: 50%;">
                        <h6>{{ $book->auther_name }}</h6>
                      </span>
                      <div class="line-dec"></div>
                      <span class="bid">
                        Quantité disponible<br><strong>{{ $book->quantity }}</strong><br> 
                      </span>
                      <span class="ends">
                        Prix<br><strong>{{ $book->price }} €</strong><br>
                      </span>
                      <div class="text-button">
                        <a href="{{ url('book_details', $book->id) }}">Voir les détails</a>
                      </div>
                      <div class="py-4">
                        <a class="btn btn-primary" href="{{ url('borrow_books', $book->id) }}">Demande d'emprunt</a>
                      </div>
                    </div>
                  </div>
                </div>
                @endforeach
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pied de page-->
      @include('user.footer')
    </div>
  </body>
</html>