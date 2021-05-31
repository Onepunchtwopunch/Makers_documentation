import React from 'react'
import "./TopicList.css"

const TopicList = (props) => {
    return (
        <div className="container">
            <div className="list">
                {props.topic.map((item, index) => 
                <div>
                    <div>
                        <button key={item.id} className="list-id">{item.name}</button> 
                    </div>
                    <div>
                        <button onClick={()=> 
                            props.handleDelete(item.id)}>&times;</button>
                        <button onClick={()=> 
                            props.handleEdit(index)}>edit</button>
                        <button onClick={()=> 
                            props.handleInfo(item.id)}>info</button>
                    </div>
                </div>
            )}
            </div>  
        </div>
    )
}

export default TopicList
