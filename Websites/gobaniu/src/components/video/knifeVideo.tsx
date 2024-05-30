export const Video = () => {
  return (
    <video autoPlay muted loop className="object-cover w-screen h-screen absolute -z-50 top-0 left-0">
      <source src="/assets/loop.mov" type="video/mov"/>
      Your browser does not support the video tag.
    </video>
  )
}

export default Video;
