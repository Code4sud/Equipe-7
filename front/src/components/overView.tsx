import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Car, Factory, ChevronDown } from 'lucide-react';

const OverviewSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const overviewItems = [
    {
      icon: Plane,
      title: "Trafic aérien",
      subtitle: "Impacts Environnementaux de l'Aéroport de Marignane",
      image: "/avion.jpg",
      detail: [
        "Émissions de CO₂ : Un avion émet environ 285 g de CO₂ par passager-km, soit des centaines de milliers de tonnes par an à Marignane.",
        "Pollution de l'air : Décollages et atterrissages représentent 30% des émissions de NOx dans l'aviation (OACI).",
        "Nuisances sonores : Le bruit autour des aéroports dépasse souvent 75 dB, nuisible pour la santé, contre 55 dB le jour et 45 dB la nuit recommandés par l'OMS.",
        "Biodiversité : 10% des oiseaux migrateurs autour des aéroports changent de route ou subissent un déclin à cause du bruit et de la perte d'habitat."
      ]    
    },
    {
      icon: Car,
      title: "Trafic routier",
      subtitle: "Impacts Environnementaux du Trafic Routier à Marseille",
      image: "/routier.jpg",
      detail: [
        "Émissions de GES : Le transport routier émet plus de 30% des GES en France, avec un taux plus élevé à Marseille.",
        "Pollution de l'air : Le NO₂ dépasse 40 µg/m³ à Marseille, avec des pics au-dessus de 60 µg/m³ dans les zones à fort trafic.",
        "Particules fines : Environ 400 décès annuels à Marseille sont dus à la pollution de l'air liée aux PM10 et PM2.5.",
        "Bruit : 25% des Marseillais subissent des niveaux de bruit supérieurs à 65 dB à cause du trafic, au-delà des normes de l'OMS."
      ]     
    },
    {
      icon: Factory,
      title: "Activités industrielles",
      subtitle: "Impacts Environnementaux des Activités Industrielles autour de l'Étang de Berre",
      image: "/usine.jpg",
      detail: [
        "Pollution de l'eau : Les industries autour de l'étang de Berre rejetaient plus de 6 000 tonnes d'hydrocarbures par an dans les années 1980 ; les métaux lourds restent problématiques.",
        "Pollution atmosphérique : Fos-Berre émet plus de 35% du SO₂ de la région, aggravant les pluies acides et la qualité de l'air.",
        "Réchauffement de l'eau : Les rejets d'eaux chaudes augmentent la température de l'étang de Berre de 2°C, perturbant l'écosystème.",
        "Biodiversité : La population de poissons a chuté de 50% entre 1960 et 1990 à cause de la pollution, avec des espèces toujours en difficulté."
      ]      
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden px-4">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-16 text-green-800 text-center"
      >
        La pollution de l'air à Marseille
      </motion.h2>

      {/* Version mobile */}
      <div className="md:hidden flex flex-col space-y-8">
        {overviewItems.map((item, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <motion.div
              className={`w-40 h-40 rounded-full bg-white shadow-lg flex flex-col items-center justify-center cursor-pointer transition-all ${activeItem === index ? 'scale-110 z-10' : 'hover:scale-105'}`}
              onClick={() => setActiveItem(activeItem === index ? null : index)}
            >
              <item.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-green-800 text-center px-4">{item.title}</h3>
            </motion.div>
            <AnimatePresence>
              {activeItem === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 bg-white rounded-lg shadow-xl p-4 w-full"
                >
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h4 className="text-xl font-bold text-green-800 mb-2">{item.title}</h4>
                  <h5 className="text-lg text-green-600 mb-3">{item.subtitle}</h5>
                  <ul className="text-green-700 list-disc pl-5 space-y-2">
                    {item.detail.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Version desktop (inchangée) */}
      <div className="hidden md:flex md:flex-row justify-center items-start md:space-x-4 relative">
        {overviewItems.map((item, index) => (
          <div key={index} className="w-1/3 flex flex-col items-center">
            <motion.div
              className={`w-48 h-48 rounded-full bg-white shadow-lg flex flex-col items-center justify-center cursor-pointer transition-all ${activeItem === index ? 'scale-110 z-10' : 'hover:scale-105'}`}
              onClick={() => setActiveItem(activeItem === index ? null : index)}
            >
              <item.icon className="w-16 h-16 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-green-800 text-center px-4">{item.title}</h3>
            </motion.div>
            <AnimatePresence>
              {activeItem === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4"
                >
                  <ChevronDown className="w-8 h-8 text-green-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Explication pour la version desktop (inchangée) */}
      <AnimatePresence>
        {activeItem !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl mx-auto hidden md:block"
          >
            <div className="flex flex-row space-x-6">
              <img src={overviewItems[activeItem].image} alt={overviewItems[activeItem].title} className="w-2/3 h-auto object-cover rounded-md" />
              <div>
                <h4 className="text-2xl font-bold text-green-800 mb-2">{overviewItems[activeItem].title}</h4>
                <h5 className="text-xl text-green-600 mb-3">{overviewItems[activeItem].subtitle}</h5>
                <ul className="text-green-700 list-disc pl-5 space-y-2">
                  {overviewItems[activeItem].detail.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <svg className="absolute bottom-0 left-0 w-full h-16 text-green-100" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" fill="currentColor"></path>
      </svg>
    </section>
  );
};

export default OverviewSection;