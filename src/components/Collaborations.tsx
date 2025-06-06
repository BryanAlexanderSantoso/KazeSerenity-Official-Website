import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Collaborations: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const collaborations = [
    {
      name: "Ace Anthem",
      role: "Streamer & Content Creator",
      image:
        "https://i.pinimg.com/736x/d0/d8/cb/d0d8cb80bdf6ddddec926e7eda3c4b9a.jpg",
      testimonial:
        "Collaborating with Kaze Serenity was an incredible experience. The community is incredibly supportive and engaging!",
      highlight: "Chill Podcast",
    },
    {
      name: "Wielino",
      role: "Streamer & Content Creator",
      image:
        "https://i.pinimg.com/736x/56/db/0d/56db0d4aef30da75f3cc7acb1f759d7d.jpg",
      testimonial:
        "The Kaze Serenity community brings such positive energy to every collaboration. It's always a highlight of my month!",
      highlight: "Chill Podcast",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % collaborations.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + collaborations.length) % collaborations.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section
      ref={ref}
      id="collaborations"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kolaborasi Eksklusif
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"
          />
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Kami telah bermitra dengan beberapa pembuat konten paling menarik untuk menghadirkan pengalaman unik bagi komunitas kami.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={activeIndex}>
            <motion.div
              key={activeIndex}
              custom={activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="md:flex bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="md:w-2/5 relative h-64 md:h-[450px]"
                >
                  <img
                    src={collaborations[activeIndex].image}
                    alt={collaborations[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="flex items-center"
                    >
                      <Star className="text-yellow-400 w-5 h-5 mr-1" />
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between"
                >
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                    >
                      {collaborations[activeIndex].highlight}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {collaborations[activeIndex].name}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                      {collaborations[activeIndex].role}
                    </p>
                    <blockquote className="italic text-gray-600 dark:text-gray-300 border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 mb-6">
                      "{collaborations[activeIndex].testimonial}"
                    </blockquote>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Previous collaboration"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Next collaboration"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {collaborations.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? "bg-indigo-600 dark:bg-indigo-400 w-6"
                    : "bg-indigo-300 dark:bg-indigo-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Tertarik berkolaborasi dengan Kaze Serenity?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://forms.gle/7Zhwg7WpSAEgP8xP7"
            className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Ajukan Permohonan Kerjasama
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborations;