// Library imports
import { motion } from "motion/react";

// Component imports
import { SocialMedia } from "./SocialMedia";

// Icon imports
import facebookIcon from "../assets/icons/facebook.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import youtubeIcon from "../assets/icons/youtube.svg";

/**
 * Footer component
 */
const Footer = () => {
  return (
    <footer className="bg-chemtek/50 text-smoke text-sm">
      {/* Footer container */}
      <div className="container mp-default flex flex-col gap-8">
        {/* Social media and conctact flexbox */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-8 md:gap-16">
          {/* Social media container */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-bold">Socials</h2>

            {/* Social media container */}
            <div className="flex items-center gap-4">
              <SocialMedia 
                href="https://www.facebook.com/people/ChemTek/61576714856145/?mibextid=wwXIfr&rdid=lDlXFjvwIooj5kUS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15p2hnZevD%2F%3Fmibextid%3DwwXIfr"
                src={facebookIcon}
                alt="Facebook"
              />

              <SocialMedia 
                href="https://www.linkedin.com/company/chemtek-llc/"
                src={linkedinIcon}
                alt="Linkedin"
              />

              <SocialMedia 
                href="https://www.instagram.com/chemtek_services/"
                src={instagramIcon}
                alt="Instagram"
              />

              <SocialMedia 
                href="https://www.youtube.com/@ChemTek.services"
                src={youtubeIcon}
                alt="YouTube"
              />
            </div>
          </div>

          {/* Contact container */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-bold">Contacts</h2>

            {/* Contact flexbox */}
            <div className="flex flex-col items-center gap-1">
              <motion.a
                href="tel:8472507186"
                className="underline"
                whileHover={{ scale: 1.1 }}
              >
                (847) 250-7186
              </motion.a>

              <motion.a
                href="mailto:chemtekllc@gmail.com"
                className="underline"
                whileHover={{ scale: 1.1 }}
              >
                chemtekllc@gmail.com
              </motion.a>
            </div>
          </div>
        </div>

        {/* Accredation and copyright */}
        <div className="flex flex-col items-center">
          {/* Accredation to Flaticon */}
          <a href="https://www.flaticon.com/" title="Icons">
            Icons created by Freepik - Flaticon
          </a>
          <p>Copyright © 2025 Chemtek - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
