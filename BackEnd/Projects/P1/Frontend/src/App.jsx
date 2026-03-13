import { useEffect, useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaColonSign, FaPenToSquare } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';

const App = () => {

  const [notes,setNotes] = useState([
        {
            title: "Sprint retro notes",
            description: "Capture what went well, what needs improvement, and one action to try next sprint.",
        },
        {
            title: "Grocery plan",
            description: "Milk, eggs, spinach, oats, and coffee beans. Check pantry before shopping.",
        },
        {
            title: "Project kickoff checklist",
            description: "Define scope, set milestones, confirm stakeholders, and align on success metrics.",
        },
        {
            title: "Interview prep",
            description: "Review system design basics, rehearse two STAR stories, and skim recent company news.",
        }
  ]);

  const baseUri = import.meta.env.VITE_BASE_URL;
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [editingId,setEditingId] = useState(null);
  const [editingText,setEditingText] = useState("");

  function startEdit(note){
    setEditingId(note._id);
    setEditingText(note.description);
  }

  async function saveEdit(id){
    await updateNote(id,editingText);

    setNotes(prev=>
      prev.map(note=>
        note._id == id ?
        {...note, description:editingText}:
        note
      )
    )

    setEditingId(null);
  }

  function toggleForm(event){
    if (event) event.preventDefault();
    setIsFormOpen(prev => !prev);
  }

  async function createNote(title,description){
    try{
      await axios.post(baseUri,{
        title:title,
        description:description
      })
    }
    catch(error){
      console.log(error);
    }
  }

  async function getNotes(){
    try{
      await axios.get(baseUri).then((res) => {
        setNotes(res.data.notes);
      });
    }
    catch (error){
      console.log(error);
    }
  }

  async function deletePost(id) {
    try{
      await axios.delete(`${baseUri}/${id}`).then((res)=>{
        alert(res.data.message);
      })
    }
    catch(error){
      alert("api error Accurs Check logs from console!");
      console.log(error);
    }
  }

  async function updateNote(id,content='test hai ye to'){
    try{
      await axios.patch(`${baseUri}/${id}`,{
        description:content
      }).then((res)=>{
        console.log(res.data);
      })
    }
    catch (error){
      console.log(error);
    }
  }


  function handleSubmit(e){
    e.preventDefault();

    //to acess like this we have to give name attributes to both input and textarea
    const {title,description} = e.target.elements;

    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();

    if(!titleValue || !descriptionValue){
      alert("Title and Description cannot be empty!");
      return;
    }

    createNote(titleValue,descriptionValue);

    //to empty form 
    e.target.reset();
    toggleForm();
  }


  useEffect(() => {
    getNotes();
  }, [handleSubmit,deletePost,updateNote]);


  return (
   <div>
      <form className={`form ${isFormOpen ? '' : 'toggle'}`} onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder='Title'/>
        <textarea name="description" type="text" placeholder='Description' maxLength={300} 
        draggable='false'/>
        <div style={{display:"flex",flexDirection:"column",gap:"1em", marginTop:"auto"}}>
          <button style={{backgroundColor:"white", color:"black"}} className='btn' onClick={toggleForm} 
          >Cancel</button>
          <button className='btn' type="submit">Create</button>
        </div>
      </form>
      <div className={`overlay ${isFormOpen ? '' : 'toggle'}`}></div>
      <div className="notes">
      {
        notes.map((note,i)=>(
          <div className="note" key={i}>
            <h1>{note.title}</h1>
             {
              editingId === note._id ? (
                <textarea draggable="false"
                  value={editingText}
                  onChange={(e)=>setEditingText(e.target.value)}
                />
              ) : (
                <p>{note.description}</p>
              )
            }
            {
            note?._id && //keep the delete btn only on the btns having an id i.e the real one's
            <FaRegTrashAlt className='del' onClick={()=>deletePost(note._id)}/>
            }
            {
            note?._id &&
              editingId === note._id ? (
               <>
               <RxCross2 className='up cr' onClick={()=>setEditingId(null)}/>
               <FaFolder fill='#fff' className='up sv' onClick={()=>saveEdit(note._id)}/>
               </>
              ) : (
                <FaPenToSquare
                  className='up'
                  onClick={()=>startEdit(note)}
                />
              )
            }
          </div>
        ))
      }
      </div>
      <div className='btm'>
        <button onClick={toggleForm} className='btn'>
          What's About Today ?
        </button>
      </div>
   </div>
  )
}

export default App;
