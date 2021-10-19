import ProductsPage from '../../component/pruducts/ProductsPage';
import { commerce } from '../../lib/Commerce';
import { useRouter } from 'next/router';
import Loading from '../../component/Loading';
import Head from 'next/head';

const Products = ({ productCategory }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div id='ProductsPage'>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Shop Amazon.com</title>
      </Head>
      <ProductsPage productCategory={productCategory} />
    </>
  );
};

export default Products;

export async function getStaticPaths() {
  const res = await commerce.categories.list();
  const data = await res.data;

  const paths = data.map((category) => ({
    params: { products: category.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const productCategory = params.products;

  try {
    const res = await commerce.categories.retrieve(productCategory, {
      type: 'slug',
    });
    return {
      props: {
        productCategory,
      },
      // revalidate:10000 you can set revalidate time for this page but this is not e real commercial website, thus we don't need it
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
