import Link from 'next/Link';

function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__brand">Muhammad Manshur</div>
        <div className="burger">
          <div className="burger__items"></div>
        </div>
        <ul className="navbar__nav">
          <li className="navbar__item">
            <Link href="/"><a className="navbar__link">Home</a></Link>
          </li>
          <li className="navbar__item">
            <Link href="/"><a className="navbar__link">Portofolio</a></Link>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <div className="container">
          <div className="hero__container">
            <h1 className="hero__headline">Muhammad Manshur</h1>
            <p className="hero__subheadline">I am a <strong>FrontEnd Developer</strong></p>
            <p className="hero__desc">Experienced Frontend Developer with a demonstrated history of working in the fashion brands industry. Skilled in Web Design, HTML CSS, JavaScript, React and Have a bit of experience at Web Backend Development with PHP, CodeIgniter and Laravel. Strong engineering professional with a software engineering degree from Karawang Singaperbangsa University.</p>
          </div>
          <div className="hero__image"></div>
        </div>
      </div>
    </>    
  )
}

export default Home;