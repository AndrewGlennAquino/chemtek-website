// Video imports
import heroBackground from "../assets/videos/hero-video.mp4";

/**
 * Home page component that contains video hero, summary of services,
 */
export const Home = () => {
  return (
    <>
      {/* Hero */}
      <section 
        aria-label="Hero" 
        className="w-screen h-[90vh] relative -z-10"
      >
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            src={heroBackground}
            aria-label="Person opening ice machine"
            autoPlay
            loop
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};
