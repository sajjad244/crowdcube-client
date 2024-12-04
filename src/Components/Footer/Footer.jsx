import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto flex justify-around gap-8">
        {/*  */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">About Crowdcube</h2>
          <p className="text-sm ">
            Crowdcube is a platform where dreams turn into reality. <br /> Join
            us to support innovative ideas, creative projects, and impactful
            campaigns.
          </p>
        </div>

        {/*  */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-sm">Follow us on social media to stay updated.</p>
          <div className="flex space-x-4 mt-4">
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
