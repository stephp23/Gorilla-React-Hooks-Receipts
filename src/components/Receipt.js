//import { useState } from "react";
import "./Receipt.css";

function Receipt({ person, ...receiptsDetails }) {
  // const [toggle, setToggle] = useState(paid);
  // // first need to check if the order is paid or unpaid, 
  // // before showing the final receipt on the webpage.
  // function paymentStatus() {
  //   // compares data in array for paid status (true or false),
  //   // and shows "Paid" for true value, and "Not Paid" for false value.
  //   setToggle((payment) => (payment ? "Paid" : "Not Paid")); 
  //}

  return (
    <div className="receipt-container">
      <h3>Customer: {(person)}</h3>
        <ul>
            <li><span class="receipt-categories">Main:</span> {receiptsDetails.order.main}</li>
            <li><span class="receipt-categories">Protein:</span> {receiptsDetails.order.protein}</li>
            <li><span class="receipt-categories">Rice:</span> {receiptsDetails.order.rice}</li>
            <li><span class="receipt-categories">Sauce:</span> {receiptsDetails.order.sauce}</li>
            <li><span class="receipt-categories">Drink:</span> {receiptsDetails.order.drink}</li>
            <li><span class="receipt-categories">Toppings:</span> {receiptsDetails.order.toppings.map((topping, index) => {
              return `${ topping } , `;
                })}</li>
            <li><span class="receipt-categories">Cost:</span> {`$`}{receiptsDetails.order.cost} </li>
        </ul>
    
    {/* <div className="receiptPayment-container">
        <button onClick={ paymentStatus }>Payment Status</button>
        <h3>{ toggle }</h3>
    </div> */}
    </div>
);
}

export default Receipt;