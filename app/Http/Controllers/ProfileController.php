<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function edit()
    {
        return view('user.profile'); // Affiche la vue du profil
    }

    public function update_profil(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'universite' => 'nullable|string|max:255',
            'filiere' => 'nullable|string|max:255',
            'niveau' => 'nullable|string|max:255',
            'skills' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        try {
            // Gérer l'upload de la photo
            if ($request->hasFile('photo')) {
                // Supprimer l'ancienne photo si elle existe
                if ($user->photo && file_exists(public_path($user->photo))) {
                    unlink(public_path($user->photo));
                }

                // Stocker la nouvelle photo
                $imagePath = $request->file('photo')->store('profile_pictures', 'public');
                $user->photo = 'storage/' . $imagePath;
            }

            // Mettre à jour les autres champs
            $user->update($request->only([
                'name', 'phone', 'universite', 'filiere', 'niveau', 'skills'
            ]));

            return redirect()->route('profile.edit')->with('success', 'Profil mis à jour avec succès.');
        } catch (\Exception $e) {
            return redirect()->route('profile.edit')->with('error', 'Une erreur s\'est produite lors de la mise à jour du profil.');
        }
    }

    public function __construct()
{
    $this->middleware('auth');
}

}