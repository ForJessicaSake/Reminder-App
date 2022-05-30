import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'


function Home({ reminders, handleDelete}) {
    
      const heroVariant = {
    hidden: {
      x: '-100vw'
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5, duration: 5, type: 'spring', stiffness: 200
      }
    }

  }
    return (
        <motion.section className='main-container'
            variants={heroVariant}
            initial='hidden'
            animate='visible'>

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
        </motion.section>
    )
}

export default Home