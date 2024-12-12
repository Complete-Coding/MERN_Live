import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerData } from "../../store/slices/customerSlice";
import ErrorMessages from "../common/ErrorMessages";
import Order from "./Order";

const Orders = () => {
  const { products, orders, isLoading, errorMessages } = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  const sortedOrders = orders ? [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <ErrorMessages errorMessages={errorMessages} />
      {!orders || orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {sortedOrders.map((order) => (
            <Order key={order._id} order={order} products={products} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders