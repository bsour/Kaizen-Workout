const Footer = ({ isBlack }) => {
  // Conditional Tailwind classes
  const footerBgClass = isBlack ? 'bg-black' : 'bg-white'; 
  const textColorClass = isBlack ? 'text-white' : 'text-gray-900'; // Adjust the dark text color if needed

  return (
    <footer className={`${footerBgClass} p-4 sm:p-6`}>
      <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between items-center">
              <div className="mb-6 md:mb-0">
                  <a href="https://flowbite.com" className="flex items-center">
                      <img
                          src="/Kaizen.png"
                          className="mr-3 h-6 sm:h-9"
                          alt="Kaizen Logo"
                      />
                      <span className={`self-center text-2xl font-semibold whitespace-nowrap ${textColorClass}`}>Kaizen</span>
                  </a>
              </div>
              <div className={`text-center text-sm ${textColorClass} mt-2 md:mt-0`}>
                  © 2024 <a href="https://flowbite.com" className="hover:underline">Kaizen™</a>. All Rights Reserved.
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
