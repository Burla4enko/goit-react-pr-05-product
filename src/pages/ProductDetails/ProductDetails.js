import { useLocation, useParams } from 'react-router-dom';
import { getProductById } from 'fakeApi';
import { BackLink } from 'components/BackLink/BackLink';

export default function ProductDetails() {
  const { productId } = useParams();
  const { name, id } = getProductById(productId);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src="https://via.placeholder.com/960x240" alt={name} />
      <div>
        <h2>
          Product - {name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
}
