<!DOCTYPE html>
<html>
  <head>
    <title>user</title>
    @include('user.css')
    <style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
    }

    .profile-container {
        width: 60%;
        margin: 50px auto;
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        display:block;
    }

    .profile-header {
        text-align: center;
        margin-bottom: 30px;
    }

    .profile-header img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 15px;
        border: 4px solid #007BFF;
    }

    .profile-header h2 {
        margin: 15px 0;
        color: #333;
        font-size: 24px;
    }

    .profile-header p {
        color: #666;
        margin: 5px 0;
        font-size: 16px;
    }

    .info, .skills {
        margin-top: 25px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 8px;
    }

    .info h3, .skills h3 {
        color: #007BFF;
        margin-bottom: 15px;
        border-bottom: 2px solid #007BFF;
        padding-bottom: 10px;
        font-size: 20px;
    }

    .info p {
        padding: 10px;
        background: white;
        border-radius: 5px;
        margin-bottom: 10px;
        font-size: 16px;
        color: #555;
    }

    .skills {
        display: flex;
        flex-direction: column;
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .skills span {
        display: inline-block;
        background: #007BFF;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 14px;
        margin: 5px;
    }

    .skills span:hover {
        background: #0056b3;
        cursor: pointer;
    }
</style>
 
  </head>
  <body>
    <!-- Header-->
    @include ('user.sidebar')
    <!-- Sidebar Navigation-->
    @include('user.header')
     <!-- Sidebar Navigation end-->

     <img src="{{ asset(Auth::user()->photo ?? 'user/assets/imgs/profil.png') }}" alt="Photo de Profil">
<h2>{{ Auth::user()->name }}</h2>
<p>Email: {{ Auth::user()->email }}</p>
<p>Téléphone: {{ Auth::user()->phone ?? 'Non renseigné' }}</p>

<div class="info">
    <h3>Informations Académiques</h3>
    <p>Université: {{ Auth::user()->universite ?? 'Non renseigné' }}</p>
    <p>Filière: {{ Auth::user()->filiere ?? 'Non renseigné' }}</p>
    <p>Niveau: {{ Auth::user()->niveau ?? 'Non renseigné' }}</p>
</div>

<div class="skills">
    <h3>Compétences</h3>
    @foreach (explode(',', Auth::user()->skills ?? '') as $skill)
        <span>{{ trim($skill) }}</span>
    @endforeach
</div>

      
        <!-- Page Footer-->
      @include('user.footer')
    </div>
    
  </body>
</html>