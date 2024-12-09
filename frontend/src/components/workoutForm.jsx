import { useState } from "react"

const WorkoutForm = ({ onAddWorkout }) =>{

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e)=>{


        e.preventDefault();

        const workout = {title,load,reps};

        const response = await fetch('http://localhost:5000/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }

           
        })

        const json = await response.json();

        if(!response.ok){
            setError("Errorrrrr");

        }

        if(response.ok){
            setError(null);
            setTitle('');
            setLoad('');
            setReps('');
            console.log("new workout added",json);
            onAddWorkout(json);
        }

    }

    return (
        <form action="" className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            
            <label htmlFor="">Excersize Table:</label>
            <input type="text" 
            onChange={(event)=>{setTitle(event.target.value)}}
            value={title} />

            <label htmlFor="">Load (in kg):</label>
            <input type="number" 
            onChange={(event)=>{setLoad(event.target.value)}}
            value={load} />

            <label htmlFor="">Reps:</label>
            <input type="number" 
            onChange={(event)=>{setReps(event.target.value)}}
            value={reps} />

            <button>Add Workout</button>

        </form>
    )
}

export default WorkoutForm;