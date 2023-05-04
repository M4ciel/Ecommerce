export async function getServerSideProps() {
	const res = await fetch(`${process.env.PUBLIC_API}/categories`);
	const response = await res.json();

	return { props: { categories: response.data } };
}
