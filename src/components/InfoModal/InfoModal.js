import React  from 'react'
import "./InfoModal.css"

const InfoModal = (props) => {
    
    console.log("props infomodal", props)
    return (
        <div className="container">
            <div className='main-modal'>
                <div className='inner-modal'>
                    <div className='close'>
                        <button onClick={props.handleCloseDetailsModal}>&times;</button>
                    </div>
                    <div>
                        <div className="info-name">{props.details.name}</div>
                        <img src={props.details.img}/>
                        <div className="info">{props.details.description}</div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal
