import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<Layout pageTitle="Home Page">
      <Image src="/profile.png" width={200} height={200} alt="profile" />
			<h1 className={styles["title-homepage"]}>Halo Ardhan</h1>
		</Layout>
    );
};

export default Home;
