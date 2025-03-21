import React from "react" // Add this line
import { useState } from "react"
import { Send, Phone, MapPin, Mail, Clock } from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus("loading")

    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="bg-[#f8f5f1] min-h-screen" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1096B0] mb-4">Contactez-nous</h1>
          <p className="text-lg text-[#02252B] max-w-2xl mx-auto">
            Nous sommes à votre disposition pour répondre à toutes vos questions concernant notre bibliothèque.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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
                    <p>Lundi - Vendredi: 9h00 - 19h00</p>
                    <p>Samedi: 10h00 - 18h00</p>
                    <p>Dimanche: Fermé</p>
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

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#1096B0] mb-6">Envoyez-nous un message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
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
                  disabled={formStatus === "loading"}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1096B0] hover:bg-[#4a3024] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1096B0] transition-colors"
                >
                  {formStatus === "loading" ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>

              {formStatus === "success" && (
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

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-[#1096B0] mb-6">Foire aux questions</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-[#1096B0]">Comment puis-je m'inscrire à la bibliothèque ?</h3>
                <p className="mt-2 text-gray-600">
                  Pour vous inscrire, veuillez vous présenter à l'accueil de la bibliothèque avec une pièce d'identité
                  et un justificatif de domicile de moins de 3 mois.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-[#1096B0]">Combien de livres puis-je emprunter à la fois ?</h3>
                <p className="mt-2 text-gray-600">
                  Vous pouvez emprunter jusqu'à 10 documents (livres, DVD, CD) simultanément pour une durée de 3
                  semaines.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-[#1096B0]">Comment puis-je prolonger un emprunt ?</h3>
                <p className="mt-2 text-gray-600">
                  Vous pouvez prolonger vos emprunts une fois pour une durée supplémentaire de 2 semaines, soit en ligne
                  via votre compte, soit par téléphone, à condition que le document ne soit pas réservé par un autre
                  usager.
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Contact

