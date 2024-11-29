const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Halal Holiday Check</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About CEO
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Service Agreement
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cancellation & Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline text-yellow-400 font-semibold"
              >
                Become an affiliate
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Extranet
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact information
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Become a member</h2>
          <p className="mb-4">
            Sign up to get up to 10% off discount, the latest updates and
            offers!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-2 text-black rounded-l"
            />
            <button className="bg-yellow-400 px-4 py-2 rounded-r">
              &#10003;
            </button>
          </div>
          <div className="mt-4">
            <img
              src="https://via.placeholder.com/150"
              alt="3D Secure Verified"
              className="h-12"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-teal-800 pt-4 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>
            Halalholidaycheck is an Islamic Halal tour operator based in the
            touristic destination of Antalya, Turkey.
          </p>
          <div className="flex items-center space-x-4">
            <span>
              <a href="tel:+902425104100" className="hover:underline">
                +90 242 510 41 00
              </a>
            </span>
            <span>
              <a
                href="mailto:reservation@halalholidaycheck.com"
                className="hover:underline"
              >
                reservation@halalholidaycheck.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
