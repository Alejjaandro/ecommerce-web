import './styles/Footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from 'next/link';

export default function Footer() {
  
  return (
    <div className='foot-container'>

      {/* RIGHT */}
      <div className='company-info'>

        <h2>Company Name &copy;</h2>
        <div className='foot-icons-cont'>
          <div className="icon-facebook"><FacebookIcon /></div>
          <div className="icon-twitter"><TwitterIcon /></div>
          <div className="icon-insta"><InstagramIcon /></div>
        </div>

      </div>

      {/* CENTER */}
      <div className="useful-links">

        <h2>Useful Links</h2>

        <div className='links'>
          <Link href='/'> - Home</Link>
          <Link href='/aboutUs'> - About Us</Link>
          <Link href='/contact'> - Contact</Link>
          <Link href='/login'> - My Account</Link>
        </div>
      </div>

      {/* LEFT */}
      <div className="contact">
        <h2>Contact</h2>
        <p><RoomIcon /> C/ example, 23</p>
        <p><LocalPhoneIcon />+34 914 827 549</p>
        <p><AlternateEmailIcon /> example@example.com</p>

      </div>

    </div>

  )
}