import React from 'react';
import './App.css';
import Top from './landingpage/Top';
import Header from './landingpage/Header';
import Footer from './component/Footer';

function App() {
  return (
   <div>
   <Header/>
   <br/> <br />
   <Top/>
   <h1>Belajar Riect di hari Jumat</h1>
   <br /> <br />
   <Footer pesanDariProps = "isi pesan props"/>
   </div>

   );
 }

 export default App;
