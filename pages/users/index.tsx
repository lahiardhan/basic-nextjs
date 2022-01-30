import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import styles from "../../styles/Users.module.css";

interface UserProps {					// utk mendefinisikan tipe data pada apa saja props yg dipanggil (TypeScript OOP)
	dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
	const { dataUsers } = props; 		// memanggil dataUsers sebagai propsnya
	const router = useRouter();

	return (
		<Layout pageTitle="User">
			<h3>User Page</h3>
			{dataUsers.map((user) => {
				return (
					<div
						key={user.id}
						onClick={() => router.push(`/users/${user.id}`)}	// saat data user di klik dia akan masuk ke user detail page yg udh dibuat [id].tsx 
						className={styles.card}
					>
						<p>{user.name}</p>
						<p>{user.email}</p>
					</div>
				);
			})}
		</Layout>
	);
}

//? DATA FETCHING => tempat untuk memanggil / mengambil data di aplikasi next js (jangan lupa functionnya di EXPORT dulu)
// getStaticProps	-> cocoknya utk pemanggilan data yg static atau jarang berubah boleh, tidak data dinamis, seluruh halaman berisi datanya sudah
//							disiapkan sebelum  dipanggil user ke dalam browser mereka	(INDEX.TSX/users)
// getStaticPaths -> static generation akan mengenerate data secara statis saat proses next js di build (sama kaya static props), wajib 
//							menggunakan fallback ([ID].TSX)
// getServerProps -> sangat cocok untuk data dinamis / yg sering berubah	(BLOG.TSX)

export async function getStaticProps() {				//Data Fetching GetStaticProps
																	// props ini punya sebuah konteks dimana dgn konteks tsb kita bisa mengakses params dll
	const res = await fetch("https://jsonplaceholder.typicode.com/users"); // memanggil data json nya dari API
	const dataUsers = await res.json();
	return {
		props: {
			dataUsers, 											// ini bisa dipanggil sebagai props di atas
		},
	};
}
