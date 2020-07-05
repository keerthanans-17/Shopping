import React from 'react';
import "../index.css";
function Footer({amount,checkOut}){
    return(
        <div className="fixed__footer">
            <div className="hidden fixed__footer__div">Total Amount : {amount}</div>
           <button type="button" onClick={()=>{checkOut()}}>CheckOut</button>
        </div>
    )
}
export default Footer