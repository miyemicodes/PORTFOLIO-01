import React from "react";
import About from "./About";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import myExperience from "../exper";
import assets from "../assets";
import mySkills from "../techSkills";
import Studies from "../Education";
import Getintouch from "./Getintouch";

function Details() {
	return (
		<div className=" px-4 overflow-y-auto overflow-hidden scroll-smooth remove-scrollbar pb-8">
			<About />
			<div
				className="relative"
				id="experience"
			>
				<h2 className="sticky top-0 py-4 text-base font-bold tracking-wide text-slate-600 backdrop-blur">
					EXPERIENCE
				</h2>
				<div className="flex flex-col gap-6 cursor-pointer ">
					{myExperience.map((experience) => (
						<Experience
							key={experience.id}
							{...experience}
						/>
					))}
				</div>
			</div>

			<div
				className="relative"
				id="skill"
			>
				<h2 className="sticky top-0 py-4 text-base font-bold tracking-wide text-slate-600 backdrop-blur">
					SKILLS
				</h2>

				<div className="skills-list flex gap-4 flex-wrap cursor-pointer">
					{mySkills.map((skillset) => (
						<Skills
							key={skillset.id}
							{...skillset}
						/>
					))}
				</div>
			</div>

			<div id="education">
				<h2 className="py-10 text-base font-bold tracking-wide text-slate-600 ">
					EDUCATION
				</h2>

				{Studies.map((study) => (
					<Education
						key={study.id}
						{...study}
					/>
				))}
			</div>

			<div
				className="w-full relative"
				id="project"
			>
				<h2 className="sticky top-0 py-4 text-base font-bold tracking-wide text-slate-600 backdrop-blur">
					PROJECTS
				</h2>
				{assets.map((asset) => (
					<Projects
						key={asset.id}
						{...asset}
					/>
				))}
			</div>

			<Getintouch />
		</div>
	);
}

export default Details;
