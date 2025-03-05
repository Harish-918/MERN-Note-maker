import './App.css';
import React , {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9418/addNotes', {subject, description})
    .then(result => {
      console.log(result);
      fetchNotes();
      setSubject(''); // Clear input fields
      setDescription('');
    })
    .catch(err => console.error(err))
  }

  const fetchNotes = () => {
    axios.get('http://localhost:9418/getNotes')
    .then(result => setNotes(result.data))
    .catch(err => console.error(err))
  };

  useEffect(()=>{
    fetchNotes();
  }, []);



  return (
    <div className="notemaker-container">
      <center><h2 className="title lead" style={{fontSize: '2.1rem', fontWeight: '600', color: '#333'}}>Notemaker - Mark the Note</h2></center>
      <form className="note-form" onSubmit={addNote} style={{maxWidth: '500px', margin: '0 auto', padding: '20px'}}>
        <div className="input-group form-floating mb-3">
            <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} required className="input form-control" id="floatingInput" 
            style={{
              borderRadius: '8px',
              padding: '10px',
              fontSize: '1rem',
              transition: '0.3s ease-in-out',
            }}/>
            <label htmlFor='subject' className="label" for="floatingInput" style={{fontWeight: '500'}}>Subject</label>
        </div>

        <div className="input-group form-floating mb-3">
            <textarea name='description' value={description} onChange={(e) => setDescription(e.target.value)} required className="input form-control" id="floatingTextarea2" 
              style={{
                height: '120px',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '1rem',
                transition: '0.3s ease-in-out',
              }}
            />
            <label htmlFor='description' className="label" for="floatingInput" style={{fontWeight: '500'}}>Description</label>
        </div>

        <center><button type='submit' typeof="button" className="btn btn-success" 
          style={{
            padding: '10px 20px',
            fontSize: '1.1rem',
            borderRadius: '8px',
            fontWeight: '500',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >Add Note</button></center>
      </form>

      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <h4 className="note-subject">{note.subject}</h4>
            <p className="note-description">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
