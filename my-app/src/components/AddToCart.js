import React from "react";
function AddToCart(props,...otherProps) {
  return (
    <div>
      {props.data.map((data,index) => {
        return (
          <div key={index}>
            <h5>BrandName:{data.Brandname}</h5>
            <div>Productname:{data.Productname}</div>
            <div>Quantity:{data.Quantity}</div>
            <div>Price:{data.Price}</div>
            <div>MRP:{data.MRP}</div>
            <img src={data.productImage} alt={`Image of ${data.Productname}`} height="100px" width="100px" />
            <div>OfferText:{data.OfferText}</div>
            <button type="button" onClick={()=>props.addToCart(index)}>
              ADD CART
            </button>
            <br />
            <br />
            <button onClick={()=>props.increaseItem(index)}>
              +
            </button>
           {data.Quantity} 
            <button onClick={()=>props.decreaseItem(index)}>
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default AddToCart;



















































































































