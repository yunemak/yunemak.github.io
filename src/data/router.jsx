import { createBrowserRouter } from "react-router";
import LabPool from "@/components/LabPool/LabPool.jsx";

import Layout from "@/components/Layout/Layout.jsx";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import Docs from "@/pages/Docs.jsx";
import Projects from "@/pages/Projects.jsx";
import Labs from "@/pages/Labs/Labs.jsx";
import Lab from "@/pages/Lab/Lab";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "docs",
				element: <Docs />,
			},
			{
				path: "projects",
				element: <Projects />,
			},
			{
				path: "labs",
				element: <Labs />,
			},
		],
	},
	{
		path: "/labs/:category",
		element: <LabPool />,
	},
	{
		path: "/labs/:category/:labId",
		element: <Lab />,
	},
]);
