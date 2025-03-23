import React from "react";
import { useState } from "react";
import { Send, Phone, MapPin, Mail, Clock } from "lucide-react";
import image1 from './img.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setFormStatus("chargement");

    setTimeout(() => {
      setFormStatus("succès");
      setFormData({
        nom: "",
        email: "",
        sujet: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-[#f8f5f1] min-h-screen" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative mb-16">
          <div className="h-[300px] w-full rounded-xl overflow-hidden">
            <img
              src={image1}
              alt="Contactez-nous"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1096B0]/40 to-transparent flex items-center">
              <div className="px-8 sm:px-12 max-w-2xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">Contactez-nous</h1>
                <p className="text-white/90 text-lg sm:text-xl mb-8 leading-relaxed">
                  Nous sommes à votre disposition pour répondre à toutes vos questions concernant notre bibliothèque.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#1096B0] mb-6">Informations de contact</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#1096B0]" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Téléphone</p>
                  <p className="text-sm text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#1096B0]" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">contact@bibliotheque.fr</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#1096B0]" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Adresse</p>
                  <p className="text-sm text-gray-600">
                    123 Avenue des Livres
                    <br />
                    75001 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#1096B0]" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Horaires d'ouverture</p>
                  <div className="text-sm text-gray-600">
                    <p>Lundi - Vendredi : 9h00 - 19h00</p>
                    <p>Samedi : 10h00 - 18h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-64 rounded-lg border border-gray-200"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342144!2d2.3354330157081476!3d48.8606281792866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1616661315367!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  title="Carte de la bibliothèque"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#1096B0] mb-6">Envoyez-nous un message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#1096B0] focus:border-[#1096B0] sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#1096B0] focus:border-[#1096B0] sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="sujet" className="block text-sm font-medium text-gray-700">
                  Sujet
                </label>
                <input
                  type="text"
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#1096B0] focus:border-[#1096B0] sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#1096B0] focus:border-[#1096B0] sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={formStatus === "chargement"}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1096B0] hover:bg-[#4a3024] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1096B0] transition-colors"
                >
                  {formStatus === "chargement" ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>

              {formStatus === "succès" && (
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
           
      </div>
    </div>
  );
}

export default Contact;

