import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ReactNode } from "react";
import styles from "./Layout.module.css";
import Head from "next/head";

interface LayoutProps {
	children: ReactNode;
	pageTitle: string;
}

export default function Layout(props: LayoutProps) {
	// untuk mengimport props kita harus mendeskripsikan tipenya yaitu ReactNode
	const { children, pageTitle } = props;
	return (
		<>
			<Head>
				<title>Next JS Basic | {pageTitle}</title>
				<meta name="description" content="Website Next JS Basic" />
			</Head>
			<div className={styles.container}>
				<Header />
				<div className={styles.content}>{children}</div>
				<Footer />
			</div>
		</>
	);
}
