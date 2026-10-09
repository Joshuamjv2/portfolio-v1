import Image from "next/image";
import logo from "../../public/images/josh-logo-done2.png";
import Link from "next/link";
import { useState } from "react";
import Projects2 from "../Projects/Projects2";
import SingleNav from "./SingleNav";
import Footer from "../Footer/Footer";
import Experience from "../Experience/Experience";

export default function Navigation() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleOnClickBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const handleClickLink = () => {
    if (burgerOpen) setBurgerOpen(false);
  };

  const resumeUrl =
    "https://drive.google.com/file/d/1KrU6ds-VLRFjQd50N8qVx64f5iBcUrL7/view?usp=sharing";

  return (
    <>
      <div>
        {/* Navigation */}
        <nav className="fixed z-10 flex w-full items-center justify-between bg-white px-4 py-4 shadow-sm sm:px-8">
          <Link href="/" className="z-10" aria-label="Home">
            <Image
              src={logo}
              alt="Joshua Muwanguzi logo"
              height={70}
              priority
              className="h-8 w-auto sm:h-12"
            />
          </Link>

          {/* Mobile navigation */}
          {burgerOpen && (
            <div className="absolute left-0 top-full w-full bg-white md:hidden">
              <ul className="flex min-h-screen flex-col items-center gap-5 border-b border-[#e6e3e3] py-24 text-center shadow-sm">
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

          {/* Desktop navigation */}
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

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={handleOnClickBurger}
            aria-label={burgerOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={burgerOpen}
            className="hamburger relative z-10 block cursor-pointer md:hidden"
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

        {/* Hero section */}
        <header className="mx-auto h-screen max-w-[1200px] px-4 sm:px-8 lg:px-16">
          <div className="flex h-full items-center">
            <div>
              <h5 className="mb-2 font-semibold text-[#6A040F] md:text-xl xl:text-2xl">
                Hello, my name is
              </h5>

              <h1 className="text-3xl font-bold uppercase text-[#264653] sm:text-5xl">
                Muwanguzi Joshua
              </h1>

              <h2 className="py-2 text-2xl font-bold text-[#3c6e71] sm:text-3xl md:text-4xl">
                I build software that solves real problems.
              </h2>

              <p className="my-4 max-w-[800px] leading-7 text-[#2b2d42]">
                I&apos;m a full-stack software developer with over five years
                of experience building web and mobile applications, backend
                systems, and software that connects with physical devices. I
                enjoy working across the stack, figuring out how things should
                work, and taking products from an idea to something people can
                actually use.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="border-2 border-[#264653] bg-[#264653] px-4 py-3 font-bold uppercase text-white transition hover:opacity-90"
                >
                  View my work
                </Link>

                <Link
                  href="#contact"
                  className="border-2 border-[#6A040F] px-4 py-3 font-bold uppercase text-[#6A040F] transition hover:shadow-md"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-16">
        {/* About section */}
        <section className="py-12" id="about">
          <h2 className="mb-4 text-3xl font-bold text-[#264653]">
            About Me
          </h2>

          <div className="xl:flex xl:justify-between">
            <div className="max-w-[800px]">
              <p className="text-[#2b2d42] xl:pr-12 md:text-base">
                I&apos;m a software developer who enjoys figuring out how
                things work and building things that make life a little easier.
                Over the past five years, I&apos;ve worked on everything from
                backend platforms and business applications to mobile apps
                that communicate with physical hardware.

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
                I&apos;ve also had the opportunity to take ownership of
                systems, make architectural decisions, and work through the
                less obvious problems that come with running software in
                production.

                <br />
                <br />

                I&apos;m comfortable learning whatever a problem requires. I
                don&apos;t expect to know every tool before I start; I care
                about understanding the problem, making sound decisions, and
                seeing the work through.

                <br />
                <br />

                Outside of software, I enjoy getting lost in a good book,
                taking pictures with my camera, and finding music that fits
                the moment. There&apos;s a lot to appreciate away from a
                screen, too.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects2 />
      </main>

      <Footer />
    </>
  );
}

