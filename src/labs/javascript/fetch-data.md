# Fetch Data

1. First, let's set up our Vite project.

```sh
npm create vite@latest using-api-project
```

- Choose `Vanilla` as a framework.
- Choose `JavaScript` as the variant.
- Choose `Yes` to install and start the server now.
- Check whether the website works correctly.
- Stop the server and navigate to the project directory.

2. Delete the following files: `src/assets`, `src/counter.js` and modify the files below:

```js
// main.js
import "./style.css";

console.log("Hello World!");
```

```css
/* style.css */
body {
	background-color: rgb(176, 244, 154);
}
```

From now on, keep the development server running while you code. Open the website in another tab. Check the console and web page background.

3. We will use [DummyJSON](https://dummyjson.com) API since it's beginner-friendly. First, open the API docs and read through it.
   We can test our connection to the API using its test endpoint. See the linked [section](https://dummyjson.com/docs#intro-test) . Copy and paste the following code:

```js
// main.js
import "./style.css";

// Could be GET or POST/PUT/PATCH/DELETE
fetch("https://dummyjson.com/test")
	.then((res) => res.json())
	.then(console.log);

/* { status: 'ok', method: 'GET' } */
```

Open the console. You should see:

```js
Object { status: "ok", method: "GET" }
```

Comparing it with the documentation, we can see that the output matches.

4. A good way to understand APIs is to start with **REST API**s, which follow a set of architectural principles:

- **Uniform Interface:** Uses standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) and consistent URL (URI) structures to interact with resources.
- **Stateless:** Each request from the client must contain all the information needed to understand and process it. The server stores no session state about the client.
- **Client-Server:** The client (frontend/UI) and server (backend/data storage) are completely decoupled and can evolve independently.

You don't need to memorize these principles. However, you should know the following terms:

- **Endpoint:**
  Simply a URL used to access an API resource.
  For example: https://dummyjson.com is the **base URL**.
  We access a specific resource by adding a path to the base URL. The resulting URL is called an **endpoint**.
  `base URL + path = endpoint`

Notice that we used `https://dummyjson.com/test` as our test endpoint.

In this tutorial, we will use the products endpoint. Modify `main.js` to use the products endpoint.

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/products")
	.then((res) => res.json())
	.then(console.log);
```

- **HTTP Method:**
  Tells the server which operation we want to perform. We'll use `GET` throughout this tutorial. The `GET` method is used to retrieve data from the server. By default, `fetch()` uses `GET` method.

- **Parameters:**
  Used to customize an API request.
  For example, we are using the products endpoint. Let's say we only want the first product. We can request it like this:

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/products/1")
	.then((res) => res.json())
	.then(console.log);
```

Check the console.

```js
Object { id: 1, title: "Essence Mascara Lash Princess", description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.", category: "beauty", price: 9.99, discountPercentage: 10.48, rating: 2.56, stock: 99, tags: (2) […], brand: "Essence", … }
```

This type of parameter is called a **path parameter**.
We could also use another type of parameter: a **query parameter**. For example, modify the code:

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/products")
	.then((res) => res.json())
	.then(console.log);
```

Check the console.

```js
Object { products: (30) […], total: 194, skip: 0, limit: 30 }
```

The response contains 30 products, but the total number of products is 194. By default, the API limits the response to 30 products.

We can change that using a **query parameter**.

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/products?limit=10")
	.then((res) => res.json())
	.then(console.log);
```

Check the console.

```js
Object { products: (10) […], total: 194, skip: 0, limit: 10 }
```

The basic structure of a query parameter is as follows:
`endpoint + ? + parameter`
Optionally, we can add more parameters by separating them with `&`:
`endpoint + ? + parameter1 + & + parameter2`

Check the dummyJSON docs about [limiting resources](https://dummyjson.com/docs#intro-limit). This should look much more familiar now.

- **Response:**
  The **response** sent by the server after receiving an HTTP request.
  A basic HTTP response consists of 3 parts:
- **Status code:** Indicates whether the request succeeded or failed.
- **Headers:** Contains additional information about the response.
- **Body:** Contains the data sent by the server.

Let's see it in action. Modify `main.js` as follows:

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/products").then(console.log);
```

Check the console.

```js
Response { type: "cors", url: "https://dummyjson.com/products", redirected: false, status: 200, ok: true, statusText: "", headers: Headers(1), body: ReadableStream, bodyUsed: false }
```

The Response object contains several other properties. However, we don't need to explore all of them right now.

- `status: 200` means the request was successful.
- `ok: true` indicates a successful HTTP response. This property is `true` when the status code is between 200 and 299. We catch errors using this property. That's why it is important to know it.

Now, let's say there is an error on the server. Instead of breaking the server, let's introduce a typo in the endpoint:

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/productsww").then(console.log);
```

Check the console.

```js
XHR GET
https://dummyjson.com/productsww
[HTTP/2 404  100ms]
Response { type: "cors", url: "https://dummyjson.com/productsww", redirected: false, status: 404, ok: false, statusText: "", headers: Headers(1), body: ReadableStream, bodyUsed: false }
```

Its status code is `404`, which means the requested resource was not found. Instead of just logging a message, let's handle errors using `.catch()`.

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/productsww").then((response) => {
	if (!response.ok) {
		console.log("Resource not found");
	}
});
```

Check the console.

```js
XHR GET
https://dummyjson.com/productsww
[HTTP/2 404  94ms]
Resource not found main.js:6:11
```

There is a better way to catch errors instead of console log them. Let's use `.catch()`.

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/productsww")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
	})
	.catch((error) => {
		console.log(error);
	});
```

