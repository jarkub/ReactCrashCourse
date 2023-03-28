import PropTypes from 'prop-types'
import { useState } from 'react'
import Task from './Task'

// const tasks = [
//     {
//         id: 1,
//         text: "Doctors Appointment",
//         day: "Feb 5th at 2:30pm",
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: "Meeting at School",
//         day: "Feb 6th at 1:30pm",
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: "Food Shopping",
//         day: "Feb 5th at 2:30pm",
//         reminder: false,
//     },
// ]

const Tasks = ({ tasks }) => {

  // tasks is an array
  // .map() creates a list from an array
    return (
    <>
    {tasks.map(
        (task) => (
                <Task key={task.id} task={task} />
            )
        )
    }
    </>
  )
}

Tasks.propTypes = {

}

export default Tasks
