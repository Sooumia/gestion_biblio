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
                    <a href="{{url('home')}}">
                        <span class="icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span class="title">Profil</span>
                    </a>
                </li>

                <li>
                    <a href="{{url('category_page')}}">
                    <span class="icon">
                      <ion-icon name="bookmarks-outline"></ion-icon>
                    </span>
                        <span class="title">Favoris</span>
                    </a>
                </li>

                
                <li>
                  <a href="{{ route('books') }}">
                        <span class="icon">
                            <ion-icon name="book-outline"></ion-icon>
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
                    <a href="{{route('logout')}}">
                        <span class="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span class="title">Log Out</span>
                    </a>
                </li>
            </ul>

</div>
