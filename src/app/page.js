import Feature from "@/components/Feature";
import Product from "@/components/Product";

export default async function Home({ initialProducts}) {
  
  let fetchedProducts = [];
  try {
    const response = await fetch(
      "https://canteen-web-app.vercel.app/api/products",
      { cache: "no-store" }
    );
    const data = await response.json();
    fetchedProducts = data.result;
    // console.log(fetchedProducts);
  } catch (err) {
    console.log(err.message);
  }

  return (
    <main>
      <Feature />
      <Product products={initialProducts || fetchedProducts} />
    </main>
  );
}
