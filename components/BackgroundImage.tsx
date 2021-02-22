import Image from 'next/image'

const BackgroundImage = () => {
  return <div className="fixed h-screen w-screen filter-blur overflow-hidden -z-1">
  <Image
    alt="Random background image"
    src="https://source.unsplash.com/collection/329056/2400x1345"
    layout="fill"
    objectFit="cover"
    quality={100}
    loading="eager"
  />
</div>
}

export default BackgroundImage
