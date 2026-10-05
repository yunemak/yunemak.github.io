import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import reactRouterMarkdown from "@/labs/react/react-router.md?raw";
import styles from "./Lab.module.css";

const Lab = () => {
	const { category, labId } = useParams();

	return (
		<main className={styles.lab}>
			<article className={styles.markdown}>
				<ReactMarkdown
					components={{
						code({ className, children, ...props }) {
							const match = /language-(\w+)/.exec(
								className || "",
							);

							return match ? (
								<SyntaxHighlighter
									style={oneDark}
									language={match[1]}
									PreTag="div"
								>
									{String(children).replace(/\n$/, "")}
								</SyntaxHighlighter>
							) : (
								<code className={className} {...props}>
									{children}
								</code>
							);
						},
					}}
				>
					{reactRouterMarkdown}
				</ReactMarkdown>
			</article>
		</main>
	);
};

export default Lab;
