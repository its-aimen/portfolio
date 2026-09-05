const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-24 mb-30 px-4">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-foreground font-bold text-4xl mt-5 mb-5">
          About{" "}
          <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-200 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="w-full max-w-3xl mb-13 text-lg text-muted-foreground leading-relaxed">
          I'm Aimen, a Computer Science student who loves building. I enjoy
          turning ideas into clean, responsive, and interactive web
          experiences. I'm currently focused on strengthening my skills in
          React, JavaScript, and modern web development while building
          projects that challenge me to learn and grow.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
