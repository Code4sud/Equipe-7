"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CircularProgress = ({ value }: { value: number }) => {
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-green-100"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          className="text-green-600"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold text-green-600">{value}%</span>
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

const MotionCard = motion(Card)

export default function Component() {
  const stats = [
    { value: "68%", label: "des Marseillais exposés à la pollution", type: "percentage" },
    { value: "1500 - 2500", label: "décès prématurés par an", type: "range" },
    { value: "40%", label: "des émissions dues au trafic", type: "percentage" },
  ]

  return (
    <section id="key-figures" className="py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-10 text-green-800"
        >
          Chiffres clés
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6 justify-items-center"
        >
          {stats.map((stat, index) => (
            <MotionCard key={index} variants={itemVariants} className="w-full max-w-sm text-center transition-all hover:shadow-lg bg-white border-green-200 flex flex-col items-center justify-center">
              <CardHeader className="w-full flex flex-col items-center justify-center">
                {stat.type === "percentage" ? (
                  <CircularProgress value={parseInt(stat.value)} />
                ) : (
                  <CardTitle className="text-5xl font-bold text-green-600">{stat.value}</CardTitle>
                )}
              </CardHeader>
              <CardContent className="w-full flex items-center justify-center">
                <p className="text-lg text-green-800">{stat.label}</p>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}