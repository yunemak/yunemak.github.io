# React Router

1. First, let's set up our Vite project.

```sh
npm create vite@latest react-router-project
```

- Choose `React` as a framework.
- We will only use Javascript, so choose `JavaScript` from variants.
- Choose `ESLint` as the linter.
- Choose `Yes` to start the server now.
- Check whether the website works correctly.
- Stop the server and navigate to the project directory.

2. Install `react-router` package.

```sh
npm install react-router
```

3. Create the `src/pages/` directory and add the following components: `Home.jsx`, `About.jsx`, `Projects.jsx`

- From now on, check the live website and console logs as you follow the steps.

3. Import the pages into `main.jsx`

```jsx
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
```

5. Define a special `router` object using `createBrowserRouter()`. To use this function you need to import it from `react-router` module.

```jsx
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
]);
```

- `path` -> URL
- `element` -> component to be rendered in specific path

Here we defined a set of URL rules:

```jsx
[
	URL rule,
	URL rule,
	URL rule
]
```

For instance, when we navigate to the `/about` URL, it will render `<About />` component.

6. Replace the `<App />` component with `<RouterProvider router={router} />`.

- Import `RouterProvider` from `react-router` module.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router";
// ...
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
```

This connects our router configuration to the React application.

- Test it by visiting
  -> `http://localhost:5173/`
  -> `http://localhost:5173/about`
  -> `http://localhost:5173/projects`

At this point React Router should be working. However, users don't usually navigate websites by manually typing URLs. Let's add some `<Link />` components.

7. Open the `Home` component and copy and paste the following code:

```jsx
import { Link } from "react-router";

function Home() {
	return (
		<div>
			<h1>Home Page</h1>

			<Link to="/about">About</Link>
			<Link to="/projects">Projects</Link>
		</div>
	);
}

export default Home;
```

- First, we imported the `<Link />` component from `react-router` module.
- Then, we added `<Link to="...">...</Link>` similar to using `<a>...</a>` tag.

Check the home page. That's it—it was simple!

Our application is still an SPA (Single-Page Application), but navigation is now handled by React Router.

Let's go further and learn about `<Outlet />`.

8. Create a directory called `src/components/`, then create a `Layout.jsx` component inside it. Copy and paste the following code:

```jsx
import { Link, Outlet } from "react-router";

function Layout() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects</Link>
			</nav>

			<main>
				<Outlet />
			</main>

			<footer>My Website</footer>
		</>
	);
}

export default Layout;
```

9. Let's update the `router` object in `main.jsx`.

```jsx
import Layout from "./components/Layout.jsx";
// ...
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
				path: "projects",
				element: <Projects />,
			},
		],
	},
]);
```

- We introduced something new here: `children`.
- The child routes determine what gets rendered inside `<Outlet />`.
- This represents the changing part of the website.
- The `Layout` component acts as a shared layout for all child routes.
- When we visit `/`, the route with `index: true` renders the `<Home />` component.

Great. Now the shared layout stays in place while the content inside `<Outlet />` changes based on the current route.
