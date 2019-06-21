import React, {Component} from 'react'
import Axios from 'axios'

class Contact extends Component {
    state = {
        message: ' ',
        authors: [],
        mail: ' '
    }
    componentDidMount(){
        Axios('http://localhost:8000/contact')
        .then(res => {
            this.setState({
                message: res.data.message,
                mail: res.data.mail,
                authors: res.data.autorzy
            })
        })
    }

    render(){
        const message = this.state.message;
        const mail = this.state.mail;
        const authors = this.state.authors;
        const authorList = authors.length ? (
            authors.map(author => {
                return(
                    <span>{author}</span>
                )
            })
        ) : (
            <div>Annonymus</div>
        )
        return(
            <div className="container center">
                <h3 className="center">Contact us!</h3>
                <span>{message}</span>
                <p>You can contact us, by writing an email on mail: {mail}</p>
                <p>{authorList[0]} & {authorList[1]}</p>
            </div>
        )
    }
}

export default Contact