import React , {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';





function CreateArea(props) {


  const [keep , setKeep] = useState({
    title:"",
    content:""
  });


  function keepText(event){
    const {name , value} = event.target;
    setKeep({
      ...keep,
      [name]: value
    })
  }


  return (
    <div>
      <form className="create-note">
        <input onChange={keepText} name="title" type={props.inputType} placeholder="Title" value={keep.title}/>
        <textarea onChange={keepText} onClick={()=>{
          props.updateFocus();
        }} name="content" placeholder="Take a note..." rows={props.row}  value={keep.content}/>
        <Zoom in={props.effect}>
        <Fab type="button" onClick={()=>{
            if(keep.title.length <= 0){
              alert("Tittle cannot be empty")
            }else if(keep.content.length <= 0){
              alert("Content cannot be empty")
            }else{
              props.addNote(keep);
              setKeep(
                {
                  title:"",
                  content:""
                }
              )
            }
        }}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
