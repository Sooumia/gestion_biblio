<nav id="sidebar" class="p-2">
        <!-- Sidebar Header-->
        <div class="sidebar-header d-flex align-items-center">
          <div class="avatar"><img src="admin/img/avatar-6.jpg" alt="..." class="img-fluid rounded-circle"></div>
          <div class="title">
            <h1 class="h5">Mark Stephen</h1>
            <p>Web Designer</p>
          </div>
        </div>
        <!-- Sidebar Navidation Menus--><span class="heading">Main</span>
        <ul class="list-unstyled">
                <li class="active"><a href="index.html"> <i class="icon-home"></i>Home </a></li>
                <li><a href=""> <i class="icon-grid"></i>Categorie </a></li>
                <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-windows"></i>Livres </a>
                  <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                    <li><a href="{{ route('books') }}">Les livres</a></li>
                    <li><a href="">Ajouter Livre</a></li>
                  </ul>
                </li>
                <li><a href="{{route('logout')}}"> <i class="icon-logout"></i>LogOut page </a></li>
        </ul>
      </nav>