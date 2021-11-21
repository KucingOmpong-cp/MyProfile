import Link from 'next/link';
import Image from 'next/image';

function Portofolio() {
  return (
    <>
      <div className="porto">
        <div className="container">
          <h2 className="title">Portofolio</h2>
          <div className="card align-right">
            <Link href="https://manshur-travel-template.netlify.app/">
              <a className="card__image">
                <Image src="/images/portofolio/Slice.jpg" alt="Porto Image 1" layout="responsive" objectFit="cover" width={16} height={9} />
              </a>
            </Link>
            <div className="card__title">
              HTML CSS Template
            </div>
            <div className="card__desc">
              UI/UX Design Freebies by <Link href="https://www.arshakir.com/project/travel-agency-landing-page-freebie"><a>AR Shakir</a></Link> and I translation degin to HTML CSS code with minor modification and add responsive.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;