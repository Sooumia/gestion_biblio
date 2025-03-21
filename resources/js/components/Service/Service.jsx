"use client"

import React from "react" // Add this line
import {
  Book,
  BookOpen,
  Calendar,
  Laptop,
  Users,
  Coffee,
  Printer,
  Headphones,
  BookMarked,
  GraduationCap,
} from "lucide-react"

export default function Services() {
  const mainServices = [
    {
      title: "Prêt de Livres",
      description: "Empruntez jusqu'à 10 livres pour une durée de 3 semaines, avec possibilité de prolongation.",
      icon: <Book className="h-10 w-10" />,
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Espace de Lecture",
      description:
        "Profitez de nos espaces confortables pour lire, étudier ou travailler dans un environnement calme et inspirant.",
      icon: <BookOpen className="h-10 w-10" />,
      color: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Événements Culturels",
      description: "Participez à nos rencontres avec des auteurs, clubs de lecture, expositions et ateliers créatifs.",
      icon: <Calendar className="h-10 w-10" />,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Ressources Numériques",
      description:
        "Accédez à notre catalogue de livres électroniques, journaux, magazines et bases de données en ligne.",
      icon: <Laptop className="h-10 w-10" />,
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ]

  const additionalServices = [
    {
      title: "Ateliers pour Enfants",
      description: "Activités ludiques et éducatives pour développer l'amour de la lecture chez les plus jeunes.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Café Littéraire",
      description: "Dégustez une boisson chaude tout en feuilletant vos livres préférés dans notre espace café.",
      icon: <Coffee className="h-6 w-6" />,
    },
    {
      title: "Services d'Impression",
      description: "Imprimez, photocopiez ou numérisez vos documents à des tarifs abordables.",
      icon: <Printer className="h-6 w-6" />,
    },
    {
      title: "Section Audiovisuelle",
      description: "Empruntez des CD, DVD et livres audio pour une expérience culturelle complète.",
      icon: <Headphones className="h-6 w-6" />,
    },
    {
      title: "Réservation de Livres",
      description: "Réservez des livres actuellement empruntés et soyez notifié dès leur retour.",
      icon: <BookMarked className="h-6 w-6" />,
    },
    {
      title: "Soutien Scolaire",
      description: "Bénéficiez d'aide aux devoirs et de ressources éducatives pour tous les niveaux scolaires.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ]

  const membershipOptions = [
    {
      title: "Abonnement Standard",
      price: "25€/an",
      features: [
        "Emprunt de livres (10 maximum)",
        "Accès aux espaces de lecture",
        "Accès au catalogue en ligne",
        "Participation aux événements gratuits",
      ],
    },
    {
      title: "Abonnement Premium",
      price: "45€/an",
      features: [
        "Tous les avantages de l'abonnement standard",
        "Accès illimité aux ressources numériques",
        "Réservation prioritaire pour les événements",
        "2 impressions gratuites par jour",
        "Accès à la salle d'étude privée",
      ],
    },
    {
      title: "Abonnement Famille",
      price: "60€/an",
      features: [
        "Jusqu'à 5 membres de la famille",
        "20 livres maximum par famille",
        "Accès aux ateliers pour enfants",
        "Réductions sur les événements payants",
        "Accès à toutes les ressources numériques",
      ],
    },
  ]

  return (
    <div className="bg-[#f8f5f1] min-h-screen" id="services">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1096B0] mb-4">Nos Services</h1>
          <p className="text-lg text-[#02252B] max-w-3xl mx-auto">
            Découvrez l'ensemble des services proposés par notre bibliothèque pour enrichir votre expérience culturelle
            et littéraire.
          </p>
        </div>

        {/* Main Services Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`${service.color} rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105`}
              >
                <div className={`${service.iconColor} mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#1096B0] mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1096B0] text-center mb-10">Services Complémentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start">
                <div className="flex-shrink-0 mr-4 text-[#02252B]">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#02252B] mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Options */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1096B0] text-center mb-10">Options d'Abonnement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-[#1096B0] p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-2xl font-semibold">{option.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1096B0] hover:bg-[#1096B0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8b5e34] transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1096B0] text-center mb-10">Horaires des Services Spéciaux</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#f3ece2]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#1096B0] uppercase tracking-wider"
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#1096B0] uppercase tracking-wider"
                  >
                    Lundi - Vendredi
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#1096B0] uppercase tracking-wider"
                  >
                    Samedi
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#1096B0] uppercase tracking-wider"
                  >
                    Dimanche
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aide à la Recherche</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10h00 - 18h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11h00 - 16h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fermé</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ateliers Enfants</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14h00 - 17h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10h00 - 17h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fermé</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Café Littéraire</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9h00 - 19h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10h00 - 18h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fermé</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Soutien Scolaire</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15h00 - 18h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13h00 - 16h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fermé</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Service Numérique</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9h00 - 19h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10h00 - 18h00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fermé</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1096B0] text-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à découvrir notre bibliothèque ?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Rejoignez notre communauté de lecteurs et profitez de tous nos services. Inscrivez-vous dès aujourd'hui ou
            venez nous rendre visite !
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="py-3 px-6 bg-white text-[#1096B0] rounded-md font-medium hover:bg-gray-100 transition-colors">
              S'inscrire
            </button>
            <button className="py-3 px-6 border border-white rounded-md font-medium hover:bg-[#1096B0] transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

