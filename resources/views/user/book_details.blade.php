<!DOCTYPE html>
<html lang="fr">

  <head>
  @include('user.css')
  <link rel="stylesheet" href="{{ asset('css/book_details.css') }}">
  </head>

<body class="body">

<div class="profile-container">
    <!-- Partie Gauche : Info Profil -->
    <div class="profile-info">
      <!-- Image de profil -->
      <div class="profile-pic">
      <img src="{{ asset('author/' . $book->auther_img) }}" alt="" style="max-width: 50px; border-radius: 50%;">
        
      </div>
      <!-- Nom & Titre -->
      <h2 class="profile-name">{{ $book->auther_name }}</h2>
      <p class="profile-title">{{ $book->title }}</p>
      <p>{{ $book->description }}</p>
      <!-- Bouton de contact -->
      <button class="contact-btn" onclick="window.location.href='{{ url('borrow_books', $book->id) }}'">Demande d'emprunt  →</button>

      <!-- Icônes de réseaux sociaux -->
      <div class="social-icons">
      <a href="#!">❌</a>
        <a href="#!">📸</a>
        <a href="#!">💬</a>
        <a href="#!">✉️</a>
      </div>
    </div>

    <!-- Partie Droite : Image / Illustration -->
    <div class="profile-image">
     <img src="{{ asset('book/' . $book->book_img) }}" alt="" style="border-radius: 20px;">
  
    </div>
  </div>


@include('user.footer')
</body>
</html>
