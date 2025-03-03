<div class="main">
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <form class="search" action="{{url('search')}}" method="get">
                @csrf
                    <label>
                        <input type="text" placeholder="Search here">
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                </form>

                <div class="user">
                    <img src="{{asset('admin/assets/imgs/admin.jpg')}}" alt="Admin Image">
                </div>
</div>
