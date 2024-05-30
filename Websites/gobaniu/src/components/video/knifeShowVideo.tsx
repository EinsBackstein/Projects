export const Video = () => {
  return (
    <video autoPlay muted loop className="order-first lg:order-none rounded-lg" height={400} width={400}>
      <source src="/assets/knifeshownooutro.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  )
}

export default Video;
