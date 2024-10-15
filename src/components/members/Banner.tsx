import dynamic from 'next/dynamic';

const Office = dynamic(() => import('src/components/3D/Office'), {
  ssr: false,
});

interface BannerProps {
  name: string;
  role: string;
  shortIntro: string;
  location: string;
  status: string;
  modelUrl: string;
}

const Banner: React.FC<BannerProps> = ({
  name,
  role,
  shortIntro,
  location,
  status,
  modelUrl,
}) => {
  return (
    <section className="banner">
      <section className="banner_office">
        <Office props={{ position: [-0.5, 0.8, 1], rotation: [0, Math.PI, 0], scale: 1.1 }} modelUrl={modelUrl} />
      </section>
      <section className="banner_intro">
        <span className="banner_greeting">Hi, my name is</span>
        <h2 className="banner_name">
          {name} <span className="waving-hand">👋</span>
        </h2>
        <h3 className="banner_sologan">{role}</h3>
        <p className="banner_short-intro">{shortIntro}</p>
        <section className="banner_info">
          <section className="banner_location">
            <div className="banner_location-icon">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span>{location}</span>
          </section>
          <section className="banner_status">
            <div className="banner_status-icon">
              <span className="banner_status-icon-dot"></span>
            </div>
            <span>{status}</span>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Banner;
