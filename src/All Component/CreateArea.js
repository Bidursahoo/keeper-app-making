import React , {useState} from "react";

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
      <form>
        <input onChange={keepText} name="title" placeholder="Title" value={keep.title}/>
        <textarea onChange={keepText} name="content" placeholder="Take a note..." rows="3"  value={keep.content}/>
        <button type="button" onClick={()=>{
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
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
