import { commerce } from '../../lib/Commerce';
import ProductDetailsPage from '../../component/productDetails/ProductDetailsPage';
import { useRouter } from 'next/router';
import Loading from '../../component/Loading';

const ProductItem = ({ productId }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div id='ProductDetailsPage'>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <ProductDetailsPage productId={productId} />
    </>
  );
};

export default ProductItem;

export async function getStaticPaths() {
  const res = await commerce.products.list({ limit: 200 });
  const data = await res.data;

  const paths = data.map((product) => ({
    params: {
      products: product.categories[product.categories.length - 1].slug,
      productitem: product.id,
    },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const productId = params.productitem;
  try {
    const res = await commerce.products.retrieve(productId);
    return {
      props: {
        productId,
      },
      // revalidate:10000 you can set revalidate time for this page but this is not e real commercial website, thus we don't need it
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
