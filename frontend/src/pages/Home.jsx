import { useEffect,useState } from "react";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/workoutForm";

const Home = () =>{

    const [workouts,setWorkouts] = useState(null);

    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch('http://localhost:5000/api/workouts')
            const json = await response.json();

            if(response.ok)
            {
                setWorkouts(json);

            }

        }

        fetchWorkouts()
    },[])

    const addWorkout = async(newWorkout) => {
        
        const response = await fetch('http://localhost:5000/api/workouts')
        const json = await response.json();

            if(response.ok)
            {
                setWorkouts(json);

            }

        
        
    };

 

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(

                   
                    <WorkoutDetails key={workout._id} workout={workout} onAddWorkout={addWorkout}/>
                ))}
            </div>
            <WorkoutForm onAddWorkout={addWorkout}/>
        </div>
    )
}

export default Home;