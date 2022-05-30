import {useState} from 'react'
import './Reminder.css';

function Reminder({reminders}) {

    const [events, setEvents] =useState('')
    const [note, setNote] = useState('')
    const [location, setLocation] = useState('')
    const [time, setTime] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const reminder = {events, note, location, time};
        console.log(reminder);

    }

    return (
        <section className='new-reminder-container'>
            <h1>Create a New Reminder</h1>
            <form onSubmit={handleSubmit}>
                <label>Event:</label>
                <input
                    type='text'
                    required
                    value={events}
                    onChange={(e)=> setEvents(e.target.value)}
                ></input>

                <label>Note:</label>
                <textarea
                    type='text'
                    required
                    value={note}
                    onChange={(e)=> setNote(e.target.value)}
                ></textarea>

                <label>Location:</label>
                <input
                    type='text'
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                ></input>

                <label>Time:</label>
                <input
                    type='text'
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                ></input>
                 <button>Add a reminder</button>
            </form>
        </section>
    )
}

export default Reminder