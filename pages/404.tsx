import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
	const router = useRouter();
	
  useEffect(() => {
		setTimeout(() => {                // akan me-autoredirecting user setelah 2 detik berada di halaman ini untuk kembali otomatis ke homepage
			router.push("/");
		}, 2000);
	}, [router]);
	return (
		<div>
			<h1 className="title-not-found">Ooops..</h1>
			<h1 className="title-not-found">Halaman yang anda cari tidak ada</h1>
		</div>
	);
}
