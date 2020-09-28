import React, { Component } from 'react';

class Footer extends Component {
  constructor(props){
  	super(props)
  	this.state = {
	     pesanDariState : 'isi pesan dari State awal',
    }
    this.ubahDataState = this.ubahDataState.bind(this)
 }


ubahDataState(e){
  e.preventDefault()

  //perintah untuk mengubah value atau data atau isi yang berad di dalam state+
  this.setState({pesanDariState : "Data Akan Berubah"})
}

  render(){
    return(
    	<div>
       <p>{this.props.pesanDariProps}</p>
       <p>{this.state.pesanDariState}</p>
       <a href="/" onClick={(e)=>this.ubahDataState(e)}>Ubah Data</a>
   	   </div>
    	)
  }

}

export default Footer;