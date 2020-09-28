import React from 'react';
import './App.css';
import Header from './halaman/Header'
import Footer from './halaman/Footer'

function App() {
  return (
   <div>
   {
    //memanggil props
   }
   <Header judul = "Header 1" ket="keterangan 1" />
   <Header judul = "Header 2"/>
   <Header judul = "Header 3" ket="keterangan 1" />

   <h1> Belajar React Hari ke 2 </h1>
   <Footer judul = "Footer 1" ket="keterangan 1" />
   <Footer judul = "Footer 2"/>
   <Footer judul = "Footer 3" ket="keterangan 1" />
   </div>

     );
}

export default App;
