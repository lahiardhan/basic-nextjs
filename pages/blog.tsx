import Layout from "../components/Layout/Layout";
import styles from"../styles/Blog.module.css";


interface Post {              // tipe data untuk per masing2 isi detail blog nya
   id: number,
   title: string,
   body: string
}
interface BlogProps {         // tipe data untuk blog secara keseluruhan yg berupa array berisi id, title, dan body
   dataBlog:Post[]
}
export default function Blog(props: BlogProps) {
   const { dataBlog } = props;                           // dataBlog ini akan digunakan untuk merender komponen2 yg kita perlukan
   return(
      <Layout pageTitle="Blog Page">
         {dataBlog.map(blog => {
            return(
               <div key={blog.id} className={styles.card}>
                  <h3>{blog.title}</h3>
                  <p>{blog.body}</p>
               </div>
            )
         })}
      </Layout>
   )
}

export async function getServerSideProps () {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const dataBlog = await res.json();
   return {
      props: {
         dataBlog,
      }
   }
}