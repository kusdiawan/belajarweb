import React from 'react';

//props mengirimkan data ke komponen yang dituju / bisa digunakan berulang
function Header(props){
	return(
	<div>
    <h2>{props.judul}</h2>
    <p>{props.ket}</p>
    </div>
)
}

export default Header;

//mendefiniskan function car lain
// const Header = () =>{
// 	return(
//        <h2>Membuat Function</h2>
// 		)
// }

// //mendefiniskan function car lain
//function Header(){
//	return(
//<h2>membuat function</h2>
//		)

//}


