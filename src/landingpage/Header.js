import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
  	super(props)
  	this.state = {
	     pesanstate : 'isi pesan dari state'
    }
	this.handlePesanHeader = this.handlePesanHeader.bind(this);
	this.panggilState = this.panggilState.bind(this);
	this.handlePesanRender = this.handlePesanRender.bind(this);
 }

  handlePesanHeader(){
  	alert('Pesan dari header');
  }

  panggilState(){
	alert (this.state.pesanstate)
  }


  handlePesanRender(valueke1, valueke2, e){
  	e.preventDefault()

  	alert(valueke1);
  	alert(valueke2);
  }



  render(){
    return(
    	<div>
       <a href="/" onClick={this.handlePesanHeader}> Klik Header </a>
       <br />
	   <a href="/" onClick={this.panggilState}> Pesan State</a>
	   <br />
	   <a href="/" onClick={(e)=>this.handlePesanRender("Dari Render Kelas", "Pesan 2 ", e)}>Klik Render</a>
	   </div>
    	)
  }

}

export default Header;