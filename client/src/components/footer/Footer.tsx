import facebookIcon from "../../assets/icons/facebook.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-chemtek/90 text-night text-sm">
      {/* Footer container */}
      <div className="container mp-default flex flex-col gap-4">
        {/* Social media container */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold flex">Socials</h2>

          <div className="flex gap-4">
            {/* Facebook link */}
            <a
              href="https://www.facebook.com/641706522363028"
              target="_blank"
              className="social-media-link"
            >
              <img
                src={facebookIcon}
                alt="Facebook logo"
                className="w-full h-full"
              />
            </a>

            {/* LinkedIn link */}
            <a className="social-media-link">
              <img
                src={linkedinIcon}
                alt="LinkedIn logo"
                className="w-full h-full"
              />
            </a>
          </div>
        </div>

        <a href="https://www.flaticon.com/" title="Icons">
          Icons created by Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
