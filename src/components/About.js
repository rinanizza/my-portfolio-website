import React from "react";

 export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Catherine.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
             I specialize in creating dynamic and responsive web applications using the latest technologies. My expertise includes:
        <ul>
      <li>Front-end: HTML5, CSS3, JavaScript, React.js, Bootstrap, jQuery</li>
      <li>Back-end: Node.js, Express.js, SQL, MongoDB, PostgreSQL</li>
      <li>DevOps: Vercel,  Netlify, Cloudflare, Serverless Functions</li>
	  </ul>
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/16">
          <img 
            className="object-cover object-center rounded"
            alt="hero"
            src="./public/veeterzy.jpg"
			style={{
               width: '800px', // increase the width to 300px
               height: '300px', // increase the height to 300px
               }}
          />
        </div>
      </div>
    </section>
  );
}



/*const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Hello! I'm Catherine Asonye, a passionate software developer with a love for creating innovative and efficient solutions.</p>
      <p>
        I have earned backend and frontend certifications from freeCodeCamp, where I honed my skills in web development.<br/> With a strong foundation in both frontend and backend technologies, I have developed a comprehensive skill set that includes:
      </p>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>SQL</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>PostgreSQL</li>
      </ul>
      <p>
        When I'm not coding, I enjoy reading books, which help me stay creative and inspired.
      </p>
      <p>
        Feel free to reach out to me at rinanizza77@gmail.com for any inquiries or collaboration opportunities.
      </p>
    </section>
  );
};

export default About;*/

  
