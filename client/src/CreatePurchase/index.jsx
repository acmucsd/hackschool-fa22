import React, {useState } from "react";
import "./style.css";
import API from "../API";

const CreatePurchase = () => {
  const initialFormData = {
    name: "",
    description: "",
    location: "",
    date: "",
    cost: "",
    method: "Cash"
  };

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleCreatePurchase = async (e) => {
      e.preventDefault();
      const req = e.target;
      console.log(req.name);
      const payload = {
          purchase: formData
      };
      console.log(JSON.stringify(payload.purchase));
      console.log(req);
      console.log(e);
      await API.createPurchase(payload);
      alert("Created successfully");
  };

  return (
    <div className="create-purchase-container">
      <div className="create-purchase-form">
        <h1>Create Purchase</h1>
        <div className="create-row">
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter name" onChange={(handleChange)}/>
        </div>
        <div className="create-row">
          <label>Description</label>
          <input type="text" name="description" placeholder="Enter description" onChange={(handleChange)}/>
        </div>
        <div className="create-row">
          <label>Location</label>
          <input type="text" name="location" placeholder="Enter location" onChange={(handleChange)}/>
        </div>
        <div className="create-row">
          <label>Date</label>
          <input type="date" name="date" onChange={(handleChange)}/>
        </div>
        <div className="create-row">
          <label>Cost</label>
          <input type="number" name="cost" min="0" step="0.01" onChange={(handleChange)}/>
        </div>
        <div className="create-row">
          <label>Method</label>
          <select name="method" onChange={(handleChange)}>
            <option value="Cash">Cash</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
            <option value="Check">Check</option>
            <option value="Crypto">Crypto</option>
          </select>
        </div>
        <button className="submit-button" onClick={handleCreatePurchase}>
          Submit New Purchase
        </button>
      </div>
    </div>
  );
};

export default CreatePurchase;