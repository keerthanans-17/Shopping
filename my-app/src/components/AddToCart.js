import React from "react";
// import './index.css';
function AddToCart(props,...otherProps) {
  return (
    <div className="main__body__container" >
      {props.data.map((data,index) => {
        return (<div className="card__container" key={index}>
          <div className="image__container">
          <img src={data.productImage} alt={`Image of ${data.Productname}`} height="150px" width="150px" />
        </div>
          <div className="item__details__container" >
            <h5>{data.Brandname}</h5>
            <div>{data.Productname}</div>
            <div>Quantity:{data.Quantity}</div>
            <div>Rs:{data.Price}</div>
            <div>MRP:{data.MRP}</div>
            
            <div>Offer:{data.OfferText}</div>
            <button type="button" className="add__to__cart" onClick={()=>props.addToCart(index)}>
              ADD CART
            </button>
            <br />
            <br />
            <button className="plus__plus" onClick={()=>props.increaseItem(index)}>
              +
            </button>
           {data.Quantity} 
            <button className="minus__minus" onClick={()=>props.decreaseItem(index)}>
              -
            </button>
          </div>
          </div>
        );
      })}
    </div>
  );
}
export default AddToCart;



















































































































