import React, {useState} from 'react'
import "./AddTopic.css"

const AddTopic = (props) => {
    console.log(props);

    const [name, setName] = useState ('');
    const [img, setImg] = useState ('');
    const [description, setDescription] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleImg = (e) => {
        setImg(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }


    let handleAdd = () => {
        if(!name.trim() ||  !img.trim() || !description.trim()){
            alert('Fill fields')
            return
        }
        const newTopic = {
            name: name,
            img: img,
            description: description,
            id: Date.now()
        }
        props.handleTopic(newTopic)

        setName('')
        setImg('')
        setDescription('')
    }

    return (
        <div className="add-topic">
            <div className="container">
                <input className="topic-inp"
                    value={name}
                    onChange={handleName}
                    type="text"
                    placeholder="Название..."
                />
                <input className="topic-inp"
                    value={img}
                    onChange={handleImg}
                    type="text"
                    placeholder="img(url...)"
                />
                <input className="topic-inp"
                    value={description}
                    onChange={handleDescription}
                    type="text"
                    placeholder="описание..."
                />    
                <button className="topic-btn"
                    onClick={handleAdd}>
                    Добавить   
                </button>  
            </div>
        </div>
    )
}

export default AddTopic
