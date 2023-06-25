import React , {useState} from "react";
import Header from "./Minor Components/Header";
import Footer from "./Minor Components/Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";
// function collect(col){
//   return 
// }


function App() {
  const [notesCollections , setNotesCollections] = useState([]);
  const [focus , setFocus] = useState(false);

  function addNote(note){
    setNotesCollections(
      [
        ...notesCollections,
        note
      ]
    )
  }
  function deleteNote(id){
    setNotesCollections(
      notesCollections.filter((val , index)=>{
        return index !== id;
      })
    )
  }
  function changeFocus(){
    setFocus(true)
  }
  
  return (
    <div>
      <Header />

      {
          (!focus) ? <CreateArea addNote={addNote}  row={1} effect={false} inputType={"hidden"} updateFocus = {changeFocus}/> :
        <CreateArea addNote={addNote}  row={3} effect={true} inputType={"text"} updateFocus = {changeFocus}/>
      }
      {
        notesCollections.map((x,index)=>{
          return <Note key={index+2} id={index} title={x.title} content={x.content} delete={deleteNote}/>
        })
      }
      
      <Footer />
    </div>
  );
}

export default App;
