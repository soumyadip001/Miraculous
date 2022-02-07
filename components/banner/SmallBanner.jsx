export default function SmallBanner({name}) {
  const bannerSrc = name ? `/images/${name}.jpg` : `/images/adv.jpg`

  return (
    <div className="lg:w-3/4 md:w-full lg:px-8 md:px-0 cursor-pointer mt-6">
      <img src={bannerSrc} className="w-full h-auto" />
    </div>
  )
}
