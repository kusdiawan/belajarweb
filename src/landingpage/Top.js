import React from 'react';
 
	const handlePesan = () =>{
		alert('Pesan dari TOP')
	}

function panggilPesan(){
	alert ('Selamat belajar java');
}

function tampilPesan(var1, var2){
   	alert(var1);
   	alert(var2);
   }


const Top = () =>{
	return(
	<div>
	<a href="/" onClick={handlePesan}>Halaman Top</a>
	<br/>
	<a href="/" onClick={panggilPesan}>Halaman Bottom</a>
    <br />
    <a href="/" onClick={()=>this.tampilPesan("isi pesan 1", "isi pesan 2")}>Tampilkan Pesan</a> 
	</div>
	)
}

export default Top