import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../public/images/josh-logo-done2.png";
import SingleNav from "./SingleNav";
import Footer from "../Footer/Footer";
import Experience from "../Experience/Experience";
import Projects2 from "../Projects/Projects2";

export default function Navigation() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleOnClickBurger = () => {
    setBurgerOpen((open) => !open);
  };

  const handleClickLink = () => {
    setBurgerOpen(false);
  };

  const resumeUrl =
    "https://drive.google.com/file/d/1KrU6ds-VLRFjQd50N8qVx64f5iBcUrL7/view?usp=sharing";

  return (
    <>
      <div>
        <nav className="fixed left-0 top-0 z-50 flex min-h-16 w-full items-center justify-between bg-white px-4 py-3 shadow-sm sm:px-8 sm:py-4">
          <Link href="/" className="z-10 shrink-0" aria-label="Home">
            <Image
              src={logo}
              alt="Joshua Muwanguzi logo"
              height={70}
              priority
              className="h-8 w-auto sm:h-12"
            />
          </Link>

          {burgerOpen && (
            <div className="absolute left-0 top-full max-h-[calc(100dvh-4rem)] w-full overflow-y-auto bg-white md:hidden">
              <ul className="flex min-h-[calc(100dvh-4rem)] flex-col items-center gap-5 border-b border-[#e6e3e3] px-4 py-12 text-center shadow-sm">
                <SingleNav
                  title="About"
                  address="#about"
                  handleClick={handleClickLink}
                />
                <SingleNav
                  title="Experience"
                  address="#experience"
                  handleClick={handleClickLink}
                />
                <SingleNav
                  title="Projects"
                  address="#projects"
                  handleClick={handleClickLink}
                />
                <SingleNav
                  title="Contact"
                  address="#contact"
                  handleClick={handleClickLink}
                />

                <li>
                  <Link
                    onClick={handleClickLink}
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-[#6A040F] p-2 text-sm font-bold text-[#6A040F] transition-all duration-300 hover:shadow-md sm:px-24"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <ul className="hidden items-center gap-6 font-medium text-[#3c6e71] md:flex xl:gap-12">
            <SingleNav title="About" address="#about" />
            <SingleNav title="Experience" address="#experience" />
            <SingleNav title="Projects" address="#projects" />
            <SingleNav title="Contact" address="#contact" />

            <li>
              <Link
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#6A040F] p-2 text-sm font-bold uppercase text-[#6A040F] transition-all duration-300 hover:shadow-md"
              >
                Resume
              </Link>
            </li>
          </ul>

          <button
            type="button"
            onClick={handleOnClickBurger}
            aria-label={
              burgerOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={burgerOpen}
            className="hamburger relative z-10 block shrink-0 cursor-pointer md:hidden"
          >
            <span
              className="bar"
              style={{
                transform: burgerOpen
                  ? "rotate(45deg) translate(12px)"
                  : "",
              }}
            />
            <span
              className="bar"
              style={{
                opacity: burgerOpen ? 0 : 1,
                transition: "opacity 40ms",
              }}
            />
            <span
              className="bar"
              style={{
                transform: burgerOpen
                  ? "rotate(-45deg) translate(12px)"
                  : "",
              }}
            />
          </button>
        </nav>

        <header className="mx-auto flex min-h-[100svh] max-w-[1200px] items-center px-4 pb-10 pt-24 sm:px-8 sm:py-24 lg:px-16">
          <div className="w-full">
            <h5 className="mb-2 text-sm font-semibold text-[#6A040F] sm:text-xl xl:text-2xl">
              Hello, my name is
            </h5>

            <h1 className="text-2xl font-bold uppercase leading-tight text-[#264653] min-[375px]:text-3xl sm:text-5xl">
              Muwanguzi Joshua
            </h1>

            <h2 className="py-2 text-xl font-bold leading-snug text-[#3c6e71] min-[375px]:text-2xl sm:text-3xl md:text-4xl">
              I build software that solves real problems.
            </h2>

            <p className="my-3 max-w-[800px] text-sm leading-6 text-[#2b2d42] sm:my-4 sm:text-base sm:leading-7">
              I&apos;m a full-stack software developer with over five years of
              experience building web and mobile applications, backend systems,
              and software that connects with physical devices. I enjoy working
              across the stack, figuring out how things should work, and taking
              products from an idea to something people can actually use.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 sm:mt-6 sm:gap-4">
              <Link
                href="#projects"
                className="border-2 border-[#264653] bg-[#264653] px-3 py-2 text-sm font-bold uppercase text-white transition hover:opacity-90 sm:px-4 sm:py-3 sm:text-base"
              >
                View my work
              </Link>

              <Link
                href="#contact"
                className="border-2 border-[#6A040F] px-3 py-2 text-sm font-bold uppercase text-[#6A040F] transition hover:shadow-md sm:px-4 sm:py-3 sm:text-base"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </header>
      </div>

      <main className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-16 hidden">
        <section className="scroll-mt-20 py-8 sm:py-12" id="about">
          <h2 className="mb-4 text-3xl font-bold text-[#264653]">
            About Me
          </h2>

          <div className="xl:flex xl:justify-between">
            <div className="max-w-[800px]">
              <p className="text-sm leading-7 text-[#2b2d42] sm:text-base xl:pr-12">
                I&apos;m a software developer who enjoys figuring out how
                things work and building things that make life a little easier.
                Over the past five years, I&apos;ve worked on everything from
                backend platforms and business applications to mobile apps that
                communicate with physical hardware.
                <br />
                <br />
                I currently work at{" "}
                <a
                  href="https://www.seere.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#6A040F] hover:underline"
                >
                  Seere SRL
                </a>
                , where I build software around hardware integrations and
                connected systems. My work spans frontend and backend
                development, databases, third-party services, and deployment.
                I&apos;ve also had the opportunity to take ownership of systems,
                make architectural decisions, and work through the less obvious
                problems that come with running software in production.
                <br />
                <br />
                I&apos;m comfortable learning whatever a problem requires. I
                don&apos;t expect to know every tool before I start; I care
                about understanding the problem, making sound decisions, and
                seeing the work through.
                <br />
                <br />
                Outside of software, I enjoy getting lost in a good book,
                taking pictures with my camera, and finding music that fits the
                moment. There&apos;s a lot to appreciate away from a screen,
                too.
              </p>
            </div>
          </div>
        </section>

        <div className="scroll-mt-20" id="experience">
          <Experience />
        </div>

        <div className="scroll-mt-20">
          <Projects2 />
        </div>
      </main>

      <div className="scroll-mt-20" id="contact">
        <Footer />
      </div>
    </>
  );
}
