import Link from 'next/Link';
import Image from 'next/image';

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__container">
            <h1 className="hero__headline">Muhammad Manshur</h1>
            <p className="hero__subheadline">I am a <strong>FrontEnd Developer</strong></p>
            <p className="hero__desc">Experienced Frontend Developer with a demonstrated history of working in the fashion brands industry. Skilled in Web Design, HTML CSS, JavaScript, React and Have a bit of experience at Web Backend Development with PHP, CodeIgniter and Laravel. Strong engineering professional with a software engineering degree from Karawang Singaperbangsa University.</p>
            <Link href=""><a className="btn btn--primary">Download Resume</a></Link>
          </div>
          <div className="hero__image">
            <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 70C0 31.3401 31.3401 0 70 0H230C268.66 0 300 31.3401 300 70V390C300 395.523 295.523 400 290 400H10C4.47716 400 0 395.523 0 390V70Z" fill="url(#paint0_linear_113:44)"/>
              <defs>
                <linearGradient id="paint0_linear_113:44" x1="150" y1="0" x2="150" y2="400" gradientUnits="userSpaceOnUse">
                <stop stop-color="#454545"/>
                <stop offset="1" stop-color="#8E8E8E" stop-opacity="0.1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="hero__skills">
            <strong>Skills :</strong>
            <span className="hero__logo">
              <img src="/images/html5.svg"/>
              <img src="/images/css3.svg"/>
              <img src="/images/javascript.svg"/>
              <img src="/images/less.svg"/>
              <img src="/images/sass.svg"/>
              <img src="/images/react-alt.svg"/>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;