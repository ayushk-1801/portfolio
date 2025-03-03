import Image from "next/image";
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDrizzle,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiRust,
  SiDocker,
  SiSupabase,
  SiRazorpay,
  SiPostman,
  SiPython,
  SiScikitlearn,
  SiCplusplus,
  SiCloudflare,
  SiDart,
  SiFlutter,
  SiTurborepo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoElectron, IoShield } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import Skill from "@/components/skills";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div>
      <div className="w-full justify-center text-xl">
        <div className="items-center justify-center sm:h-screen sm:mb-0 mb-36">
          <div className="w-full justify-center flex mt-32">
            {/* <Image
						src="/me.jpeg"
						alt="Ayush Kumar Anand"
						width={300}
						height={300}
						className="rounded-full"
					/> */}
          </div>
          <div className="justify-center w-full flex tracking-[0.4em] pt-4 lg:text-2xl md:text-xl sm:text-lg text-sm">
            AYUSH KUMAR ANAND
          </div>
          <div className="flex flex-col justify-center lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold capitalize text-stone-500 dark:text-stone-400 w-full items-center mt-5">
            <div>CRAFTING</div>
            <div>SOLUTIONS THAT</div>
            <div>BLEND</div>
            <div className="text-orange-600">INNOVATION,</div>
            <div>EFFICIENCY, AND</div>
            <div>SIMPLICITY.</div>
          </div>
        </div>

        <div id="about">
          <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
            ABOUT ME
          </div>
          <div className="flex items-center mt-6">
            <div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold text-stone-500 dark:text-stone-400 leading-10">
              I&apos;m a dedicated
              <span className="text-orange-600">
                {" "}
                full stack web developer{" "}
              </span>
              with a focus on building efficient, scalable, and impactful web
              applications. I am currently pursuing B.Tech at IIIT Delhi.
              Alongside my studies, I work on projects that challenge me to
              learn, innovate, and grow as a developer.{" "}
            </div>
          </div>
        </div>

        <div id="achievements">
          <div className="sm:my-40 my-20">
            <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
              EXPERIENCE
            </div>
            <div className="text-stone-500 dark:text-stone-400">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-medium">
                    <div className="flex lg:gap-36 md:gap-28 sm:gap-16 gap-8 w-full">
                      <div>Audient</div>
                      <div>Web Developer Lead</div>
                      <div>Jan 2025 - Present</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            Designed and developed a feature-rich event booking
                            platform catering to comedy, poetry, and music
                            shows, both online and offline, enhancing audience
                            engagement and accessibility.
                          </li>
                          <li>
                            Led the end-to-end development of the platform using{" "}
                            <strong className="dark:text-white text-black">
                              Next.js
                            </strong>
                            ,{" "}
                            <strong className="dark:text-white text-black">
                              TypeScript
                            </strong>{" "}
                            and{" "}
                            <strong className="dark:text-white text-black">
                              Supabase
                            </strong>
                            , ensuring a seamless user experience, high
                            performance, and scalability.
                          </li>
                          <li>
                            Built a comprehensive admin dashboard for event
                            organizers, enabling effortless event creation,
                            dynamic ticket pricing, attendee management, and
                            revenue tracking.
                          </li>
                          <li>
                            Implemented performance optimizations, boosting page
                            speed by 40% and improving SEO rankings for greater
                            discoverability.
                          </li>
                          <li>
                            Integrated{" "}
                            <strong className="dark:text-white text-black">
                              Razorpay
                            </strong>{" "}
                            for secure and efficient payment processing,
                            streamlining the ticketing experience for users.
                          </li>
                        </ul>
                      </div>
                      <div className="justify-center items-center w-full h-full flex sm:justify-end">
                        <Image
                          src="/logo-dark.svg"
                          alt="Redact"
                          className="mr-4 mt-4"
                          width={200}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div id="achievements">
          <div className="sm:my-40 my-20">
            <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
              ACHIEVEMENTS
            </div>
            <div className="text-stone-500 dark:text-stone-400">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium">
                    <div className="flex lg:gap-36 md:gap-28 sm:gap-16 gap-8 w-full">
                      <div>2024</div>
                      <div>Smart India Hackathon Finalist</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            Qualified as a finalist in{" "}
                            <strong className="dark:text-white text-black">
                              Smart India Hackathon 2024
                            </strong>
                            , the world&apos;s largest open innovation platform where
                            students solve real-world problems.
                          </li>
                          <li>
                            Led a team of 6 to develop{" "}
                            <strong className="dark:text-white text-black">
                              RE-DACT
                            </strong>
                            , an innovative document redaction tool for
                            protecting sensitive information.
                          </li>
                          <li>
                            Competed against{" "}
                            <strong className="dark:text-white text-black">
                              100+ teams
                            </strong>{" "}
                            from across India, showcasing problem-solving
                            abilities and technical expertise in developing
                            scalable solutions.
                          </li>
                          <li>
                            Utilized technologies like{" "}
                            <strong className="dark:text-white text-black">
                              Next.js
                            </strong>
                            ,{" "}
                            <strong className="dark:text-white text-black">
                              TypeScript
                            </strong>
                            , and{" "}
                            <strong className="dark:text-white text-black">
                              Deep Learning
                            </strong>{" "}
                            to create an efficient and user-friendly solution.
                          </li>
                        </ul>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end">
                        <Image
                          src="/sih.jpeg"
                          alt="Redact"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div id="skills">
          <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
            SKILLS
          </div>
          <div className="mt-6 lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold text-stone-500 dark:text-stone-400 leading-none grid gap-16 md:grid-cols-6 sm:grid-cols-4 grid-cols-3">
            <Skill Icon={SiJavascript} name="JavaScript" />
            <Skill Icon={SiTypescript} name="TypeScript" />
            <Skill Icon={SiReact} name="React" />
            <Skill Icon={SiNextdotjs} name="Nextjs" />
            <Skill Icon={SiTurborepo} name="Turborepo" />
            <Skill Icon={SiNodedotjs} name="Nodejs" />
            <Skill Icon={SiExpress} name="Express" />
            <Skill Icon={SiMongodb} name="MongoDB" />
            <Skill Icon={SiPostgresql} name="PostgreSQL" />
            <Skill Icon={SiDrizzle} name="Drizzle" />
            <Skill Icon={SiPrisma} name="Prisma" />
            <Skill Icon={SiTailwindcss} name="TailwindCSS" />
            <Skill Icon={SiDocker} name="Docker" />
            <Skill Icon={SiSupabase} name="Supabase" />
            <Skill Icon={SiRazorpay} name="Razorpay" />
            <Skill Icon={SiPostman} name="Postman" />
            <Skill Icon={SiGit} name="Git" />
            <Skill Icon={SiGithub} name="GitHub" />
            <Skill Icon={IoLogoElectron} name="Electron" />
            <Skill Icon={SiRust} name="Rust" />
            <Skill Icon={SiCplusplus} name="C++" />
            <Skill Icon={FaJava} name="Java" />
            <Skill Icon={SiPython} name="Python" />
            <Skill Icon={SiScikitlearn} name="Scikit-Learn" />
          </div>
        </div>

        <div id="projects">
          <div className="sm:my-40 my-20">
            <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
              PROJECTS
            </div>
            <div className="text-stone-500 dark:text-stone-400">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold">
                    REDACT
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            Developed{" "}
                            <strong className="dark:text-white text-black">
                              RE-DACT
                            </strong>
                            , an innovative online tool for automated document
                            redaction and sensitive information protection.
                          </li>
                          <li>
                            Implemented intelligent detection algorithms to
                            identify sensitive data including{" "}
                            <strong className="dark:text-white text-black">
                              names, addresses, and phone numbers
                            </strong>{" "}
                            in uploaded documents.
                          </li>
                          <li>
                            Built a user-friendly interface for document upload,
                            text input, and automated redaction with easy
                            download functionality.
                          </li>
                          <li>
                            Created a secure solution for document sharing that
                            ensures privacy compliance and protects sensitive
                            information.
                          </li>
                        </ul>
                        <div className="my-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://github.com/ayushk-1801/redact"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Badge>
                            <SiTypescript
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TypeScript
                          </Badge>
                          <Badge>
                            <SiNextdotjs
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Nextjs
                          </Badge>
                          <Badge>
                            <SiTailwindcss
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TailwindCSS
                          </Badge>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end mt-2">
                        <Image
                          src="/redact.png"
                          alt="Redact"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold">
                    UNIVERSE
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <div>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>
                              A platform bridging the gap between{" "}
                              <strong className="dark:text-white text-black">
                                professors
                              </strong>{" "}
                              offering research internships and{" "}
                              <strong className="dark:text-white text-black">
                                students
                              </strong>{" "}
                              seeking academic opportunities.
                            </li>
                            <li>
                              Professors can post available research roles,
                              while students can browse, apply, and connect with
                              academic mentors.
                            </li>
                            <li>
                              Features a streamlined{" "}
                              <strong className="dark:text-white text-black">
                                application process
                              </strong>
                              , making it efficient and user-friendly.
                            </li>
                            <li>
                              Fosters collaboration and innovation in research
                              by connecting opportunities with talent.
                            </li>
                            <li>
                              Supports the growth of students&apos; academic careers
                              and contributes to research advancement.
                            </li>
                          </ul>
                        </div>
                        <div className="my-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://github.com/ayushk-1801/universe"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Badge>
                            <SiTypescript
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TypeScript
                          </Badge>
                          <Badge>
                            <SiNextdotjs
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Nextjs
                          </Badge>
                          <Badge>
                            <SiPostgresql
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            PostgresSQL
                          </Badge>
                          <Badge>
                            <SiPrisma
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Prisma
                          </Badge>
                          <Badge>
                            <IoShield
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            NextAuth
                          </Badge>
                          <Badge>
                            <SiTailwindcss
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TailwindCSS
                          </Badge>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end mt-2">
                        <Image
                          src="/universe.png"
                          alt="Universe"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold">
                    MEDIUM CLONE
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <div>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>
                              Built a{" "}
                              <strong className="dark:text-white text-black">
                                full-featured blogging platform
                              </strong>{" "}
                              inspired by Medium.
                            </li>
                            <li>
                              Writers can publish articles on various topics,
                              from technology to personal experiences.
                            </li>
                            <li>
                              Implemented a{" "}
                              <strong className="dark:text-white text-black">
                                clean and minimalist interface
                              </strong>{" "}
                              for easy content creation and reading.
                            </li>
                            <li>
                              Platform focuses on delivering high-quality,
                              long-form content.
                            </li>
                            <li>
                              Made content creation accessible for both amateur
                              and professional writers.
                            </li>
                          </ul>
                        </div>
                        <div className="my-4 flex gap-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://github.com/ayushk-1801/medium"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </Button>
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://medium-ten-rho.vercel.app/signup"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live
                            </a>
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Badge>
                            <SiTypescript
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TypeScript
                          </Badge>
                          <Badge>
                            <SiReact
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            React
                          </Badge>
                          <Badge>
                            <SiPostgresql
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            PostgresSQL
                          </Badge>
                          <Badge>
                            <SiPrisma
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Prisma
                          </Badge>
                          <Badge>
                            <SiCloudflare
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Cloudflare Hono
                          </Badge>
                          <Badge>
                            <SiTailwindcss
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            TailwindCSS
                          </Badge>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end mt-2">
                        <Image
                          src="/medium.png"
                          alt="Medium"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold">
                    CROP BUDDY
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="sm:flex sm:flex-row justify-between items-start">
                      <div className="w-full max-w-[800px] justify-start">
                        <div>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>
                              Developed an app to help farmers identify and
                              manage crop diseases through intuitive disease
                              detection.
                            </li>
                            <li>
                              Implemented{" "}
                              <strong className="dark:text-white text-black">
                                image analysis algorithms
                              </strong>{" "}
                              to detect diseases from crop photos.
                            </li>
                            <li>
                              Provides comprehensive treatment options and
                              prevention methods for identified diseases.
                            </li>
                            <li>
                              Created a user-friendly interface for easy disease
                              identification and management.
                            </li>
                            <li>
                              Empowers farmers with real-time solutions to
                              improve crop health and productivity.
                            </li>
                          </ul>
                        </div>
                        <div className="my-4">
                          <Button className="hover:bg-orange-600" asChild>
                            <a
                              href="https://github.com/ayushk-1801/Crop-Disease-Detection"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Badge>
                            <SiDart
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Dart
                          </Badge>
                          <Badge>
                            <SiFlutter
                              className="-ms-0.5 opacity-60"
                              size={12}
                              aria-hidden="true"
                            />
                            Flutter
                          </Badge>
                        </div>
                      </div>
                      <div className="justify-center items-center w-full flex sm:justify-end mt-2">
                        <Image
                          src="/redact.png"
                          alt="Redact"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div id="contact">
          <div className="sm:my-40 my-20">
            <div className="tracking-[0.4em] lg:text-2xl md:text-xl sm:text-lg text-sm">
              CONTACT
            </div>
            <div className="text-stone-500 dark:text-stone-400">
              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="mailto:ayushkumar.swe@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  EMAIL
                  <MdOutlineArrowOutward className="ml-4" />
                </a>
                <a
                  href="https://x.com/ayushk1801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  X.COM
                  <MdOutlineArrowOutward className="ml-4" />
                </a>
                <a
                  href="https://github.com/ayushk-1801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  GITHUB
                  <MdOutlineArrowOutward className="ml-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-kumar-anand/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  LINKEDIN
                  <MdOutlineArrowOutward className="ml-4" />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl tracking-[0.2em] font-semibold flex items-center hover:text-orange-600"
                >
                  RESUME
                  <MdOutlineArrowOutward className="ml-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
