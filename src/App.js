import './App.css';
import Receipt from "./components/Receipt"
import { useState } from "react";
import receiptData from "./data/recordsReceipts";

function App() {
  const [receipts, setReceipts] = useState(receiptData);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
