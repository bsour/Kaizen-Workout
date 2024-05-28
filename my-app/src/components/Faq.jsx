import React, { useState } from 'react';

const FAQ = () => {
  const [expanded, setExpanded] = useState([]);

  const toggleExpand = (index) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  const faqData = [
    {
      question: 'Is the app available yet? ',
      answer:
        'No, I am currently assessing market needs and user interest - the more the better. So, if you like the idea please share it with others.',
    },
    {
      question: 'How does Shinui utilize AI in workout plans?',
      answer:
        'Shinui uses cutting-edge AI algorithms to create highly personalized workout plans for you. When you complete our detailed personal questionnaire, the AI takes into account your goals, fitness level, dietary preferences, and more. It then generates a plan that is customized just for you, optimizing your workouts for maximum results.',
    },
    {
      question: 'Is Shinui\'s approach science-backed?',
      answer:
        'Absolutely! Shinui\'s workout plans are not just AI-generated; they are also grounded in the latest exercise and nutrition science. Our team of experts ensures that every plan is fact-checked and adheres to the most up-to-date research in the field.',
    },
    {
      question: 'How can I trust Shinui for my fitness journey?',
      answer:
        'Shinui takes your fitness journey seriously. We prioritize accuracy, personalization, and science-backed methods. Our AI algorithms continuously learn and adapt to provide you with the best possible experience. We are committed to helping you achieve your fitness goals safely and effectively.',
    },
    {
      question: 'Do I need any special equipment for Shinui workouts?',
      answer:
        'Shinui designs workouts that can be tailored to your available equipment, whether you have a fully equipped gym or just a set of dumbbells at home. During the questionnaire, you can specify your equipment, and the AI will create workouts that suit your resources.',
    },
  ];

  return (
    <section className="bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid pt-8 text-left md:gap-16 dark:border-gray-700 md:grid-cols-1">
          {faqData.map((item, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center justify-between w-full mb-2 text-lg font-medium text-primary-600 dark:text-white focus:outline-none"
              >
                <span>{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    expanded.includes(index) ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      expanded.includes(index)
                        ? 'M5 15l7-7 7 7'
                        : 'M19 9l-7 7-7-7'
                    }
                  />
                </svg>
              </button>
              {expanded.includes(index) && (
                <p className="text-gray-400 dark:text-gray-100">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
