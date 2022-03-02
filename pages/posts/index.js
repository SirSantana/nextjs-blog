import Layout from "../../components/Layout";
import Link from 'next/link'
export default function Posts({ data }) {
  return (
    <Layout title="Posts - Learn">
      <ul>
        {data.map(({ title, body, id }) => (
          <Link href={`/posts/${id}`}>
            <a>
              <li key={id}>
                <strong>Title:</strong>{title}
                <br />
                <strong>Body:</strong>{body}
                <br />
                <br/>
                <br/>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}
