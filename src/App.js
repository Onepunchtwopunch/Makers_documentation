import React, {useState} from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AddTopic from './components/AddTopic/AddTopic';
import EditModal from './components/EditModal/EditModal';
import TopicList from './components/TopicList/TopicList';
import InfoModal from './components/InfoModal/InfoModal';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Test from './components/Test';



const App = () => {

  const [topic, setTopic] = useState([])
  let [modal, setModal] = useState(false)
  let [editTopic, setEditTopic] = useState({})
  let [details, setDetails] = useState({})
  let [detailsModal, setDetailsModal] = useState(false)


  console.log(topic);

  async function handleTopic(newObj) {
    let newTopicList = [...topic]
    newTopicList.push(newObj)

    await setTopic(newTopicList)
  }


  function handleDelete(id) {
    let newTopicList = topic.filter(item => {
      return item.id !== id
    })
    setTopic(newTopicList)
  }

  function handleEdit(index) {
    setModal(true)
    setEditTopic(topic[index])
}

function handleCloseModal () {
    setModal(false)
}
function handleCloseDetailsModal () {
  setDetailsModal(false)
}

function handleSaveTopic (newTopic) {
  let newTopicList = topic.map(item => {
      if(item.id === newTopic.id){
          return newTopic
      }
      return item
  })
  setTopic(newTopicList)
  handleCloseModal()
}
function handleInfo (id) {
  const findObj = topic.find((item) => item.id === id)
  setDetails(findObj);
  console.log(findObj);
  setDetailsModal(true)
}




  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/test" component={Test}/>
          </Switch>
          <Route exact path="/">
            <Main/>
          <AddTopic
          topic = {topic}
          handleTopic = {handleTopic}
          />
          <TopicList
          topic = {topic}
          handleDelete = {handleDelete}
          handleEdit = {handleEdit}
          handleInfo = {handleInfo}
          />
          {modal ?
              <EditModal
              editTopic = {editTopic}
              handleSaveTopic={handleSaveTopic}
              handleCloseModal={handleCloseModal}
              /> 
          : null}   
          {detailsModal ?
              <InfoModal
              details = {details}
              handleCloseDetailsModal={handleCloseDetailsModal}
              /> 
          : null}  
            
          </Route>
          <Footer/>
         
      </BrowserRouter>
     
    </div>
  )
}

export default App
