
import React, { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import Button from './Button';
import Line from './Line';

const questions = [
  "Does your business have a mobile-friendly website that clearly communicates your value in less than 5 seconds?",
  "Can your customers find you easily on Google without typing your exact name?",
  "Do you have a system to automatically capture leads from your website, social media, or WhatsApp?",
  "Do you currently track how many website visitors convert into paying customers?",
  "Are your follow-ups done manually or automatically (email, WhatsApp, CRM)?",
  "Can you access customer or lead data in one click from any device?",
  "Can your clients book a service, consult, or meeting with you online — without calling?",
  "Do you offer clients digital onboarding, resources, or a client dashboard?",
  "Are your tech systems scalable if you double your customer base next quarter?",
  "Do you feel your current digital setup is supporting your growth or just survival?"
];

const getResultMessage = (score) => {
  if (score <= 4) return "You're in survival mode. A tech upgrade can unlock major efficiency.";
  if (score <= 7) return "You're building momentum. Let's automate & optimize your growth.";
  return "You're growth-ready. Scale faster with a custom solution from The Bot Agency.";
};


const Star = ({ className, fill }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill}>
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>
);

function App() {
  const [started, setStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [key, setKey] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleAnswer = (answer) => {
    const isYes = answer === "yes";
    const updatedScore = score + (isYes ? 1 : 0);

    if (current < questions.length - 1) {
      setScore(updatedScore);
      setCurrent(current + 1);
      setKey(prev => prev + 1);
    } else {
      setScore(updatedScore);
      setStarted("finished");
      if (updatedScore > 7) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 5000);
      }
    }
  };

  const getBarColor = () => {
    if (score <= 4) return "#f44336";
    if (score <= 7) return "#ff9800";
    return "#4caf50";
  };

  const chartData = [
    { name: 'Score', value: score }
  ];

  return (
    <div className={`App ${showCelebration ? "celebration" : ""}`}>
      {!started && !showIntro && (
        <div className="floating-icon" onClick={() => setShowIntro(true)}>🚀</div>
      )}

      {!started && showIntro && (
        <div className="quiz-box">
          <h2>Are you open to growth and improvement?</h2>
          <p>People with a growth mindset often push themselves to the next level.</p>
          <p>Are you ready?? Take the quiz 🚀</p>
          <Button text="Start Quiz" className='mt-2' onClick={() => setStarted(true)}></Button>
        </div>

      )}

      {started === true && (
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            className="quiz-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <div className={`quiz-box ${showCelebration ? "celebration-bg" : ""}`}>
              <h3>Question {current + 1}</h3>
              <div className='w-full flex justify-center my-5'><Line/></div>
              <p>{questions[current]}</p>
              <div className="flex justify-center items-center gap-10">
                <div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => handleAnswer("yes")}
                >
                  <Button text="Yes" className='mt-2' ></Button>
                </div>
                <div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => handleAnswer("no")}
                >
                  <Button text="No" className='mt-2' ></Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {started === "finished" && (
        <>
          <motion.div
            className="result-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >

            <div className="stars-container">

              <Star className="star star-1" fill="#FFD700" />
              <Star className="star star-2" fill="#FFC107" />
              <Star className="star star-3" fill="#FFEB3B" />
              <Star className="star star-4" fill="#FFD700" />
              <Star className="star star-5" fill="#FFC107" />
              <Star className="star star-6" fill="#FFEB3B" />


              <div className="bubble bubble-1"></div>
              <div className="bubble bubble-2"></div>
              <div className="bubble bubble-3"></div>
              <div className="bubble bubble-4"></div>
              <div className="bubble bubble-5"></div>


              <div className="sparkle sparkle-1"></div>
              <div className="sparkle sparkle-2"></div>
              <div className="sparkle sparkle-3"></div>
              <div className="sparkle sparkle-4"></div>


              {score > 7 && (
                <>
                  <div className="confetti confetti-1"></div>
                  <div className="confetti confetti-2"></div>
                  <div className="confetti confetti-3"></div>
                  <div className="confetti confetti-4"></div>
                  <div className="confetti confetti-5"></div>
                  <div className="confetti confetti-6"></div>
                  <div className="confetti confetti-7"></div>
                  <div className="confetti confetti-8"></div>
                  <div className="confetti confetti-9"></div>
                </>
              )}
            </div>


            <h2 style={{
              fontSize: '1.5rem',
              marginBottom: '0.25rem',
              color: getBarColor(),
              position: 'relative',
              zIndex: 2
            }}>
              Your Score: {score} / 10
            </h2>


            <div className="score-counter">
              {score}
            </div>
            <div className='flex justify-center w-full'>
              <Line />
            </div>
            <div style={{
              width: '85%',
              height: 200,
              marginTop: '2rem',
              position: 'relative',
              zIndex: 2
            }}>
              <ResponsiveContainer>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Bar dataKey="value" fill={getBarColor()} />
                </BarChart>
              </ResponsiveContainer>



              <div className="chart-highlight"></div>
            </div>


            <p className="result-message" style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              lineHeight: 1.4,
              position: 'relative',
              zIndex: 2
            }}>
              {getResultMessage(score)}
            </p>
          </motion.div>

          <div className="bg-customDark hover:bg-customDark2 mt-1 cursor-pointer w-56 rounded-md p-3">
            <div
              className="animated-button"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setStarted(false);
                setCurrent(0);
                setScore(0);
                setShowIntro(false);
              }}
            >
              Close Quiz
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;