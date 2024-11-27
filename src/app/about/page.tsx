import Image from "next/image";
import React from "react";
import "@/styles/about.css";
const About: React.FC = () => {
  return (
    <section>
      <div className="container">
        <h1>
          About <span>Me</span>
        </h1>
        <div className="grid">
          <Image
            src="/images/about.jpg"
            alt="About Section Image"
            width={500}
            height={500}
            className="image"
          />
          <div className="text-container">
            <div className="text-block">
              <div className="text-content">
                <p>
                  My name is Syeda Farheen Zehra, and I am a dedicated front-end
                  web developer with expertise in TypeScript, JavaScript, HTML,
                  CSS, Tailwind CSS, Next.js, and Node.js. Alongside web
                  development, I also have a strong background in graphic
                  design. <br />{" "}
                </p>
              </div>
            </div>

            <div className="text-block">
              <div className="text-content">
                <p>
                  I completed my Matriculation from Govt. Girls High School,
                  Mirpurkhas in 1996-1997 with an &quot;A&quot; grade (76%). I pursued
                  Intermediate in Pre-Medical from Govt. Ibne Rushd College,
                  Mirpurkhas in 1998-1999. I graduated from the University of
                  Sindh, Jamshoro in 2000-2003 and completed my B.Ed from the
                  same university in 2004-2005.
                  <br />
                </p>
              </div>
            </div>

            <div className="text-block">
              <div className="text-content">
                <p>
                  I’m passionate about personal growth
                  and equally dedicated to helping others learn and succeed
                  alongside me. My mission is to innovate, inspire, and make a
                  lasting impact through collaboration and shared knowledge.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
