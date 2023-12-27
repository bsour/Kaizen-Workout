import React from 'react';

const Reviews = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">Kaizen Impact</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          See what our users have to say about their fitness journey with Kaizen.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-100 border-b border-primary-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Unbelievable Progress!</h3>
              <p className="my-4">
              "Guys, you won't believe the progress I've made with Kaizen! 😱 From a total couch potato to feeling like a superhero 🦸‍♂️ in just a few months. These personalized workouts are the real deal. Thanks, Kaizen! 🙌"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Amanda</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Kaizen Workout Plan User</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-100 border-b border-primary-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Life-Changing Stuff!</h3>
              <p className="my-4">
              "I gotta share this—Kaizen has completely changed my life! 😄 The workouts are no joke, but they're fun and challenging. 💦 I'm not just fitter; I'm happier and more confident! Thanks, Kaizen team! 🎉"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Emily</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Kaizen Workout and Nutrition Plan User </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-100 border-b border-primary-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kaizen Rocks!</h3>
              <p className="my-4">
              "I've gotta say it—Kaizen rocks! 🤘 The AI workouts are seriously impressive; they adapt to my pace. 🏋️‍♀️ I'm not just impressed; I'm addicted to the gains. 💪 Kaizen for the win! 🚀"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Adam</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Test Ran Kaizen</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-100 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mind-Blowing Results!</h3>
              <p className="my-4">
              "Okay, folks, here's the deal—Kaizen is a game-changer! 🌟 The workouts are like magic, and the progress? Mind-blowing! 🪄 I can't get enough of it. Highly recommend! 😎"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jed</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Test Ran Kaizen</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
