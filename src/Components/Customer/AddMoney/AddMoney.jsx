import React, { useEffect, useState, useRef } from 'react'
import './AddMoney.css'
import { myAxios } from '../../../Service/Helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function AddMoney() {

  const[addMoney,setAddMoney] = useState("")
  const[getBalance,setGetBalance]=useState("")
  const isMounted = useRef(true);

  const storedToken = sessionStorage.getItem('Authorization')
  const storedEmail = sessionStorage.getItem('email')

  const handleAddMoney=(event)=>{
    setAddMoney(event.target.value)
  }

  useEffect(()=>{
    console.log(addMoney)
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await myAxios.post('/addMoney', {
        addMoney
      }, {
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'email': storedEmail
        }
      });
      // console.log(addMoney)
      setGetBalance(response.data);
      toast.success("Money added successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error adding money");
    }
    
    setAddMoney("");
  };
  useEffect(() => {
    async function fetchStockPrice() {
      try {
        const response = await myAxios.get('/addMoney', {
          headers: {
            'Authorization': `Bearer ${storedToken}`,
            'email': storedEmail
          }
        });
        if (isMounted.current) {
          setGetBalance(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchStockPrice();

    return () => {
      // set isMounted to false when the component unmounts
      isMounted.current = false;
    };
  }, [storedToken, storedEmail]);

  
  // brings addmoney card to well below it's declaration
  const style ={
    signUp:{
      right: '42%',
      top: '60px',
      position: 'fixed',
    }
  }

  return (
    <div className="addMoney" style={style.signUp}>
      <ToastContainer/>
      <div className="btn">
        <button>Add Money</button>
      </div>
      <div>
        <form >
            <div className="avalBalance">
                <label>Current Balance</label>
                <br/>
                <input type="text" value={getBalance} />
            </div>
        </form>
        <form onSubmit={handleSubmit}>
            <div className="balanceToAdd">
                <label>Amount to Add</label>
                <br/>
                <input type="tel" onChange={handleAddMoney}/>
            </div>
            <button id='btnSubmit' type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}
