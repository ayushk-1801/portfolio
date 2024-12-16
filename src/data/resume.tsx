import { Icons } from "@/components/icons";
import Navbar from "@/components/navbar";
import { HomeIcon, NotebookIcon, Cog, FolderKanban, Info } from "lucide-react";

export const DATA = {
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "hello@example.com",
		tel: "+123456789",
		social: {
			email: {
				name: "Send Email",
				url: "mailto:ayushkumar.swe@gmail.com",
				icon: Icons.email,

				navbar: true,
			},
			GitHub: {
				name: "GitHub",
				url: "https://github.com/ayushk-1801",
				icon: Icons.github,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/heizenbergg_",
				icon: Icons.x,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/ayush-kumar-anand/",
				icon: Icons.linkedin,

				navbar: true,
			},
			// Resume: {
			// 	name: "Resume",
			// 	url: "",

			// 	navbar: true,
			// },
		},
	},
} as const;
