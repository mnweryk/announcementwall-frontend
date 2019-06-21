import React, {Component} from 'react'
import Announcement from './announcement';
import Axios from 'axios'

class Announcements extends Component {
    state = {
        announcements: [ ]
    }

    componentDidMount(){
        Axios('http://localhost:8000/announcements')
        .then( res => {
            console.log(res.data)
            this.setState({
                announcements: res.data
            })
        })
    }

    render(){
        return(
            <div className="container center">
                
                <Announcement announcements={this.state.announcements}/>
                
            </div>
        )
    }
}

export default Announcements