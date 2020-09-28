import React, { Component } from 'react';

class Registrasi extends Component{
	constructor(props){
		super(props)
		this.state ={
			judul : 'Contoh Judul',
			contohPerubahan : 'Judul yang akan diubah',
			valueFirstName: '',
			valueLastName: '',
			valueAlamat: '',
			valueKodePos: ''
		}
			this.ubahState = this.ubahState.bind(this)
		}

	ubahState(namaValue, e){
		e.preventDefault()
		//perubahan state secara reguler    
    	//this.setState({[namaValue]: e.target.value})

    	//perubahan state secar Asynchronous
    	var tampungData = e.target.value
    	this.setState(function(state, props){
    		return{
    			[namaValue]: tampungData
    		}
    	});
	}

	
	render(){
		return(
			<div>
			<h5>Contoh 1</h5>
			<p>{this.state.valueFirstName}</p>
			<input value={this.state.valueFirstName} onChange={(e)=>this.ubahState("valueFirstName", e)}/>
			<h5>-------------------------</h5>


			<h5>Contoh 2 </h5>
			<p>{this.state.valueLastName}</p>
			<input value={this.state.valueLastName} onChange={(e)=>this.ubahState("valueLastName", e)} />
			<h5>-------------------------</h5>

			<h5>Contoh 3 </h5>
			<p>{this.state.valueAlamat}</p>
			<input value={this.state.valueAlamat} onChange={(e)=>this.ubahState("valueAlamat", e)} />
			<h5>-------------------------</h5>

			<h5>Contoh 4 </h5>
			<p>{this.state.valueKodePos}</p>
			<input value={this.state.valueKodePos} onChange={(e)=>this.ubahState("valueKodePos", e)} />
			<h5>-------------------------</h5>

			</div>
		)
	}
}


export default Registrasi;