import CartProduct from './CartProduct';

const CartItems = ({products}) => {

  if (!products || products.length === 0) {
    return <p>No products in your cart.</p>;
  }

  return (
      <div className="flex flex-col space-y-4">
        {products.map((product) => (
          <CartProduct key={product._id} product={product} />
        ))}
      </div>
  )
}

export default CartItems