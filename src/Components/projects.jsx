import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects(props) {
	return (
		<div className="flex flex-col-reverse cursor-pointer p-4 lg:flex-row-reverse gap-7 opacity-100  hover:bg-gray-700 hover:border border-gray-500 rounded-tr-3xl hover:shadow-lg shadow-cyan-500/50 ">
			<div>
				<div className="flex gap-2 items-center">
					<p className="text-lg text-slate-400">{props.projectname} </p>
					<a href={props.websiteLinks}>
						<FaExternalLinkAlt className="text-sm  text-slate-500 " />
					</a>
				</div>

				<p className="text-sm text-slate-300"> {props.description} </p>
			</div>

			<div className="h-[115px] w-[200px] flex-shrink-0">
				<img
					src={props.img}
					alt={props.projectname}
					className="object-cover object-top h-[115px] w-[200px]"
					loading="lazy"
				/>
			</div>
		</div>
	);
}

export default Projects;
