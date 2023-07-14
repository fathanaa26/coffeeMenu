export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://placekitten.com/g/2600/1204)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="min-w-sm">
            <h1 className="mb-5 text-5xl text-white">Hello World </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
