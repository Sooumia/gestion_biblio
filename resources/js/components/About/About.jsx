import React from "react"
import { useState } from "react"
import { motion } from "framer-motion";
import { BookOpen, Award, Users, Clock, BookMarked, GraduationCap, Star, StarHalf } from "lucide-react"
import contactImage from './contact.jpg'; // Updated import for contact.jpg
import image1 from './image.jpg';
import image2 from './image1.jpg';
import image3 from './image2.jpg';
import image4 from './image3.jpg';
import image5 from './image4.jpg';
import image6 from './image5.jpg';
import image7 from './image6.jpg';
import image8 from './image7.jpg';
import image9 from './image8.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState("histoire")
  const [isVisible, setIsVisible] = useState({ stats: true, testimonials: true }); // Added isVisible state

  const stats = [
    {
      value: "50,000+",
      label: "Livres dans notre collection",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      value: "1968",
      label: "Année de fondation",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      value: "12,000+",
      label: "Membres actifs",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: "500+",
      label: "Événements par an",
      icon: <Award className="h-6 w-6" />,
    },
  ]
  const team = [
    {
      name: "Marie Dupont",
      role: "Directrice",
      bio: "Avec plus de 20 ans d'expérience dans la gestion de bibliothèques, Marie dirige notre établissement avec passion et vision depuis 2010.",
      image: image1,
    },
    {
      name: "Thomas Laurent",
      role: "Responsable des Collections",
      bio: "Expert en littérature française et internationale, Thomas veille à l'enrichissement et à la diversité de nos collections.",
      image: image2,
    },
    {
      name: "Sophie Martin",
      role: "Responsable des Événements",
      bio: "Créative et dynamique, Sophie organise nos rencontres littéraires, expositions et ateliers qui animent la vie culturelle de notre bibliothèque.",
      image: image3,
    },
    {
      name: "Jean Moreau",
      role: "Bibliothécaire Numérique",
      bio: "Passionné par les nouvelles technologies, Jean développe nos ressources numériques et forme nos usagers aux outils digitaux.",
      image: image4,
    },
  ]

  const testimonials = [
    {
      quote:
        "Cette bibliothèque est devenue mon second foyer. L'ambiance y est chaleureuse et le personnel toujours prêt à aider.",
      author: "Isabelle K., membre depuis 2015",
      avatar: image5, // Remplacez par une vraie URL ou laissez null
      rating: 5, // Note sur 5
    },
    {
      quote:
        "Grâce aux ateliers pour enfants, mes deux fils ont développé une véritable passion pour la lecture. Un service inestimable !",
      author: "Marc T., parent",
      avatar: image6,
      rating: 4,
    },
    {
      quote:
        "En tant qu'étudiant, j'apprécie particulièrement les espaces de travail calmes et les ressources numériques accessibles à distance.",
      author: "Lucas M., étudiant",
      avatar: image7,
      rating: 5,
    },
  ];
  

  const values = [
    {
      title: "Accessibilité",
      description:
        "Nous nous engageons à rendre la culture et le savoir accessibles à tous, quels que soient l'âge, l'origine ou la situation sociale.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Diversité",
      description:
        "Notre collection reflète la richesse et la diversité des cultures, des idées et des perspectives du monde entier.",
      icon: <BookMarked className="h-8 w-8" />,
    },
    {
      title: "Innovation",
      description:
        "Nous embrassons les nouvelles technologies et méthodes pour améliorer constamment nos services et l'expérience de nos usagers.",
      icon: <GraduationCap className="h-8 w-8" />,
    },
  ]

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} className="h-5 w-5 text-[#1096B0]" />);
      } else if (i - rating < 1) {
        stars.push(<StarHalf key={i} className="h-5 w-5 text-[#1096B0]" />);
      } else {
        stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />); // Use a gray Star as a placeholder
      }
    }
    return stars;
  };

  return (
    <div className="bg-[#f8f5f1] min-h-screen" id="about">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="h-64 sm:h-80 lg:h-96 w-full rounded-xl overflow-hidden">
            <img
              src={contactImage} // Updated to use the imported image
              alt="Bibliothèque municipale"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1096B0]/40 to-transparent flex items-center">
              <div className="px-8 sm:px-12 max-w-xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  À Propos de Notre Bibliothèque
                </h1>
                <p className="text-white text-lg sm:text-xl">
                  Un espace de culture, de savoir et de rencontres au cœur de la ville.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20" id="stats-section">
          <h2 className="text-3xl font-bold text-[#1096B0] text-center mb-10">My Biblio en Chiffres</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible.stats ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center text-[#1096B0] mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#1096B0] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="mb-20">
          <div className="flex flex-wrap border-b border-gray-300 mb-8">
            <button
              className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "histoire" ? "border-b-2 border-[#1096B0] text-[#1096B0]" : "text-gray-500 hover:text-[#1096B0]"}`}
              onClick={() => setActiveTab("histoire")}
            >
              Notre Histoire
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "mission" ? "border-b-2 border-[#1096B0] text-[#1096B0]" : "text-gray-500 hover:text-[#1096B0]"}`}
              onClick={() => setActiveTab("mission")}
            >
              Mission & Vision
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "valeurs" ? "border-b-2 border-[#1096B0] text-[#1096B0]" : "text-gray-500 hover:text-[#1096B0]"}`}
              onClick={() => setActiveTab("valeurs")}
            >
              Nos Valeurs
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            {activeTab === "histoire" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1096B0] mb-4">Notre Histoire</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-4">
                    Notre bibliothèque, fondée en 1968, a évolué d'une petite collection dans une maison de maître à un centre culturel majeur.
                     Dans les années 1990, elle s'est installée dans un bâtiment moderne pour mieux accueillir ses usagers. En 2015, une rénovation a intégré les nouvelles technologies tout en préservant son ambiance conviviale.
                    </p>
                  </div>
                  <div>
                    <img
                      src={image8}
                      alt="Histoire de la bibliothèque"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "mission" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1096B0] mb-4">Mission & Vision</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1096B0] mb-3">Notre Mission</h3>
                    <p className="text-gray-700 mb-6">
                    Promouvoir la lecture et l'apprentissage en offrant un accès égal à l'information et aux ressources adaptées aux besoins de la communauté.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1096B0] mb-3">Notre Vision</h3>
                    <p className="text-gray-700">
                    Devenir un espace d'inspiration et d'innovation, alliant tradition et modernité pour encourager la découverte et la croissance.
                    </p>
                  </div>
                  <div>
                    <img
                      src={image9}
                      alt="Mission de la bibliothèque"
                      className="rounded-lg shadow-md"
                      
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "valeurs" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1096B0] mb-6">Nos Valeurs</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="bg-[#f8f5f1] rounded-lg p-6">
                      <div className="text-[#1096B0] mb-4">{value.icon}</div>
                      <h3 className="text-xl font-semibold text-[#1096B0] mb-2">{value.title}</h3>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1096B0] text-center mb-10">Notre Équipe</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1096B0] mb-1">{member.name}</h3>
                  <p className="text-[#034D59] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20" id="testimonials-section">
      <h2 className="text-3xl font-bold text-[#1096B0] text-center mb-10">
        Ce Que Disent Nos Usagers
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isVisible.testimonials ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.author.split(",")[0]}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="text-[#1096B0] font-medium">{testimonial.author.split(",")[0]}</p>
                <p className="text-gray-500 text-sm">{testimonial.author.split(",")[1]}</p>
              </div>
            </div>
            <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
            <div className="mb-4 text-4xl text-[#1096B0] absolute top-4 right-4 opacity-20">"</div>
            <p className="text-gray-700 italic mb-4 leading-relaxed relative z-10">{testimonial.quote}</p>
          </motion.div>
        ))}
      </div>
    </div>       
  

        {/* CTA Section */}
        <div className="bg-[#1096B0] text-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Rejoignez Notre Communauté</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Devenez membre de notre bibliothèque et découvrez tous les avantages que nous offrons. Inscrivez-vous dès
            aujourd'hui !
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="py-3 px-6 bg-white text-[#1096B0] hover:bg-[#1096B0] hover:text-[white] rounded-md font-medium  transition-colors">
              Devenir Membre
            </button>
            <button className="py-3 px-6 border border-white rounded-md font-medium hover:bg-[white] hover:text-[#1096B0] transition-colors">
              En Savoir Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

