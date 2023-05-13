import React, { useState } from 'react';
import './MetaDataNavbar.css';

export default function MetaDataNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('/transaction');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    toggleModal();
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    toggleModal();
    window.history.pushState(null, null, '/transaction');
  };

  const handleModalClose = () => {
    toggleModal();
    setUrl('');
  };

  const style = {
    btnAlign: {
      right: '30px',
      top: '173px',
      position: 'absolute',
    },
  };

  return (
    <div className="metaDataNavbar">
      <table>
        <thead>
          <tr>
            <th className="stockName">Stock Name</th>
          </tr>
        </thead>
      </table>
      {/* this is for modal */}
      <button className="btnModal" style={style.btnAlign} onClick={handleButtonClick}>
        Buy/Sell
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal small">
            <div className="modal-header">
              <h2>Equity Buy/Sell</h2>
              <button className="close-button" onClick={handleModalClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleModalSubmit}>
                <div className="bars">
                  <label>Company</label>
                  {/* <br /> */}
                  <input type="text" />
                </div>
                <div className="bars">
                  <label>Current price</label>
                  {/* <br /> */}
                  <input type="text" />
                </div>
                <div className="bars">
                  <label>Select type</label>
                  {/* <br /> */}
                  <select>
                    <option defaultValue>--select option--</option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                  </select>
                </div>
                <div className="bars">
                  <label>Enter Price</label>
                  {/* <br /> */}
                  <input type="number" />
                </div>
                <div className="bars">
                  <label>Enter Volume</label>
                  {/* <br /> */}
                  <input type="number" />
                </div>
                <div className="modal-buttons">
                  <button className="btnSubmit" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* modal ends here */}
    </div>
  );
}
