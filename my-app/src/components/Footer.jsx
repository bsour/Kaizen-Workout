const Footer = ({}) => {
  return (
    <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between items-center">
            <div class="mb-6 md:mb-0">
                <a href="https://flowbite.com" class="flex items-center">
                    <img
                        src="/Kaizen.png"
                        class="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kaizen</span>
                </a>
            </div>
            <div class="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                © 2024 <a href="https://flowbite.com" class="hover:underline">Kaizen™</a>. All Rights Reserved.
            </div>
        </div>
    </div>
</footer>

  );
};

export default Footer;