Check the console.

```js
XHR GET
https://dummyjson.com/productsww
[HTTP/2 404  91ms]
Error: Resource is not found
    <anonymous> main.js:7
    promise callback* main.js:5
main.js:11:11
```

Here's what happens:

When the server returns a response, we check the `response.ok` property. If it is false, we intentionally throw an error using `throw new Error()`.

This stops the execution of the current `.then()` callback and rejects the Promise, passing the error to the nearest `.catch()` handler.

**Note:** The `fetch()` function does not automatically reject its Promise for HTTP errors such as 404 or 500. That's why we need to check `response.ok` manually.

5. Now that we've covered the basics of APIs, let's fix the code.

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/products")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
```

The response contains JSON data in its body, but `fetch()` returns a `Response` object rather than the parsed JavaScript object.

We use `response.json()` to read and parse the response body. Since `.json()` returns a Promise (similar to `fetch()`), we chain another `.then()` to access the parsed data.

Check the console.

```js
Object { products: (30) […], total: 194, skip: 0, limit: 30 }
main.js:12:11
```

To summarize this part, keep these points in mind:

- `fetch()` returns a Promise.
- `response.json()` also returns a Promise.
- Promises can be handled using `.then()` and `.catch()`.
- If we throw an error inside a `.then()` callback, the Promise returned by `.then()` becomes rejected, and the error propagates to the nearest rejection handler (such as `.catch()`).
- `fetch()` does not automatically reject its Promise for HTTP errors like `404` or `500`. We must check `response.ok` manually.

6. Let's limit the number of products to 3.

```js
// main.js
import "./style.css";

