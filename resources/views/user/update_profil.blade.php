<form action="{{ route('profile.update') }}" method="POST" enctype="multipart/form-data">
    @csrf
    @method('PUT')

    <div>
        <label for="name">Nom complet</label>
        <input type="text" id="name" name="name" value="{{ old('name', $user->name) }}">
    </div>

    <div>
        <label for="phone">Téléphone</label>
        <input type="text" id="phone" name="phone" value="{{ old('phone', $user->phone) }}">
    </div>

    <div>
        <label for="universite">Université</label>
        <input type="text" id="universite" name="universite" value="{{ old('universite', $user->universite) }}">
    </div>

    <div>
        <label for="filiere">Filière</label>
        <input type="text" id="filiere" name="filiere" value="{{ old('filiere', $user->filiere) }}">
    </div>

    <div>
        <label for="niveau">Niveau</label>
        <input type="text" id="niveau" name="niveau" value="{{ old('niveau', $user->niveau) }}">
    </div>

    <div>
        <label for="skills">Compétences</label>
        <input type="text" id="skills" name="skills" value="{{ old('skills', $user->skills) }}">
    </div>

    <div>
        <label for="photo">Photo de profil</label>
        <input type="file" id="photo" name="photo">
        @if($user->photo)
            <img src="{{ asset($user->photo) }}" alt="Photo de profil" width="100">
        @endif
    </div>

    <button type="submit">Mettre à jour</button>
</form>