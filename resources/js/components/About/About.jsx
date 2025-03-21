import React from "react"
import { useState } from "react"
import { BookOpen, Award, Users, Clock, BookMarked, GraduationCap } from "lucide-react"
import contactImage from './contact.jpg'; // Updated import for contact.jpg
export default function About() {
  const [activeTab, setActiveTab] = useState("histoire")

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
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Thomas Laurent",
      role: "Responsable des Collections",
      bio: "Expert en littérature française et internationale, Thomas veille à l'enrichissement et à la diversité de nos collections.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sophie Martin",
      role: "Responsable des Événements",
      bio: "Créative et dynamique, Sophie organise nos rencontres littéraires, expositions et ateliers qui animent la vie culturelle de notre bibliothèque.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jean Moreau",
      role: "Bibliothécaire Numérique",
      bio: "Passionné par les nouvelles technologies, Jean développe nos ressources numériques et forme nos usagers aux outils digitaux.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const testimonials = [
    {
      quote:
        "Cette bibliothèque est devenue mon second foyer. L'ambiance y est chaleureuse et le personnel toujours prêt à aider.",
      author: "Isabelle K., membre depuis 2015",
    },
    {
      quote:
        "Grâce aux ateliers pour enfants, mes deux fils ont développé une véritable passion pour la lecture. Un service inestimable !",
      author: "Marc T., parent",
    },
    {
      quote:
        "En tant qu'étudiant, j'apprécie particulièrement les espaces de travail calmes et les ressources numériques accessibles à distance.",
      author: "Lucas M., étudiant",
    },
  ]

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
            <div className="absolute inset-0 bg-gradient-to-r from-[#1096B0]/80 to-transparent flex items-center">
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
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
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
              className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "histoire" ? "border-b-2 border-[#1096B0] text-[#1096B0]" : "text-gray-500 hover:text-[#8b5e34]"}`}
              onClick={() => setActiveTab("histoire")}
            >
              Notre Histoire
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "mission" ? "border-b-2 border-[#1096B0] text-[#1096B0]" : "text-gray-500 hover:text-[#8b5e34]"}`}
              onClick={() => setActiveTab("mission")}
            >
              Mission & Vision
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "valeurs" ? "border-b-2 border-[#1096B0] text-[#1096B0]" : "text-gray-500 hover:text-[#8b5e34]"}`}
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
                    Notre bibliothèque, fondée en 1968, a évolué d’une petite collection dans une maison de maître à un centre culturel majeur.
                     Dans les années 1990, elle s'est installée dans un bâtiment moderne pour mieux accueillir ses usagers. En 2015, une rénovation a intégré les nouvelles technologies tout en préservant son ambiance conviviale.
                    </p>
                  </div>
                  <div>
                    <img
                      src="/placeholder.svg?height=400&width=600"
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
                    <h3 className="text-xl font-semibold text-[#8b5e34] mb-3">Notre Mission</h3>
                    <p className="text-gray-700 mb-6">
                    Promouvoir la lecture et l'apprentissage en offrant un accès égal à l'information et aux ressources adaptées aux besoins de la communauté.
                    </p>
                    <h3 className="text-xl font-semibold text-[#8b5e34] mb-3">Notre Vision</h3>
                    <p className="text-gray-700">
                    Devenir un espace d'inspiration et d'innovation, alliant tradition et modernité pour encourager la découverte et la croissance.
                    </p>
                  </div>
                  <div>
                    <img
                      src="/placeholder.svg?height=400&width=600"
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
                      <div className="text-[#8b5e34] mb-4">{value.icon}</div>
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
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1096B0] text-center mb-10">Ce Que Disent Nos Usagers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-4 text-4xl text-[#8b5e34]">"</div>
                <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                <p className="text-[#1096B0] font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1096B0] text-center mb-10">Nos Partenaires</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((partner) => (
                <div key={partner} className="flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=100&width=200&text=Partner ${partner}`}
                    alt={`Partenaire ${partner}`}
                    className="max-h-16"
                  />
                </div>
              ))}
            </div>
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
            <button className="py-3 px-6 bg-white text-[#1096B0] rounded-md font-medium hover:bg-gray-100 transition-colors">
              Devenir Membre
            </button>
            <button className="py-3 px-6 border border-white rounded-md font-medium hover:bg-[#4a3024] transition-colors">
              En Savoir Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

