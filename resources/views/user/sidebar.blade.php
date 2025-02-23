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
                    <a href="{{url('home')}}">
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="title">Home</span>
                    </a>
                </li>

                <li>
                    <a href="{{url('category_page')}}">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title">Favoris</span>
                    </a>
                </li>

                
                <li>
                  <a href="{{ route('books') }}">
                    <span class="icon">
                      <ion-icon name="help-outline"></ion-icon>
                    </span>
                    <span class="title">Les livres</span>
                  </a>
                </li>
                <li>
                    <a href="{{url('book_history')}}">
                        <span class="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span class="title">Les Historiques</span>
                    </a>
                </li>              
                <li>
                    <a href="{{url('update_profil')}}">
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
