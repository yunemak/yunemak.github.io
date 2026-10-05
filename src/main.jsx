import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/reset.css";
import "./styles/def.css";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Docs from "./pages/Docs.jsx";
import Projects from "./pages/Projects.jsx";
import Labs from "./pages/Labs.jsx";

const router = createBrowserRouter([
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
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
