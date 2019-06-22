import React, {Component} from 'react'
import './newAnnouncement.css'
import Axios from 'axios'
 

class NewAnnouncement extends Component{

    state ={
        type: 'buy',
        title: ' ',
        author: 'annonymus',
        description: ' '
    }
    submit = (e) =>{
        e.preventDefault();
        const token = 'Bearer ' + localStorage.getItem('user-token')
        let data = this.state;
        console.log(JSON.stringify(data))

        Axios({
            method: 'post',
            url: 'http://localhost:8000/announcements',
            headers: {'Content-Type': 'application/json',
                        'Authorization': token
                    },
            data: JSON.stringify(data)
        })
        .then(res =>{
            console.log(res)
        }
        )
        .catch(err =>{
            this.setState({
                message: "You are not logged in!"
            })
            console.log("err")
        }
        )

    }
    render(){



        return(
        <div>
            <p className=" center red-text h3">{this.state.message}</p>
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
        </div>
        )
    }
}

export default NewAnnouncement