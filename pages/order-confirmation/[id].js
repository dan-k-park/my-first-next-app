import * as React from 'react'
import fetch from 'isomorphic-unfetch'

function OrderConfirmation({ order }) {
  if (!order) {
      return <div>Sorry, we couldn't find your order!</div>
  }

  return (
      <div>
          Your order;
          <p>You ordered {order.item}.</p>
      </div>
  )
}

OrderConfirmation.getInitialProps = async ({ query }) => {
    const result = await fetch(`http://localhost:3000/api/order/${query.id}`);
    if (result.status === 200) return { order: await result.json() };

    return { order: undefined };
};

export default OrderConfirmation