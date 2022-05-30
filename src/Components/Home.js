import React from 'react'
import './Home.css'

function Home({ reminders, handleDelete}) {
    return (
        <div>
            {reminders.map((reminder) => (
                <section className="reminder-container" key={reminders.id}>
                    <article>
                        <h2 className='reminder-title'>{reminder.title}</h2>
                        <p> {reminder.note}</p>
                        <h3>{reminder.location}</h3>
                        <h4>{reminder.time}</h4>
                    </article>
                    <aside className='button-container'>
                        <button onClick={()=>handleDelete(reminder.id)}>Delete </button>
                    </aside>
                </section>
            ))}
        </div>
    )
}

export default Home