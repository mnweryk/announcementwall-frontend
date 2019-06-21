import React, {Component} from 'react'
import Axios from 'axios'
import './singleAnnouncement.css'

class SingleAnnouncement extends Component {
    state = {
        title: ' ',
        type: ' ',
        description: ' ',
        id: ' ',
        author: ' ',
        date: ' ',
        color: ' '
    }

    componentDidMount(){
        const link = 'http://localhost:8000/announcements' + this.props.match.url
        Axios.get(link).then(res => {
            this.setState({
                title: res.data.title,
                type: res.data.type,
                description: res.data.description,
                id: res.data._id,
                author: res.data.author,
                date: res.data.date
            })
        })


    }
    
    render(){
        const announcement = this.state;
        let type = announcement.type;

        let color = ' '
        if (type === "buy"){
            color = 'green lighten-3'
        }else if(type === "sell"){
            color = 'red lighten-3'
        }else if(type === "change"){
            color = 'blue lighten-3'
        }
        
        if(color !== ' '){
            return(
                <div className="container row center single-card">
                    <div className={'card col s6 offset-s3 ' + color}>
                        <h5 className="type">{announcement.type}</h5>
                        <div className="divider" />
                        <h3 className="title">{announcement.title}</h3>
                        <div className="divider" />
                        <h5 className="description">{announcement.description}</h5>
                        <p></p>
                            <div>author: {announcement.author}</div>
                            <div>{announcement.date}</div>
                        
                    </div>
                </div>
            )
        }else{        
            return(
                <div></div>
            )
        }
    }
}

export default SingleAnnouncement