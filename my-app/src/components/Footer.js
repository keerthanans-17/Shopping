import React from 'react';
import "../index.css";
function Footer({amount,checkOut}){
    return(
        <div className="footer">
            <div className="hidden">Total Amount : {amount}</div>
           <button type="button" onClick={()=>{checkOut()}}>CheckOut</button>
        </div>
    )
}
export default Footer