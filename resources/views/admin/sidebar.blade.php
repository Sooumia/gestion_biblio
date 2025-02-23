<div class="container">
        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="logo-apple"></ion-icon>
                        </span>
                        <span class="title">My Biblio</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="{{url('category_page')}}">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title">Categorie</span>
                    </a>
                </li>

                
                <li>
                  <a href="{{url('show_book')}}">
                    <span class="icon">
                      <ion-icon name="help-outline"></ion-icon>
                    </span>
                    <span class="title">Liste des livres</span>
                  </a>
                </li>
                <li>
                    <a href="{{url('add_book')}}">
                        <span class="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span class="title">Ajouter Livre</span>
                    </a>
                </li>
                <li>
                    <a href="{{url('borrow_request')}}">
                        <span class="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span class="title">Demande d'emprunt</span>
                    </a>
                </li>
                
                <li>
                    <a href="{{url('profil')}}">
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
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
