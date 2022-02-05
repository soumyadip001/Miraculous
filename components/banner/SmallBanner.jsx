export default function SmallBanner({name}) {
  const bannerSrc = name ? `/images/${name}.jpg` : `/images/adv.jpg`

  return (
    <div className="w-3/4 px-8 cursor-pointer mt-6">
      <img src={bannerSrc} className="w-full h-auto" />
    </div>
  )
}
