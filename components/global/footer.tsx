const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and tagline */}
            <div className="col-span-1">
              <div className="flex items-center mb-6">
                {/* Replace with your actual logo */}
                <div className="h-12 w-12 rounded-full flex items-center justify-center mr-3">
                <img src="/images/logo/favicon-orange-emoviral.png" alt="EV Logo" className=" w-4xl h-4xl" />
                </div>
                <span className="text-2xl font-bold text-white font-poppins">Emoviral</span>
              </div>
              <p className="text-blue-100 mb-6 font-poppins">
                Ihr zuverlässiger Partner für die Digitalisierung im Automobilhandel.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons 
                
                <a href="#" className="h-10 w-10 rounded-full bg-blue-800 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-blue-800 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-blue-800 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-blue-800 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </a>
                  */}
              </div>
            </div>

            {/* Menu - Column 1 */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-6 font-poppins">Dienstleistungen</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Fahrzeugfotografie</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Webdesign & Verwaltung</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Social-Media-Management</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Werbekampagnen</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Online-Shops</a>
                </li>
              </ul>
            </div>
  
            {/* Menu - Column 2 */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-6 font-poppins">Unternehmen</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Über uns</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Portfolio</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Testimonials</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">Karriere</a>
                </li>
              </ul>
            </div>
  
            {/* Kontakt Information */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-6 font-poppins">Einsatzgebiet</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-amber-500 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-blue-100 font-poppins">
                  Fahrzeugfotografie: Frankfurt, Hanau und Umgebung<br />
                  Digitale Dienstleistungen: deutschlandweit verfügbar<br />
                   
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="text-amber-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:064384039867" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">
                   06438 4039867
                  </a>
                </li>
                <li className="flex items-center">
                  <div className="text-amber-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:hi@emoviral.com" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">
                    hi@emoviral.com
                  </a>
                </li>
                <li className="flex items-center">
                  <div className="text-amber-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <a href="https://www.emoviral.com" target="_blank" className="text-blue-100 hover:text-amber-500 transition-colors duration-300 font-poppins">
                    www.emoviral.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Bottom bar */}
        <div className="border-t border-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0 font-poppins">
              &copy; {new Date().getFullYear()} Emoviral. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6">
              <a href="/Impressum" className="text-blue-200 hover:text-amber-500 text-sm transition-colors duration-300 font-poppins">Impressum</a>
              <a href="/Datenschutz" className="text-blue-200 hover:text-amber-500 text-sm transition-colors duration-300 font-poppins">Datenschutz</a>
              <a href="/AGB" className="text-blue-200 hover:text-amber-500 text-sm transition-colors duration-300 font-poppins">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;