fetch("https://dummyjson.com/products?limit=3")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
```

Now, let's take a closer look at the products. Check the console.

```js
Object { products: (3) […], total: 194, skip: 0, limit: 3 }
limit: 3
products: Array(3) [ {…}, {…}, {…} ]
0: Object { id: 1, title: "Essence Mascara Lash Princess", description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.", … }
1: Object { id: 2, title: "Eyeshadow Palette with Mirror", description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.", … }
2: Object { id: 3, title: "Powder Canister", description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.", … }
length: 3
<prototype>: Array []
skip: 0
total: 194
<prototype>: Object { … }
main.js:12:11
```

Let's render the titles.

```js
// main.js
import "./style.css";

const app = document.getElementById("app");

fetch("https://dummyjson.com/products?limit=3")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		for (let item of products) {
			const p = document.createElement("p");
			p.textContent = item.title;
			app.appendChild(p);
		}
	})
	.catch((error) => {
		console.log(error);
	});
```

Let's render them as product cards with images. First, let's examine one of the product objects:

```js
0: Object { id: 1, title: "Essence Mascara Lash Princess", description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.", … }
availabilityStatus: "In Stock"
brand: "Essence"
category: "beauty"
description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."
dimensions: Object { width: 15.14, height: 13.08, depth: 22.99 }
discountPercentage: 10.48
id: 1
images: Array [ "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" ]
meta: Object { createdAt: "2025-10-09T14:47:01.588Z", updatedAt: "2026-05-23T11:27:41.868Z", barcode: "5784719087687", … }
minimumOrderQuantity: 48
price: 9.99
rating: 2.56
returnPolicy: "No return policy"
reviews: Array(3) [ {…}, {…}, {…} ]
shippingInformation: "Ships in 3-5 business days"
sku: "BEA-ESS-ESS-001"
stock: 99
tags: Array [ "beauty", "mascara" ]
thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
title: "Essence Mascara Lash Princess"
warrantyInformation: "1 week warranty"
weight: 4
<prototype>: Object { … }
```

Each product has an `images` property. Let's display the products along with their images. Notice that `images` is an array, so we'll use its first element.

```js
// main.js
import "./style.css";

const app = document.getElementById("app");

fetch("https://dummyjson.com/products?limit=3")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		for (let item of products) {
			const div = document.createElement("div");

			const h2 = document.createElement("h2");
			h2.textContent = item.title;
			div.appendChild(h2);

			const img = document.createElement("img");
			img.src = item.images[0];
			div.appendChild(img);

			app.appendChild(div);
		}
	})
	.catch((error) => {
		console.log(error);
	});
```

Check the web page. It looks better now. Before moving on, notice that our code is getting longer. Let's refactor it.

```js
// main.js
import "./style.css";

const app = document.getElementById("app");

fetch("https://dummyjson.com/products?limit=3")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		for (let item of products) {
			app.appendChild(createItem(item));
		}
	})
	.catch((error) => {
		console.log(error);
	});

function createItem(item) {
	const div = document.createElement("div");

	const h2 = document.createElement("h2");
	h2.textContent = item.title;
	div.appendChild(h2);

	const img = document.createElement("img");
	img.src = item.images[0];
	div.appendChild(img);

	return div;
}
```

We can even move `createItem()` into a separate file. Create a file named `src/createItem.js` and move the function there:

```js
// createItem.js
function createItem(item) {
	const div = document.createElement("div");

	const h2 = document.createElement("h2");
	h2.textContent = item.title;
	div.appendChild(h2);

	const img = document.createElement("img");
	img.src = item.images[0];
	div.appendChild(img);

	return div;
}

export default createItem;
```

We can use JavaScript modules to organize our code. Don't forget to export the function as the default export.

Since the function is no longer defined in `main.js`, we need to import it.

```js
// main.js
import "./style.css";
import createItem from "./createItem";

const app = document.getElementById("app");

fetch("https://dummyjson.com/products?limit=3")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		for (let item of products) {
			app.appendChild(createItem(item));
		}
	})
	.catch((error) => {
		console.log(error);
	});
```

Looks much cleaner, right?

7. Let's add some styles before we move on. Before adding styles, let's assign CSS classes to the elements created by `createItem()`.

```js
// createItem.js
function createItem(item) {
	const div = document.createElement("div");
	div.classList.add("item");

	const h2 = document.createElement("h2");
	h2.textContent = item.title;
	h2.classList.add("item-title");
	div.appendChild(h2);

	const img = document.createElement("img");
	img.src = item.images[0];
	img.classList.add("item-image");
	div.appendChild(img);

	return div;
}

