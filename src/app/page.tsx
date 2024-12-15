import Image from "next/image";
import {
	SiGit,
	SiGithub,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiRust,
	SiDocker,
	SiPython,
	SiCplusplus,
} from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import Skill from "@/components/skills";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<div className="w-full justify-center text-xl">
			<div className="items-center justify-center h-screen">
				<div className="w-full justify-center flex mt-32">
					{/* <Image
						src="/me.jpeg"
						alt="Ayush Kumar Anand"
						width={300}
						height={300}
						className="rounded-full"
					/> */}
				</div>
				<div className="justify-center w-full flex tracking-[0.4em] pt-4">
					AYUSH KUMAR ANAND
				</div>
				<div className="flex flex-col justify-center text-7xl font-semibold capitalize text-stone-500 dark:text-stone-400 w-full items-center mt-5">
					<div>CRAFTING</div>
					<div>SOLUTIONS THAT</div>
					<div>BLEND</div>
					<div className="text-orange-600">INNOVATION,</div>
					<div>EFFICIENCY, AND</div>
					<div>SIMPLICITY.</div>
				</div>
			</div>

			<div id="about">
				<div className="tracking-[0.4em]">ABOUT ME</div>
				<div className="flex items-center">
					<div className="text-6xl font-semibold text-stone-500 dark:text-stone-400 leading-none">
						I'm a dedicated
						<span className="text-orange-600"> full stack web developer </span>
						with a focus on building efficient, scalable, and impactful web
						applications. I am currently pursuing a B.Tech degree at IIIT Delhi.
						Alongside my studies, I actively work on projects that push me to
						learn, innovate, and grow as a developer.
					</div>
				</div>
			</div>

			<div id="skills">
				<div className="tracking-[0.4em] mt-40">SKILLS</div>
				<div className="mt-6 text-6xl font-semibold text-stone-500 dark:text-stone-400 leading-none grid grid-cols-6 gap-16">
					<Skill Icon={SiJavascript} name="JavaScript" />
					<Skill Icon={SiTypescript} name="TypeScript" />
					<Skill Icon={SiReact} name="React" />
					<Skill Icon={SiNextdotjs} name="Next.js" />
					<Skill Icon={SiNodedotjs} name="Node.js" />
					<Skill Icon={SiMongodb} name="MongoDB" />
					<Skill Icon={SiPostgresql} name="PostgreSQL" />
					<Skill Icon={SiPrisma} name="Prisma" />
					<Skill Icon={SiTailwindcss} name="TailwindCSS" />
					<Skill Icon={SiDocker} name="Docker" />
					<Skill Icon={SiGit} name="Git" />
					<Skill Icon={SiGithub} name="GitHub" />
					<Skill Icon={IoLogoElectron} name="Electron" />
					<Skill Icon={SiRust} name="Rust" />
					<Skill Icon={SiPython} name="Python" />
					<Skill Icon={SiCplusplus} name="C++" />
				</div>
			</div>

			<div id="projects">
				<div className="my-40">
					<div className="tracking-[0.4em]">PROJECTS</div>
					<div className="text-stone-500 dark:text-stone-400">
						<Accordion type="multiple">
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-6xl tracking-[0.2em] font-semibold">
									REDACT
								</AccordionTrigger>
								<AccordionContent>
									<div className="flex flex-row justify-between items-center">
										<div className="w-full max-w-[800px] justify-start">
											<div>
												RE-DACT is an online tool that helps users redact
												personal and sensitive information from text or
												documents. By uploading files or pasting text, RE-DACT
												automatically detects sensitive data such as names,
												addresses, and phone numbers. Users can then easily
												redact this information before downloading the edited
												document, ensuring privacy and security. It’s a simple
												solution for safely sharing documents without exposing
												sensitive details.
											</div>
											<div className="mt-4">
												<Button asChild>
													<a
														href="https://github.com/ayushk-1801/redact"
														target="_blank"
														rel="noopener noreferrer"
													>
														Github
													</a>
												</Button>
											</div>
										</div>
										<div className="justify-end">
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
								<AccordionTrigger className="text-6xl tracking-[0.2em] font-semibold">
									UNIVERSE
								</AccordionTrigger>
								<AccordionContent>
									<div className="flex flex-row justify-between items-center">
										<div className="w-full max-w-[800px] justify-start">
											<div>
												Universe is an online platform that bridges the gap
												between professors offering research internships and
												projects and students seeking opportunities to enhance
												their academic experience. Professors can post available
												research roles, while students can easily browse, apply,
												and connect with academic mentors. The platform
												streamlines the application process, making it efficient
												and user-friendly, while also fostering collaboration
												and innovation in research. By bringing together
												opportunities and talent, Universe aims to support the
												growth of students' academic careers and contribute to
												the advancement of research across various fields.
											</div>
											<div className="mt-4">
												<Button asChild>
													<a
														href="https://github.com/ayushk-1801/universe"
														target="_blank"
														rel="noopener noreferrer"
													>
														Github
													</a>
												</Button>
											</div>
										</div>
										<div className="justify-end">
											<Image
												src="/universe.png"
												alt="Redact"
												width={300}
												height={300}
											/>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger className="text-6xl tracking-[0.2em] font-semibold">
									MEDIUM
								</AccordionTrigger>
								<AccordionContent>
									<div className="flex flex-row justify-between items-center">
										<div className="w-full max-w-[800px] justify-start">
											<div>
												Medium is a blogging platform where writers can publish
												articles on various topics, from technology to personal
												experiences. It provides a clean and minimalist
												interface for easy content creation and reading. The
												platform focuses on delivering high-quality, long-form
												content, making it accessible for both amateur and
												professional writers to share their ideas with a broad
												audience.
											</div>
											<div className="mt-4 flex gap-4">
												<Button asChild>
													<a
														href="https://github.com/ayushk-1801/medium"
														target="_blank"
														rel="noopener noreferrer"
													>
														Github
													</a>
												</Button>
												<Button asChild>
													<a
														href="https://medium-ten-rho.vercel.app/signup"
														target="_blank"
														rel="noopener noreferrer"
													>
														Live
													</a>
												</Button>
											</div>
										</div>
										<div className="justify-end">
											<Image
												src="/medium.png"
												alt="Redact"
												width={300}
												height={300}
											/>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4">
								<AccordionTrigger className="text-6xl tracking-[0.2em] font-semibold">
									CROP BUDDY
								</AccordionTrigger>
								<AccordionContent>
									<div className="flex flex-row justify-between items-center">
										<div className="w-full max-w-[800px] justify-start">
											<div>
												Crop Buddy is an app designed to help farmers identify
												and manage crop diseases. Farmers can upload pictures of
												their diseased crops, and the app uses advanced
												algorithms to analyze the images, identifying the
												disease and providing relevant information on treatment
												options and prevention methods. With its user-friendly
												interface, Crop Buddy aims to empower farmers by
												offering real-time solutions, improving crop health, and
												increasing productivity. The app serves as a valuable
												tool for farmers seeking to protect their crops and make
												informed decisions about disease management.
											</div>
											<div className="mt-4">
												<Button asChild>
													<a
														href="https://github.com/ayushk-1801/Crop-Disease-Detection"
														target="_blank"
														rel="noopener noreferrer"
													>
														Github
													</a>
												</Button>
											</div>
										</div>
										<div className="justify-end">
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
		</div>
	);
}
