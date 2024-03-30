import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className='footer text-center'>
      <div className='footer-flex'>
        <a className='logo' href={void 0}>
          Sarvesh<span></span>
        </a>
        <div className='copyright'>
          <p>
            All Right Reserved &copy; 2023 - {currentYear} &nbsp;
            <a href={void 0} target='_blank' className='cursor-pointer'>
              Sarvesh
            </a>
          </p>
        </div>
        <ul className='footer-social-icons list-unstyled'>
          <li>
            <a
              href='https://www.facebook.com/sarvesh.patel.750546'
              target='_blank'>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/sarvesh.patel.750546'
              target='_blank'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href='https://github.com/sarveshsataye36' target='_blank'>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
