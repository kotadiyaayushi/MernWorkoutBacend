import { WorkoutsContext } from "../context/Workcontext";
import { useContext } from "react";

const UseWorkoutsContext = () =>{

    const context = useContext(WorkoutsContext);

    if(!context){
        console.log("hy")
        throw Error("context provider error");
        
    }

    return context;
}

export default UseWorkoutsContext;