export default createItem;
```

Now, update `style.css`:

```css
/* style.css */
* {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: 40px;
	font-family: Arial, sans-serif;
	background: #f5f5f5;
	color: #222;
}

#app {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 20px;
	max-width: 1200px;
	margin: auto;
}

.item {
	padding: 20px;
	background: white;
	border: 1px solid #ddd;
	border-radius: 12px;
	text-align: center;
}

.item-title {
	font-size: 16px;
	margin: 0 0 15px;
}

.item-image {
	width: 100%;
	height: 180px;
	object-fit: contain;
}
```

Check the web page. Looks much better, right?

Now, let's render all the products. According to the [dummyJSON docs](https://dummyjson.com/docs#intro-limit), the tip box says "`limit=0` clears the limit and you get all items".
Let's do that:

```js
// main.js
import "./style.css";
import createItem from "./createItem";

const app = document.getElementById("app");

fetch("https://dummyjson.com/products?limit=0")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		for (let item of products) {
			app.appendChild(createItem(item));
		}
	})
	.catch((error) => {
		console.log(error);
	});
```

8. Try reloading the page a few times. Images can take some time to load. While the images are loading, the page may look incomplete. Let's display a `Loading...` message while fetching and parsing the data.

Before that, let's create a separate container for the products.

```js
// main.js
import "./style.css";
import createItem from "./createItem";

const app = document.getElementById("app");

const items = document.createElement("div");
items.classList.add("items");
app.appendChild(items);

fetch("https://dummyjson.com/products?limit=0")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		for (let item of products) {
			items.appendChild(createItem(item));
		}
	})
	.catch((error) => {
		console.log(error);
	});
```

We can still refactor it.

```js
// main.js
import "./style.css";
import createItem from "./createItem";

const app = document.getElementById("app");

fetch("https://dummyjson.com/products?limit=0")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		const items = document.createElement("div");
		items.classList.add("items");
		app.appendChild(items);
		for (let item of products) {
			items.appendChild(createItem(item));
		}
	})
	.catch((error) => {
		console.log(error);
	});
```

Again, we can refactor it.

```js
// main.js
import "./style.css";
import createItem from "./createItem";

const app = document.getElementById("app");

fetch("https://dummyjson.com/products?limit=0")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		renderItems(products);
	})
	.catch((error) => {
		console.log(error);
	});

function renderItems(products) {
	const items = document.createElement("div");
	items.classList.add("items");
	for (let item of products) {
		items.appendChild(createItem(item));
	}
	app.appendChild(items);
}
```

Looks a lot cleaner.

Let's add an `<h1>` heading to `index.html` and update the `<title>` element.

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Dummy Store</title>
	</head>
	<body>
		<div id="app">
			<h1 id="title">Dummy Store</h1>
		</div>
		<script type="module" src="/src/main.js"></script>
	</body>
</html>
```

Add the following CSS rule:

```css
#title {
	text-align: center;
}
```

Finally, let's display a `Loading...` message before showing the product list.

```js
// main.js
import "./style.css";
import createItem from "./createItem";

const app = document.getElementById("app");

const loading = document.createElement("p");
loading.textContent = "Loading...";
app.appendChild(loading);

fetch("https://dummyjson.com/products?limit=0")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		renderItems(products);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		loading.remove();
	});

function renderItems(products) {
	const items = document.createElement("div");
	items.classList.add("items");
	for (let item of products) {
		items.appendChild(createItem(item));
	}
	app.appendChild(items);
}
```

Here is what we did:

- Immediately added a `Loading...` text to the page.
- Fetched the products from DummyJSON.
- Created all product elements before appending them to the DOM.
- Appended the product container `items` to the page.
- Used `.finally()` to remove the loading text, whether the request succeeded or failed.

Let's style the `Loading...` message. First, add a class:

```js
const loading = document.createElement("p");
loading.textContent = "Loading...";
loading.classList.add("loading");
app.appendChild(loading);
```

