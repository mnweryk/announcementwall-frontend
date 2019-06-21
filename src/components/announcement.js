import React from 'react'

const Announcement = ({announcements}) => {

    
    return(
        <div className="container row wrap">
        {announcements.map(announcement => {
            let color = "col s4 card hoverable ";

            if(announcement.type === "buy"){
                color += "green lighten-3"
                console.log(color)
            }
            else if(announcement.type === "sell"){
                color += "red lighten-3"
                console.log("sell")
            }
            else if(announcement.type === "change"){
                color += "blue lighten-3"
                console.log("change")
            }
            else{
                console.log("There's a mistake")
            }


            return(
                <div className={color} key={announcement._id}>
                    {/* <div>ID: {announcement._id}</div> */}
                    <div>{announcement.date}</div>
                    <div className="">{announcement.type}</div>
                    <div className="divider black" />

                    <div className="card-title truncate">{announcement.title}</div>
                    <div className="divider black" />
                    <div className="truncate">{announcement.description}</div>
                    
                </div>
        )})}
        </div>
    )}


export default Announcement;