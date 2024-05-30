export const Video = () => {
  return (
    <video autoPlay muted loop className="object-cover w-screen h-screen absolute -z-50 top-0 left-0">
      <source src="/assets/piwo.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  )
}

export default Video;