```css
.loading {
	font-size: 18px;
	font-weight: 500;
	color: #555;
	text-align: center;
	padding: 40px;
	width: 100%;
	animation: pulse 1s infinite alternate;
}

@keyframes pulse {
	to {
		opacity: 0.3;
	}
}
```

You can simulate a slower network connection to observe the loading animation more easily.
We'll use Firefox for this example.

- Open Developer Tools.
- Go to the Network tab.
- Find the No Throttling dropdown menu.
- Select Regular 2G or Good 2G to simulate a slow connection.
- Enable Disable Cache to avoid cached responses.
- Return to the web page and refresh it using `Ctrl + Shift + R`.
- Observe the loading animation before the products appear.
- After testing, switch back to No Throttling.

9. Finally, let's rewrite our data-fetching code using `async/await`:

```js
fetch("https://dummyjson.com/products?limit=0")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Resource is not found");
		}
		return response.json();
	})
	.then((data) => {
		console.log(data);
		let products = data.products;
		renderItems(products);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		loading.remove();
	});
```

Our fetching code looks clean enough for now. However, as the project grows, the code may become more complicated. To make asynchronous code easier to read and maintain, JavaScript introduced `async` and `await`. Rewrite the code as follows:

```js
// main.js
import "./style.css";
import createItem from "./createItem";

const app = document.getElementById("app");

const loading = document.createElement("p");
loading.textContent = "Loading...";
loading.classList.add("loading");
app.appendChild(loading);

async function fetchProducts() {
	try {
		const response = await fetch("https://dummyjson.com/products?limit=0");

		if (!response.ok) {
			throw new Error("Resource is not found");
		}

		const data = await response.json();
		console.log(data);

		const products = data.products;
		renderItems(products);
	} catch (error) {
		console.log(error);
	} finally {
		loading.remove();
	}
}

function renderItems(products) {
	const items = document.createElement("div");
	items.classList.add("items");
	for (let item of products) {
		items.appendChild(createItem(item));
	}
	app.appendChild(items);
}

fetchProducts();
```

Let's move `renderItems()` function to a separate file named `src/renderItems()`.

```js
// renderItems.js
import createItem from "./createItem";

function renderItems(products) {
	const items = document.createElement("div");
	items.classList.add("items");
	for (let item of products) {
		items.appendChild(createItem(item));
	}
	const app = document.getElementById("app");
	app.appendChild(items);
}

export default renderItems;
```

Update `main.js`:

```js
// main.js
import "./style.css";
import renderItems from "./renderItems";

const app = document.getElementById("app");

const loading = document.createElement("p");
loading.textContent = "Loading...";
loading.classList.add("loading");
app.appendChild(loading);

async function fetchProducts() {
	try {
		const response = await fetch("https://dummyjson.com/products?limit=0");

		if (!response.ok) {
			throw new Error("Resource is not found");
		}

		const data = await response.json();
		console.log(data);

		const products = data.products;
		renderItems(products);
	} catch (error) {
		console.log(error);
	} finally {
		loading.remove();
	}
}

fetchProducts();
```

Let's move `fetchProducts()` to a separate file named `src/fetchProducts()`

```js
// fetchProducts.js
import renderItems from "./renderItems";

async function fetchProducts() {
	try {
		const response = await fetch("https://dummyjson.com/products?limit=0");

		if (!response.ok) {
			throw new Error("Resource is not found");
		}

		const data = await response.json();
		console.log(data);

		const products = data.products;
		renderItems(products);
	} catch (error) {
		console.log(error);
	} finally {
		const loading = document.querySelector(".loading");
		loading.remove();
	}
}

export default fetchProducts;
```

Update `main.js` once more.

```js
// main.js
import "./style.css";
import fetchProducts from "./fetchProducts";

const app = document.getElementById("app");

const loading = document.createElement("p");
loading.textContent = "Loading...";
loading.classList.add("loading");
app.appendChild(loading);

fetchProducts();
```

Our code now looks cleaner and more organized.
