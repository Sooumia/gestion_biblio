<!DOCTYPE html>
<html lang="fr">
  <head>
    <!-- Inclusion du fichier CSS personnalisé -->
    @include('user.css')

    <!-- SweetAlert -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"
      integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer">
    </script>

    <!-- Tailwind CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">

    <title>Liste des Livres</title>

    <style>
      .filters {
        margin-bottom: 20px;
      }
      .filters ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 10px;
      }
      .filters ul li {
        padding: 10px 20px;
        background: #f1f1f1;
        border-radius: 5px;
        cursor: pointer;
      }
      .filters ul li.active,
      .filters ul li:hover {
        background: #138496;
        color: #fff;
      }
      .filters ul li a {
        text-decoration: none;
        color: inherit;
      }
    </style>
  </head>

  <body class="bg-gray-1000">
  <!-- Sidebar -->
  @include('user.sidebar')

  <!-- Main Content Wrapper -->
  <div class="flex flex-col w-full">
    <!-- Header -->
    @include('user.header')

    <!-- Zone des filtres -->
    <div class="filters px-4 mt-4">
      <ul>
        <li class="active">
          <a href="{{ url('/') }}">Tous les livres</a>
        </li>
        @foreach ($category as $cat)
          <li>
            <a href="{{ url('cat_search', $cat->id) }}">{{ $cat->cat_title }}</a>
          </li>
        @endforeach
      </ul>
    </div>

    <!-- Titre + bouton Ajouter Livre -->
    <div class="px-4 mb-4 flex items-center justify-between">
      <h2 class="text-2xl font-semibold text-white">Les livres</h2>
      <a href="{{ url('add_book') }}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Ajouter Livre
      </a>
    </div>

    <!-- Message de session -->
    @if(Session::has('message'))
      <div class="mx-4 mb-4 alert alert-success bg-green-100 text-green-800 px-4 py-2 rounded relative">
        {{ Session::get('message') }}
        <button type="button"
                class="close absolute top-0 right-0 mt-2 mr-2 text-green-900"
                data-dismiss="alert"
                aria-hidden="true">
          &times;
        </button>
      </div>
    @endif

    <!-- Liste des livres (grid) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-8">
  @foreach($data as $book)
    <div class="relative flex flex-col rounded-xl bg-white shadow-md mt-8">
      <!-- Image agrandie -->
      <div class="relative mx-4 -mt-6 h-64 overflow-hidden rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg">
        <img src="{{ asset('book/' . $book->book_img) }}"
             alt="Couverture du livre"
             class="object-cover w-full h-full">
      </div>
      <!-- Corps de la carte -->
      <div class="p-6">
        <h2 class="mb-2 text-xl font-semibold text-blue-gray-900">
          {{ $book->title }}
        </h2>
        <!-- Informations sur l'auteur -->
        <div class="mb-2 flex items-center gap-3">
          <img src="{{ asset('author/' . $book->auther_img) }}"
               alt="Photo de l'auteur"
               class="w-10 h-10 rounded-full object-cover">
          <h6 class="text-base font-medium text-gray-700">
            {{ $book->auther_name }}
          </h6>
        </div>
        <!-- Quantité et prix -->
        <p class="text-base text-gray-600">
          Quantité disponible : <strong>{{ $book->quantity }}</strong><br>
          Prix : <strong>{{ $book->price }} €</strong>
        </p>
      </div>
      <!-- Boutons d'action -->
      <div class="p-6 pt-0 flex gap-2">
        <a href="{{ url('book_details', $book->id) }}"
           class="select-none rounded-lg bg-blue-500 py-2 px-4 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-blue-600">
          Voir les détails
        </a>
        <a href="{{ url('borrow_books', $book->id) }}"
           class="select-none rounded-lg bg-green-500 py-2 px-4 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-green-600">
          Demande d'emprunt
        </a>
      </div>
    </div>
  @endforeach
</div>


    <!-- Footer -->
    @include('user.footer')
  </div>

  <!-- Script de confirmation SweetAlert -->
  <script type="text/javascript">
    function confirmation(ev) {
      ev.preventDefault();
      var urlToRedirect = ev.currentTarget.href;
      swal({
        title: "Vous êtes sûr ?",
        text: "Une fois supprimé, vous ne pourrez pas récupérer ces données.",
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
