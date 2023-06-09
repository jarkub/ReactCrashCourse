import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
      // [<var name>, <update method> ]
    // states are immutable
    // use setTasks(<[new arr]>) to change tasks
const [tasks, setTasks] = useState([
  {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
  },
  {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
  },
  {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
  },
])

// Delete Task
const deleteTask = (id) => {
  console.log('delete', id);
}

  return (
    <div className='container'>
      <Header title={'Task Tracker'} />
      <Tasks tasks={tasks} onDelete={deleteEvent} />
    </div>
  );
}

export default App;
