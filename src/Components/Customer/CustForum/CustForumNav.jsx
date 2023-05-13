import React, { useState } from 'react';
import './CustForumNav.css';

export default function CustForumNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('/comment');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    toggleModal();
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    toggleModal();
    window.history.pushState(null, null, '/comment');
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
            <th className="stockName">Forum</th>
          </tr>
        </thead>
      </table>
      {/* Modal */}
      <button className="btnModal" style={style.btnAlign} onClick={handleButtonClick}>
        Comment
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal small">
            <div className="modal-header">
              <h2>Comment Section</h2>
              <button className="close-button" onClick={handleModalClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleModalSubmit}>
                <div>
                  <textarea style={{ height: '80px' }} />
                </div>
                <div className="modal-buttons">
                  <button className="btnSubmit" type="submit">
                    Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* End of Modal */}
    </div>
  );
}

