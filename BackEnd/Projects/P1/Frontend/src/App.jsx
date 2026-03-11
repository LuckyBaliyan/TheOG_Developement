import { useEffect, useState } from 'react';
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

  console.log(baseUri);

  useEffect(() => {
    axios.get(baseUri).then((res) => {
      setNotes((prev) => [...prev, ...res.data.notes]);
    });
  }, []);


  return (
    <div className="notes">
      {
        notes.map((note,i)=>(
          <div className="note" key={i}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App;
