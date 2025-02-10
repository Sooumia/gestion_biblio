import React from "react";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="signup">
        <h1>Inscription</h1>
        <form action="" className="signup-form">
            <div>
                <label htmlFor="name">Nom Complet</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="phone">Téléphone</label>
                <input type="text" id="phone" name="phone" />
            </div>
            <div>
                <label htmlFor="address">Adresse</label>
                <input type="text" id="address" name="address" />
            </div>
            <div>
                <label htmlFor="city">Ville</label>
                <input type="text" id="city" name="city" />
            </div>
            <div>
                <label htmlFor="postal">CIN OU CNE</label>
                <input type="text" id="postal" name="postal" />
            </div>
            <div>
                <label htmlFor=""><input type="radio" />ETUDIANT</label>
                <label htmlFor=""><input type="radio" />PROFESSEUR</label>
                <label htmlFor=""><input type="radio" />PERSONNA</label>
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirmer mot de passe</label>
                <input type="password" id="confirmPassword" name="confirmPassword" />
            </div>
            <button type="submit">S'inscrire</button>       
        </form>
        </div>
    );
    };

export default Signup;