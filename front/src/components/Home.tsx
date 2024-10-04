import { Droplets, CloudFog } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OverviewSection from "@/components/overView";
import PollutionChart from '@/components/PollutionChart';
import SimpleMap from '@/Map';
import Chiffre from "@/components/ui/Chiffre"

const MotionCard = motion(Card)

export default function PollutionAwarenessPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-green-50 text-green-900 w-100">
      <header className="relative h-96 bg-green-800 text-white">
        <img
          src="/pollution2.jpg"
          alt="Vue aérienne de Marseille"
          className="w-full h-full opacity-50 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4 text-center"
          >
            EPSILON
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-center"
          >
            Ensemble pour un air plus pur
          </motion.p>
        </div>
      </header>

      <main className="mx-auto">
        <div className="container mx-auto px-4">
          <OverviewSection />

          <Chiffre/>
        </div>

        <section id="pollution-chart" className="w-full bg-white py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-green-800 text-center"
            >
              Évolution des Polluants Atmosphériques à Marseille (2018-2023)
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-center mb-10 text-green-600"
            >
              Suivi annuel des concentrations de particules et gaz polluants
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <PollutionChart />
            </motion.div>
            <p className="mt-8 text-center text-black italic">
              Source: Données collectées par les stations de mesure de la qualité de l'air à Marseille
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <section id="particles" className="py-20">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-10 text-green-800 text-center"
            >
              Les particules et leurs conséquences
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { icon: Droplets, name: "SO2", description: "Le dioxyde de soufre provient principalement de la combustion de combustibles fossiles. Il peut causer des problèmes respiratoires." },
                { icon: CloudFog, name: "NO", description: "Le monoxyde d'azote est un précurseur du NO2 et contribue à la formation de smog et de pluies acides." },
                { icon: CloudFog, name: "NO2", description: "Le dioxyde d'azote est un gaz irritant pour les bronches, augmentant la fréquence et la gravité des crises chez les asthmatiques." },
                { icon: CloudFog, name: "NOx", description: "Les oxydes d'azote regroupent le NO et le NO2. Ils contribuent à la formation d'ozone et ont des effets néfastes sur la santé respiratoire." },
                { icon: Droplets, name: "PM10", description: "Particules en suspension dans l'air dont le diamètre est inférieur à 10 micromètres. Elles peuvent pénétrer dans les voies respiratoires." },
                { icon: Droplets, name: "PM2.5", description: "Particules fines dont le diamètre est inférieur à 2,5 micromètres. Elles peuvent pénétrer profondément dans les poumons et le sang." },
                { icon: Droplets, name: "PM1", description: "Particules ultrafines dont le diamètre est inférieur à 1 micromètre. Elles sont particulièrement dangereuses car elles peuvent atteindre les alvéoles pulmonaires." },
              ].map((particle, index) => (
                <MotionCard 
                  key={index} 
                  variants={itemVariants} 
                  className={`transition-all hover:shadow-lg bg-white border-green-200 ${index === 6 ? 'md:col-start-2' : ''}`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-2xl font-bold text-green-700">
                      <particle.icon className="w-6 h-6 text-green-600" />
                      <span>{particle.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800">{particle.description}</p>
                  </CardContent>
                </MotionCard>
              ))}
            </motion.div>
          </section>

          <section id="pollution-map" className="w-full bg-green-100 py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-green-800 text-center"
            >
              Carte Interactive de la Pollution à Marseille
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-center mb-10 text-green-600"
            >
              Explorez la pollution de l'air et routière à travers les années
            </motion.p>
            <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-xl">
              <SimpleMap />
            </div>
            <p className="mt-8 text-center text-green-700 italic">
              Utilisez les contrôles sur la carte pour sélectionner la date et ajouter ou retirer l'impact de l'activité humaine sur l'environnement
            </p>
          </div>
        </section>

          <section id="actions" className="py-20">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-10 text-green-800"
            >
              Comment agir ?
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                { title: "Transports doux", description: "Privilégiez le vélo, la marche ou les transports en commun." },
                { title: "Économies d'énergie", description: "Réduisez votre consommation énergétique au quotidien." },
                { title: "Initiatives locales", description: "Participez aux actions de votre communauté." },
                { title: "Sensibilisation", description: "Informez-vous et partagez vos connaissances." },
              ].map((action, index) => (
                <MotionCard key={index} variants={itemVariants} className="transition-all hover:shadow-lg bg-white border-green-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-green-700">{action.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-800">{action.description}</p>
                  </CardContent>
                </MotionCard>
              ))}
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  )
}