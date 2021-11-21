import Link from 'next/link';
import Image from 'next/image';
import Hero from './hero';
import Portofolio from './portofolio';

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
      <div className="decor">
        <Image src="/images/Decor-Top.svg" alt="Decor Top" layout="responsive" objectFit="cover" width="900" height="200" />
      </div>
      <Hero />
      <Portofolio />
    </>    
  )
}

export default Home;