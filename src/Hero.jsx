const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen bg-[url(./assets/poster.jpeg)]"
       
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">नमस्ते भारत</h1>
            <p className="mb-5">
              Our ideology: Cultural Nationalism and Social Justice.<br/> Our mission: To unite Hindus and promote their welfare. Join us in building a stronger, more inclusive India.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
