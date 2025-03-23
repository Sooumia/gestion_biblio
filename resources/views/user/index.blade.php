<!DOCTYPE html>
<html>
    <head>
        <title>Profil Utilisateur</title>
        @include('admin.css')
        
    <style>
    .body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg,#034d59,white);
    }

    .profile-container {
        width: 40%;
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        text-align: center;
        position: relative;
        height: 500px;
    }

    .profile-header img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 4px solid white;
        object-fit: cover;
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
    }

    .profile-header h2 {
        margin-top: 40px;
        color: #333;
        font-size: 22px;
        font-weight: bold;
    }

    .profile-header p {
        color: #666;
        font-size: 14px;
        margin: 5px 0;
    }
    
    .info, .skills {
        margin-top: 20px;
        padding: 15px;
        background: #f9f9f9;
        border-radius: 8px;
    }

    .info h3, .skills h3 {
        color: #333;
        font-size: 18px;
        margin-bottom: 10px;
    }
    
    .skills-list span {
        display: inline-block;
        background:#034d59;
        color: white;
        padding: 8px 12px;
        border-radius: 15px;
        font-size: 12px;
        margin: 5px;
    }
    </style>
  </head>
  <body>
    @include ('user.sidebar')
    @include('user.header')
    <!-- Sidebar Navigation end-->
    <div class="body">
    <div class="profile-container">

            <div class="profile-header">
                <img src="{{ asset(Auth::user()->photo ?? 'user/assets/imgs/profil.png') }}" alt="Photo de Profil">
            <h2>{{ Auth::user()->name }}</h2>
            <p>Email: {{ Auth::user()->email }}</p>
            <p>Téléphone: {{ Auth::user()->phone ?? 'Non renseigné' }}</p>
        </div>
        
        <div class="info">
            <h3>Informations Académiques</h3>
            <p>Université: {{ Auth::user()->universite ?? 'Ntic syba' }}</p>
            <p>Filière: {{ Auth::user()->filiere ?? 'Non renseigné' }}</p>
            <p>Niveau: {{ Auth::user()->niveau ?? 'technisien spésialisé' }}</p>
        </div>
        
        <div class="skills">
            <h3>Compétences</h3>
            <div class="skills-list">
                <span>html</span>
                <span>css</span>
                <span>java</span>
                <span>react</span>
                <span>laravel</span>
                <span>figma</span>
                <span>php</span>
                <span>react</span>
            </div>
        </div>
        </div>
     </div>
    @include('user.footer')
  </body>
</html>
