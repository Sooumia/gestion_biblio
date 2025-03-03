<div class="container">
        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="library-outline"></ion-icon>
                        </span>
                        <span class="title">My Biblio</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="book-outline"></ion-icon>
                        </span>
                        <span class="title">Home</span>
                    </a>
                </li>

                <li>
                    <a href="{{url('category_page')}}">
                        <span class="icon">
                            <ion-icon name="albums-outline"></ion-icon>
                        </span>
                        <span class="title">Categorie</span>
                    </a>
                </li>

                
                <li>
                  <a href="{{url('show_book')}}">
                    <span class="icon">
                      <ion-icon name="bookmarks-outline"></ion-icon>
                    </span>
                    <span class="title">Liste des livres</span>
                  </a>
                </li>
                <li>
                    <a href="{{url('add_book')}}">
                        <span class="icon">
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </span>
                        <span class="title">Ajouter Livre</span>
                    </a>
                </li>
                <li>
                    <a href="{{url('borrow_request')}}">
                        <span class="icon">
                            <ion-icon name="clipboard-outline"></ion-icon>
                        </span>
                        <span class="title">Demande d'emprunt</span>
                    </a>
                </li>
                
                <li>
                    <a href="{{url('profil')}}">
                        <span class="icon">
                                <ion-icon name="person-outline"></ion-icon>
                        </span>
                        
                        <span class="title">Parametres</span>
                    </a>
                </li>

                <li>
                    <a href="{{route('logout')}}">
                        <span class="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span class="title">Log Out</span>
                    </a>
                </li>
            </ul>

</div>
