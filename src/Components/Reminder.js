import { useState, useEffect, useRef } from 'react'
import './Reminder.css';
import { useHistory } from "react-router-dom";

function Reminder({ handleSubmit}) {

    const [title, setTitle] =useState('')
    const [note, setNote] = useState('')
    const [location, setLocation] = useState('')
    const [time, setTime] = useState('')

    const history = useHistory();

    const focusRef = useRef(null);
    useEffect(() => {
        focusRef.current.focus()
    },[])

  const handleClick=(e)=>{
      e.preventDefault();
      handleSubmit(title, note, location, time)
      history.push("/");


  }

    return (
        <section className='new-reminder-container'>
            <h1>Create a New Reminder</h1>
            <form onSubmit={handleClick}>
                <label>Event:</label>
                <input
                    type='text'
                    required
                    value={title}
                    ref={focusRef}
                    onChange={(e)=> setTitle(e.target.value)}
                ></input>

                <label>Note:</label>
                <textarea
                    type='text'
                    required
                    value={note}
                    ref={focusRef}
                    onChange={(e)=> setNote(e.target.value)}
                ></textarea>

                <label>Location:</label>
                <input
                    type='text'
                    required
                    value={location}
                    ref={focusRef}
                    onChange={(e) => setLocation(e.target.value)}

                ></input>

                <label>Time:</label>
                <input
                    type='text'
                    required
                    value={time}
                    ref={focusRef}
                    onChange={(e) => setTime(e.target.value)}
                ></input>
                <input type='submit' className='btn'/>
            </form>
        </section>
    )
}

export default Reminder