import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dialog } from '@headlessui/react';


const days = [
  { name: "Happy Rose Day", color: "bg-red-500", quote: "A single rose can be my garden... a single friend, my world.", image: "./rose.jpg" },
  { name: "Happy Propose Day", color: "bg-pink-600", quote: "Will you be my Valentine?", image: "./4.jpg" },
  { name: "Happy Chocolate Day", color: "bg-yellow-500", quote: "Life is like a box of chocolates...", image: "./chocolate.jpg" },
  { name: "Happy Teddy Day", color: "bg-purple-500", quote: "A teddy bear is a faithful friend you can hug forever.", image: "./teddy.jpg" },
  { name: "Happy Promise Day", color: "bg-blue-500", quote: "I promise to always stand by your side.", image: "./promise.jpg" },
  { name: "Happy Hug Day", color: "bg-orange-500", quote: "A hug is worth a thousand words.", image: "./hug.jpg" },
  { name: "Happy Kiss Day", color: "bg-pink-600", quote: "A kiss is a lovely trick designed by nature.", image: "./kiss.jpg" },
  { name: "Happy Valentine's Day", color: "bg-red-700", quote: "You are my today and all of my tomorrows.", image: "./oshtomi.jpg" }
];

const personalImages = ["./maroon.jpg", "./christmas.jpg", "./3.jpg", "./saraswatipuja.jpg", "./newyear.jpg"];

const App = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 font-sans min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center text-red-600 py-5"
      >
        ❤️For My One and Only Valentine❤️
      </motion.h1>
      {days.slice(0, 4).map((day, index) => (
        <AnimatedSection key={day.name} index={index} day={day} />
      ))}

      <div className="overflow-hidden my-10">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          animate={{ x: ["100%", "0%"] }}
          transition={{ repeat: 0, duration: 10, ease: "linear" }}
        >
          {personalImages.map((img, index) => (
            <img key={index} src={img} alt={`Personal ${index + 1}`} className="w-44 md:w-64 h-64 rounded-lg shadow-md" />
          ))}
        </motion.div>
      </div>

      {days.slice(4, 7).map((day, index) => (
        <AnimatedSection key={day.name} index={index + 4} day={day} />
      ))}

      <ValentineSection day={days[7]} />
    </div>
  );
};

const AnimatedSection = ({ day, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`py-10 text-center text-white ${day.color} px-4 sm:px-10 md:px-20 lg:px-40 rounded-lg shadow-lg my-6 mx-4 sm:mx-10 md:mx-20`}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">{day.name}</h1>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto">{day.quote}</p>
      <motion.img
        initial={{ scale: 1.0 }}
        whileHover={{ scale: 1.1 }}
        src={day.image}
        alt={day.name}
        className="mx-auto mt-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2"
      />
    </motion.section>
  );
};

const ValentineSection = ({ day }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      className={`py-10 text-center text-white ${day.color} px-4 sm:px-10 md:px-20 lg:px-40 rounded-lg shadow-lg my-6 mx-4 sm:mx-10 md:mx-20`}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">{day.name}</h1>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto">{day.quote}</p>
      <motion.img
        initial={{ scale: 1.0 }}
        whileHover={{ scale: 1.1 }}
        src={day.image}
        alt={day.name}
        className="mx-auto mt-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2"
      />
      <button
        onClick={() => setIsOpen(true)}
        className="mt-6 px-6 py-3 text-lg font-bold bg-white text-red-700 rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Give it a Touch ❤️
      </button>
      
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-sm">
        <Dialog.Panel className="bg-white rounded-lg p-6 max-w-sm text-center shadow-lg">
          <Dialog.Title className="text-xl font-bold text-red-600">Happy Valentine's Day Loveee! ❤️</Dialog.Title>
          <Dialog.Description className="mt-4 text-lg text-gray-700">
          You are my forever and always. I love you more than words can say! From your beloved Nunkuu 😍😘💖
          You make my life brighter with your love and kindness. I am grateful for every moment with you, and I promise to cherish you forever! 💕✨
          </Dialog.Description>
          <button onClick={() => setIsOpen(false)} className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition">
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </motion.section>
  );
};

export default App;
