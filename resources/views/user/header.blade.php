<div class="main">
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <form action="{{url('search')}}" method="get" >
                @csrf
                <div class="search">
                  
                    <input type="text" class="form-control" name="search" placeholder="Recherche de livres par Titre et Auteur">
                    <input type="submit" value="Recherche" class="btn">
                 
                  
                </div>
              </form>

                <div class="user">
                    <img src="{{asset('admin/assets/imgs/profil.png')}}" alt="">
                </div>
</div>
