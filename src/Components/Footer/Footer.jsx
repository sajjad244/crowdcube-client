import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto gap-8  text-center">
        <div id="">
          <div className="text-2xl font-bold text-white mb-2">
            <i>
              <span className="text-orange-500">Crowd</span>
              <span>cube</span>
            </i>
          </div>
          <h2 className="text-md font-bold text-gray-600 mb-1">
            Connect With Us
          </h2>
          <p className="text-sm">Follow us on social media to stay updated.</p>
          <div className="flex space-x-4 mt-4 justify-center items-center">
            <a className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a className="text-gray-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a className="text-gray-400 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn size={20} />
            </a>
            <a
              className="text-gray-400 hover:text-white transition"
              href="https://github.com/sajjad244?tab=repositories"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
        <p>&copy; 2024 Crowdcube. Empowering Ideas. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
