<!DOCTYPE html>
<html lang="fr">

  <head>
  @include('user.css')
  </head>

<body>

  <!-- ***** Header Area End ***** -->
  <div class="item-details-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h2>Voir les détails <em>de l'article</em> ici.</h2>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="left-image">
            <img src="{{ asset('book/' . $book->book_img) }}" alt="" style="border-radius: 20px;">
          </div>
        </div>
        <div class="col-lg-5 align-self-center">
          <h4>{{ $book->title }}</h4>
          <span class="author">
            <img src="{{ asset('author/' . $book->auther_img) }}" alt="" style="max-width: 50px; border-radius: 50%;">
            <h6>{{ $book->auther_name }}</h6>
          </span>
          <p>{{ $book->description }}</p>
          <div class="row">
            <div class="col-3">
              <span class="bid">
                Disponible<br><strong>{{ $book->quantity }}</strong><br>
              </span>
            </div>
            <div class="col-5">
              <span class="ends">
                Prix<br><strong>{{ $book->price }} €</strong><br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

@include('user.footer')

  <!-- Scripts -->
  <!-- Bootstrap core JavaScript -->
  <script src="{{asset('user/vendor/jquery/jquery.min.js')}}"></script>
  <script src="{{asset('user/vendor/bootstrap/js/bootstrap.min.js')}}"></script>

  <script src="{{asset('user/assets/js/isotope.min.js')}}"></script>
  <script src="{{asset('user/assets/js/owl-carousel.js')}}"></script>

  <script src="{{asset('user/assets/js/tabs.js')}}"></script>
  <script src="{{asset('user/assets/js/popup.js')}}"></script>
  <script src="{{asset('user/assets/js/custom.js')}}"></script>
  </body>
</html>