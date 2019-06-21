import React from 'react'

const Announcement = ({announcements}) => {    
    return(
        <div className="container row">
        {announcements.map(announcement => {
            return(
                <div className="col s4 card" key={announcement._id}>
                    {/* <div>ID: {announcement._id}</div> */}
                    <div>{announcement.date}</div>
                    <div className="">{announcement.type}</div>
                    <div className="divider" />

                    <div className="card-title">{announcement.title}</div>
                    <div className="divider" />
                    <div>{announcement.description.slice(0,20)}...</div>
                    
                </div>
        )})}
        </div>
    )}


export default Announcement;