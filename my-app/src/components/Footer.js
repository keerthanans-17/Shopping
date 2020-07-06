import React from 'react';
import "../index.css";
function Footer({amount,checkOut}){
    return(
        <div className="fixed__footer">
           <button type="button" onClick={()=>{checkOut()}}>CheckOut</button>
        </div>
    )
}
export default Footer