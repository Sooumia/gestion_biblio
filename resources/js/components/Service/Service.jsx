import React from "react"
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
  ArrowRight,
  Star,
} from "lucide-react"
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function Services() {
  const mainServices = [
    {
      title: "Prêt de Livres",
      description: "Empruntez jusqu'à 10 livres pour une durée de 3 semaines, avec possibilité de prolongation.",
      icon: <Book className="h-8 w-8" />,
      color: "#4ECDC4",
    },
    {
      title: "Espace de Lecture",
      description:
        "Profitez de nos espaces confortables pour lire, étudier ou travailler dans un environnement calme et inspirant.",
      icon: <BookOpen className="h-8 w-8" />,
      color: "#7BDFF2",
    },
    {
      title: "Événements Culturels",
      description: "Participez à nos rencontres avec des auteurs, clubs de lecture, expositions et ateliers créatifs.",
      icon: <Calendar className="h-8 w-8" />,
      color: "#B2F7EF",
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

  const specialHours = [
    {
      service: "Aide à la Recherche",
      weekdays: "10h00 - 18h00",
      saturday: "11h00 - 16h00",
      sunday: "Fermé",
    },
    {
      service: "Ateliers Enfants",
      weekdays: "14h00 - 17h00",
      saturday: "10h00 - 17h00",
      sunday: "Fermé",
    },
    {
      service: "Café Littéraire",
      weekdays: "9h00 - 19h00",
      saturday: "10h00 - 18h00",
      sunday: "Fermé",
    },
    {
      service: "Soutien Scolaire",
      weekdays: "15h00 - 18h00",
      saturday: "13h00 - 16h00",
      sunday: "Fermé",
    },
    {
      service: "Service Numérique",
      weekdays: "9h00 - 19h00",
      saturday: "10h00 - 18h00",
      sunday: "Fermé",
    },
  ]

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="bg-[#1096B0] text-white min-h-screen" id="services">
      {/* Header with diagonal design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0F3460] skew-y-[-5deg] origin-top-left transform -translate-y-1/2"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-1">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-white bg-gradient-to-r from-[#1096B0] to-[#7BDFF2]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Nos Services
            </h1>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Découvrez l'ensemble des services proposés par notre bibliothèque pour enrichir votre expérience
              culturelle et littéraire.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 -mt-12">
        {/* Main Services with horizontal scroll on mobile */}
        <div className="mb-24">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 snap-x ">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full rounded-2xl p-8 relative overflow-hidden" style={{ backgroundColor: "#1F305E" }}>
                  <div
                    className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-20"
                    style={{ backgroundColor: service.color }}
                  ></div>
                  <div className="relative z-10">
                    <div className="p-4 rounded-xl inline-flex mb-6" style={{ backgroundColor: service.color }}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services with grid layout */}
        <div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 inline-block relative">
            Services Complémentaires
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#1096B0]"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#1F305E] rounded-xl p-6 hover:bg-[#1F305E] transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-3 rounded-lg bg-[#0F3460] text-[#1096B0]">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Options with tabs */}
        <div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-1 inline-block relative">
            Options d'Abonnement
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#1096B0]"></span>
          </h2>
          {/* Membership Options */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1096B0] text-center mb-5">Options d'Abonnement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-[#1F305E] p-6 text-white text-center">
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
                  <button className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1F305E] hover:bg-[#1096B0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8b5e34] transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Hours with modern table */}
        <div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 inline-block relative">
            Horaires des Services Spéciaux
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#1096B0]"></span>
          </h2>

          <div className="overflow-hidden rounded-xl bg-[#1F305E]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#0F3460]">
                    <th className="px-6 py-5 text-left text-sm font-semibold text-[#1096B0]">Service</th>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-[#1096B0]">Lundi - Vendredi</th>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-[#1096B0]">Samedi</th>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-[#1096B0]">Dimanche</th>
                  </tr>
                </thead>
                <tbody>
                  {specialHours.map((item, index) => (
                    <tr key={index} className="border-b border-[#0F3460] hover:bg-[#1F305E] transition-colors">
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-medium">{item.service}</td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-400">{item.weekdays}</td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-400">{item.saturday}</td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-400">{item.sunday}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA Section with diagonal design */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1096B0] to-[#f8f5f1] skew-y-[-3deg] origin-bottom-left"></div>
          <div
            className="relative p-12 text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Prêt à découvrir notre bibliothèque ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez notre communauté de lecteurs et profitez de tous nos services. Inscrivez-vous dès aujourd'hui ou
              venez nous rendre visite !
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="py-6 bg-white text-[#1096B0] hover:bg-gray-100">
                S'inscrire maintenant
              </Button>
              <Button size="lg" className="py-6 bg-transparent border-2 border-white hover:bg-white/10">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div> {/* Closing the main container div */}
    </div> {/* Closing the root div */}
    </div>
  );
} 