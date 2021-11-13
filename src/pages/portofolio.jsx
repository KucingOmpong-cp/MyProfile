import Link from 'next/Link';
import Image from 'next/image';

function Portofolio() {
  return (
    <>
      <div className="porto">
        <div className="container">
          <h2 className="title">Portofolio</h2>
          <div className="card">
            <Link href="https://manshur-travel-template.netlify.app/">
              <a className="card__image">
                <Image src="/images/portofolio/Slice.jpg" layout="responsive" objectFit="cover" width={6} height={4} />
              </a>
            </Link>
            <div className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium ipsa iure, quasi cumque laboriosam. Soluta, eligendi. Veritatis consequatur voluptas velit pariatur soluta quis nesciunt qui quam. Unde, autem fuga!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;