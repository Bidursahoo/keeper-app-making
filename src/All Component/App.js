import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Notes";

// function collect(col){
//   return 
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map(col => <Note key={col.key} title = {col.title} content={col.content} />)}
      <Footer />
    </div>
  );
}

export default App;
