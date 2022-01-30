// FILE USER DETAIL
import { useRouter } from "next/router";  // untuk memudahkan membuat dynamic route/path
import Layout from "../../components/Layout/Layout";

interface User {						// pendefinisian tipe data untuk props bernama user
	name: string,
	email: string,
	phone: string,
	website: string,
	id: number
}

interface UserDetailProps {
	user: User;							// karna props user ini punya banyak elemen didalamnya maka tiap elemennya harus didefinisikan tipe datanya satu2
}
export default function UserDetail(props: UserDetailProps) {
	const router = useRouter();				// memanggil userRouter sebagai router (gakdipake)
	const { id } = router.query;        	// akan mendapatkan user detailnya (path detailnya) (gakdipake)
	const { user } = props;

	return (
		<Layout pageTitle="User Detail">
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<p>{user.website}</p>
		</Layout>
	);
}


export async function getStaticPaths() {		// fungsi dari getStatPaths ini akan mengenerate halaman2 static HTML sejumlah user yg kita miliki
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const dataUsers = await res.json();

	const paths = dataUsers.map((user: User) => ({
		params:{
			id: `${user.id}`,
		}
	}));	
	return{
		paths,
		fallback: false								// getStaticPaths wajib menggunakan fallback, gunanya adalah klo true dia akan selalu menunggu render
															// klo ada URL yg tidak ditemukan, sedangkan klo false nemu URL yg tidak ditemukan akan diarahkan ke
															// 404 sehingga lebih aman untuk saat di build nanti
	}
}


interface GetStaticProps {							// tipe data untuk props context yg bertipe data object dan didalam object nya ada elemen bertipe string
	params: {											// ribet anjing
		id: string;
	}
}
export async function getStaticProps(context: GetStaticProps) {		//Data Fetching GetStaticProps
																			// props ini punya sebuah konteks dimana dgn konteks tsb kita bisa mengakses params dll
	const { id } = context.params;								// destructuring di {id} auto dapet id nya
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); // mendapatkan data masing2 user dari context.params.id
	const user = await res.json();
	
	return {
		props: {
			user, 														// ini bisa dipanggil sebagai props di atas
		},
	};
}
