import Link from 'next/Link';
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
        <svg viewBox="0 0 1440 297" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_113:59)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-1 108L23 132C47 156 95 204 143 240C191 276 239 300 287 282C335 264 383 204 431 186C479 168 527 192 575 180C623 168 671 120 719 90C767 60 815 48 863 84C911 120 959 204 1007 198C1055 192 1103 96 1151 90C1199 84 1247 168 1295 204C1343 240 1391 228 1415 222L1439 216V0H1415C1391 0 1343 0 1295 0C1247 0 1199 0 1151 0C1103 0 1055 0 1007 0C959 0 911 0 863 0C815 0 767 0 719 0C671 0 623 0 575 0C527 0 479 0 431 0C383 0 335 0 287 0C239 0 191 0 143 0C95 0 47 0 23 0H-1V108Z" fill="url(#paint0_linear_113:59)" shape-rendering="crispEdges"/>
          </g>
          <defs>
          <filter id="filter0_d_113:59" x="-5" y="0" width="1448" height="296.121" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_113:59"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_113:59" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_113:59" x1="719" y1="0" x2="719" y2="288.121" gradientUnits="userSpaceOnUse">
          <stop stop-color="#222222"/>
          <stop offset="1" stop-color="#444444" stop-opacity="0.2"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <Hero />
      <Portofolio />
    </>    
  )
}

export default Home;