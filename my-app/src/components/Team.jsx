import React from "react";

const Team = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            The Shinui Journey
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Shinui is not just a fitness platform; it's a manifestation of a
            dream. Hi, I'am Sourabh Beniwal, a software engineer with passion
            for fitness. My enthusiasm for bodybuilding, swimming, and mountain
            biking led me to create Shinui, a unique approach to fitness that
            adapts to every individual's story. Fueled by the desire for more
            than just standard fitness routines, I will build Shinui to empower and
            inspire. Join me on this journey of health, strength, and
            self-discovery.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="w-full h-70 object-cover rounded-t-lg scale-90"
              src="/IMG_4393.JPG"
              alt="Sourabh Beniwal"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sourabh Beniwal
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Creator of Shinui
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Driven by my love for fitness and technology, I invite you all
                to experience the transformation that Shinui will offer. Your
                feedback fuels this journey, propelling me to greater heights.
                Share your story with me.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:sourabhbeniwal@outlook.com"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/sourabhbeniwal1"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      clip-rule="evenodd"
                    />
                    <path d="M3 5.012H0V15h3V5.012Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
