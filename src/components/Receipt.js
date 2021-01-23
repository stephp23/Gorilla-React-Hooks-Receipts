
import "./Receipt.css";

function Receipt({ person, ...receiptsDetails }) {

  return (
    <div className="receipt-container">
      <h3>{(person)}</h3>
        <ul>
            <li class="receipt-info"><span class="receipt-categories">Main:</span>{receiptsDetails.order.main}</li>
            <li class="receipt-info"><span class="receipt-categories">Protein:</span> {receiptsDetails.order.protein}</li>
            <li class="receipt-info"><span class="receipt-categories">Rice:</span> {receiptsDetails.order.rice}</li>
            <li class="receipt-info"><span class="receipt-categories">Sauce:</span> {receiptsDetails.order.sauce}</li>
            <li class="receipt-info"><span class="receipt-categories">Drink:</span> {receiptsDetails.order.drink}</li>
            <li class="receipt-info"><span class="receipt-categories">Toppings:</span> {receiptsDetails.order.toppings.map((topping, index) => {
              return ` ${ topping } . `;
                })}</li>
            <li class="receipt-info"><span class="receipt-categories">Cost:</span> {`$`}{receiptsDetails.order.cost} </li>
        </ul>
    </div>
);
}

export default Receipt;