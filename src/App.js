import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MetaDataNavbar from "./Components/Customer/MetaDataNavbar/MetaDataNavbar";

import CustNavbar from './Components/Customer/CustNavbar/CustNavbar'
import CustHome from './Components/Customer/CustHome/CustHome';
import AddMoney from './Components/Customer/AddMoney/AddMoney';
import CustPortfolio from './Components/Customer/CustPortfolio/CustPortfolio';
import History from './Components/Customer/History/History';
import SignUpCard from './Components/Customer/SignUpCard/SignUpCard';
import CustWatchlist from './Components/Customer/CustWatchlist/CustWatchlist';
import CustTrade from './Components/Customer/CustTrade/CustTrade';
import CustomStrap from './Components/Customer/CustomStrap/CustomStrap'
// import MetaDataNavbar from './Components/Customer/MetaDataNavbar/MetaDataNavbar';
// import BuySellModal from './Components/Customer/BuySellModal/BuySellModal'
import CustMetaData from './Components/Customer/CustMetaData/CustMetaData'
import CustForum from './Components/Customer/CustForum/CustForum';
// import CustStockShow from './Components/Customer/CustStockShow/CustStockShow'



function App() {

  return (
    <>
    <BrowserRouter>
        <CustNavbar/>
        <CustomStrap/>
        <Routes>
          <Route exact path="/" element={<CustHome/>}/>
          <Route exact path='/meta-data/:symbol}' element={<CustMetaData/>}/>
          <Route path="/addMoney" element={<AddMoney/>}/>
          <Route path="/myPortfolio" element={<CustPortfolio/>}/>
          <Route path="/myWatchlist" element={<CustWatchlist/>}/>

          <Route path="/trade" element={<CustTrade/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/forum" element={<CustForum/>}/>
          <Route path="/signIn" element={<SignUpCard/>}/>
          <Route path="/metaData" element={<CustMetaData/>}/>
    
        </Routes>
    </BrowserRouter>
     {/* <CustMetaData/>  */}
    {/* <CustForum/> */}
    </>
  );
}

export default App;
//the file in e drive
