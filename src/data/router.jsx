import { createBrowserRouter } from "react-router";

import Layout from "@/components/Layout/Layout.jsx";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import Docs from "@/pages/Docs.jsx";
import Projects from "@/pages/Projects.jsx";
import Labs from "@/pages/Labs/Labs.jsx";
import HtmlLabs from "@/pages/HtmlLabs/HtmlLabs.jsx";
import CssLabs from "@/pages/CssLabs/CssLabs.jsx";
import JavaScriptLabs from "@/pages/JavaScriptLabs/JavaScriptLabs.jsx";
import ReactLabs from "@/pages/ReactLabs/ReactLabs.jsx";

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
		path: "/labs/html",
		element: <HtmlLabs />,
	},

	{
		path: "/labs/css",
		element: <CssLabs />,
	},
	{
		path: "/labs/javascript",
		element: <JavaScriptLabs />,
	},
	{
		path: "/labs/react",
		element: <ReactLabs />,
	},
]);
