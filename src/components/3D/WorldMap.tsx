import Image from 'next/image';

const WorldMap = () => {
  return (
    <Image
      src="/images/map.png"
      alt="world-map"
      width={310}
      height={310}
      className="h-full w-full rounded-lg"
    />
  );
};

export default WorldMap;
