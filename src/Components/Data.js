import { useState } from 'react'
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Reminder from './Reminder';
function Data() {

    const [reminders, setReminders] = useState([{
        title: "Attend Betty's valedictory service",
        note: "Pick up a silver necklace from the ozark jewelry shop for Betty on your way to the veledictory service.",
        location: " Queens Hall street",
        time: '4pm',
        id: 1
    },

    {
        title: "Appointment with Doctor Shantel",
        note: "A tooth checkup with doctor Shantel to get diagnosis for toothache",
        location: "Royal hospital",
        time: '10am',
        id: 2
    },
    {
        title: "Groceries",
        note: " Make a quick stop at Merka organico to pick a few inventories.",
        location: "Merka Organico",
        time: '6pm',
        id: 3
    },
    {
        title: "Work",
        note: "Complete the business plan and send it in for review",
        location: "Office",
        time: '8am',
        id: 4
    },
    {
        title: "Mail",
        note: "Send a mail to the head office",
        location: "Swift Networks",
        time: '11am',
        id: 5
    }])

    const handleDelete = (id) => {
        const newreminder = reminders.filter(reminder => reminder.id !== id)
        setReminders(newreminder)
    }

    return (
        <section>
            <Router>
                <Navbar />
                <Switch>  
                    <Route exact path="/"> 
                        <Home reminders={reminders} handleDelete={handleDelete} />
                    </Route>   
                    <Route path="/Reminder">
                        <Reminder reminders={reminders} handleDelete={handleDelete} />
                    </Route>                       
                </Switch>
            </Router>


        </section>
    )
}

export default Data;