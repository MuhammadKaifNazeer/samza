import Navbar from "./Navbar";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <Navbar />

      <h1 className="head_text">
        Transforming Content with <br className="max-md:hidden" />
        <span className="green_gradient">AI-Powered Precision</span>
      </h1>
      <h2 className="desc">
        Unlock clarity and save time as Samza&apos;s AI delivers concise,
        accurate summaries for any content, effortlessly.
      </h2>
    </header>
  );
};

export default Hero;
