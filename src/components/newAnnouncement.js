import React, {Component} from 'react'
import './newAnnouncement.css'
 

class NewAnnouncement extends Component{

    state ={
        type: "buy"
    }
    submit = (e) =>{
        e.preventDefault();
        console.log(this.state);

    }
    render(){



        return(
            
        <form className="container center row" action="#">
            <p className="">
                <label className=" col s4">
                    <input className="with-gap" label="buy" name="group1" type="radio" onChange={e => this.setState({type: "buy"})} />
                    <span label="buy">Buy</span>
                </label>
                <label className=" col s4">
                    <input className="with-gap" name="group1" type="radio" onChange={e => this.setState({type: "sell"})} />
                    <span>Sell</span>
                </label>
                <label className=" col s4">
                    <input className="with-gap" name="group1" type="radio" onChange={e => this.setState({type: "change"})}  />
                    <span>Change</span>
                </label>
            </p>
            <p className="center col s4 offset-s4"> 
                    <input type="text" placeholder="Title"  onChange={e => this.setState({title: e.target.value})}/>
            </p>

            <p>
                <textarea type="text" placeholder="Description" onChange={e => this.setState({description: e.target.value})}></textarea> 
            </p>
            <p className="center col s4 offset-s4"> 
                    <input type="text" placeholder="Author" onChange={e => this.setState({author: e.target.value})}/>
            </p>
            <p className="col s12"><
                button className="btn waves-effect waves-light" type="submit" onClick={e => this.submit(e)}> Submit </button>
            </p>

        </form>
        
        )
    }
}

export default NewAnnouncement