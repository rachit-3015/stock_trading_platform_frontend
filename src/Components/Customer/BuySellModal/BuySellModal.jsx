import React, { useState, useRef } from "react";
import './BuySellModal.css'

export default function BuySellModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <button onClick={toggleModal}>Open Modal</button>
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>Modal Title</h2>
                <button className="close-button" onClick={toggleModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form>
                    <div className="bars">
                        <label>Stock</label>
                        <br/>
                        <input type="text"/>
                    </div>
                    <div className="bars">
                        <label>Current price</label>
                        <br/>
                        <input type="text"/>
                    </div>
                    <div className="bars">
                        <label>Enter Volume</label>
                        <br/>
                        <input type="number"/>
                    </div>
                    <div className="bars">
                        <label>Enter Price</label>
                        <br/>
                        <input type="number"/>
                    </div>
                    <div className="bars">
                        <label>Select type</label><br />
                    <select>
                            <option defaultValue>--select option--</option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }