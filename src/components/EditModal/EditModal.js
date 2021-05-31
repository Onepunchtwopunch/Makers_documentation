import React, {useState} from 'react'
import "./EditModal.css"

const EditModal = (props) => {
    const [name, setName] = useState(props.editTopic.name)
    const [img, setImg] = useState(props.editTopic.img)
    const [description, setDescription] = useState(props.editTopic.description)

    function handleSave (item) {
        const obj = {
            name: name,
            img: img,
            description: description,
            id: props.editTopic.id
        }
        props.handleSaveTopic(obj)
    }


    return (
        
        <div className='edit-main-modal'>
            <div className='edit-inner-modal'>
                <div className='close'>
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    type='text' 
                    value={name} // fix it
                    className='inp-edit'
                />
                <input 
                    onChange={(e) => setImg(e.target.value)}
                    type='text' 
                    value={img} // fix it
                    className='inp-edit'
                />
                <input 
                    onChange={(e) => setDescription(e.target.value)}
                    type='text' 
                    value={description} // fix it
                    className='inp-edit'
                />
                <button className="btn"
                    onClick={handleSave}
                >save</button>
            </div>
        </div>
    )
}

export default EditModal
