import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <main className="font-sans flex min-h-screen flex-col items-center justify-between p-24 bg-custom-grey">
      <header className="w-full fixed top-0 p-4 bg-custom-navy">
  <div className="max-w-5xl mx-auto w-9/12 flex items-center justify-between">
    <h1 className="text-4xl font-bold mb-4 text-white">
      MICHAEL EARVIN TIA
    </h1>
    <nav className="lg:flex space-x-6">
      <a href="#about-me" className="mb-6 font-bold text-white hover:bg-zinc-400 hover:rounded px-2 py-1">
        About Me
      </a>
      <a href="#education" className="mb-6 font-bold text-white hover:bg-zinc-400 hover:rounded px-2 py-1">
        Education
      </a>
      <a href="#interests" className="mb-6 font-bold text-white hover:bg-zinc-400 hover:rounded px-2 py-1">
        Interests
      </a>
    </nav>
  </div>
</header>




      {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
<section id="about-me"></section>
<img src="/images/pfp.JPG" alt="Your Image" className="w-1/4 h-1/4 rounded-lg mb-12" />

      <section  className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl  lg:text-left">
        <article className="group rounded-lg text-black border border-transparent px-5 py-4 transition-colors mb-24">
          <h2 className="mb-3 text-6xl font-semibold text-black">
            About Me

          </h2>
          <p className="text-xl">
          I hold a Bachelor of Science degree from Misamis University with a focus on Information Technology. 
          I graduated in the summer of 2023, along with Joshua Vicente and Kaita Ostia, who are colleagues of mine. 
          Throughout our internship in Bluthrive, Jo Ren Lee Luna oversaw the three of us. Before we relocated to Canada to be near relatives, 
          I spent the majority of my life in Ozamiz City. Through virtual means, 
          I work with TechSavvy Code Camp to establish our presence in the digital domain and to cultivate a community in Northern Mindanao that is committed to improving IT skills.
          </p>
        </article>       
      </section>

      <section id="education"></section>
<img src="/images/education.png" alt="Your Image" className="w-1/6 h-1/6 rounded-lg mb-12" />

      <section id="education" className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl  lg:text-left">
        <article className="group rounded-lg text-black border border-transparent px-5 py-4 transition-colors mb-24">
          <h2 className="mb-3 text-6xl font-semibold text-black">
            Education

          </h2>
          <p className="text-xl">
          In 2023, I received my Bachelor of Science in Information Technology from Misamis University, where I studied a wide range of IT-related subjects. 
          I studied networking, web development, and embedded programming among other subjects throughout my academic career to acquire real-world knowledge and abilities that are necessary in the field. 
          I had the amazing chance to work as a web developer at Bluthrive, a company that helps businesses become more visible online. 
          This experience improved my grasp of digital presence tactics and sharpened my web development skills in addition to offering insight into how to showcase businesses online.
          </p>
        </article>       
      </section>

      <section id="interests"></section>
      <img src="/images/hobbies.png" alt="Your Image" className="invert-1 w-1/6 h-1/6 rounded-lg mb-12" />

      <section id="interests" className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl  lg:text-left">
        <article className="group rounded-lg text-black border border-transparent px-5 py-4 transition-colors mb-24">
          <h2 className="mb-3 text-6xl font-semibold text-black">
            Interests

          </h2>
          <p className="text-xl">
          My wide variety of interests keep me interested and inquisitive. 
          I have a special interest in researching the newest advancements in computer hardware and playing video games. 
          I now like building computers as a pleasant pastime that allows me to combine my technical expertise with practical inventiveness. 
          Aside from technology, I enjoy listening to upbeat rock music. I also enjoy watching motorsports and MMA and am captivated by the ability and intensity of these sports. I also value being active, so I set aside time to work exercise, which aids in my ability to maintain equilibrium and concentrate throughout all of my endeavors.
          </p>
        </article>       
      </section>

      <footer className="w-full max-w-5xl font-mono text-sm lg:flex">
      
      <a href="https://www.youtube.com/channel/UC3URlUNndVy5yeYgq6ZwvXA" target="_blank" rel="noopener noreferrer">
  <button
    type="button"
    className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"

  >
   <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="currentColor"
        style={{ color: "#ff0000" }}
        viewBox="0 0 24 24"
      >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>

  </button>
</a>

<a href="https://www.facebook.com/TechSavvyCodeCamp" target="_blank" rel="noopener noreferrer">
  <button
    type="button"
    className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"

  >
   <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="currentColor"
        style={{ color: "#1877f2" }}
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>

  </button>
</a>

<a href="https://www.instagram.com/harmonystr_/" target="_blank" rel="noopener noreferrer">
  <button
    type="button"
    className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"

  >
   <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="currentColor"
        style={{ color: "#c13584" }}
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>


  </button>
</a>

<a href="https://www.linkedin.com/in/michael-earvin-tia-9b65281b6/" target="_blank" rel="noopener noreferrer">
  <button
    type="button"
    className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"

  >
   <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="currentColor"
        style={{ color: "#0077b5" }}
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>


  </button>
</a>

      </footer>
    </main>
  );
}
