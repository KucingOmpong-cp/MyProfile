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
            <div className="hero__image-decor">
              <Image src="/images/back-photo.svg" alt="Decor Top" layout="responsive" objectFit="cover" width="300" height="400" />
            </div>
          </div>
          <div className="hero__skills">
            <strong>Skills :</strong>
            <span className="hero__logo">
              <Link href="https://html.spec.whatwg.org/multipage/">
                <a className="hero__logo-items">
                  <Image src="/images/html5.svg" alt="HTML" layout="responsive" objectFit="cover" width="44" height="44" />
                </a>
              </Link>
              <Link href="https://www.w3.org/TR/CSS/#css">
                <a className="hero__logo-items">
                  <Image src="/images/css3.svg" alt="CSS" layout="responsive" objectFit="cover" width="44" height="44" />
                </a>
              </Link>
              <Link href="https://www.javascript.com/">
                <a className="hero__logo-items">
                  <Image src="/images/javascript.svg" alt="Javascript" layout="responsive" objectFit="cover" width="44" height="44" />
                </a>
              </Link>
              <Link href="https://lesscss.org/">
                <a className="hero__logo-items">
                  <Image src="/images/less.svg" alt="Less" layout="responsive" objectFit="cover" width="98.19" height="44" />
                </a>
              </Link>
              <Link href="https://sass-lang.com/">
                <a className="hero__logo-items">
                  <Image src="/images/sass.svg" alt="Sass" layout="responsive" objectFit="cover" width="44" height="44" />
                </a>
              </Link>
              <Link href="https://reactjs.org/">
                <a className="hero__logo-items">
                  <Image src="/images/react-alt.svg" alt="React" layout="responsive" objectFit="cover" width="44" height="44" />
                </a>
              </Link>
              <Link href="https://git-scm.com/">
                <a className="hero__logo-items">
                  <Image src="/images/git.svg" alt="Git" layout="responsive" objectFit="cover" width="44" height="44" />
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;