import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { MdDelete } from "react-icons/md";

const WorkoutDetails =({workout,onAddWorkout})=>{

    const handleDeleteClick = async()=>{
        const response = await fetch('http://localhost:5000/api/workouts/'+workout._id,{
            method:'DELETE'
        })

        const json = await response.json();
        console.log(json);
        onAddWorkout();

    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg) : </strong>{workout.load}</p>
            <p><strong>Reps : </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        
            <span onClick={handleDeleteClick}><MdDelete /></span>

        </div>

    )
}

export default WorkoutDetails;