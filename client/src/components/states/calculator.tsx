import { useRef, useState } from "react";


const SimpleCalculator = () => {
    
    const [result, enterValueToCalc] = useState(0)
    const resultRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null)
    
    const addValue = (e: any) => {
        e.preventDefault();
        enterValueToCalc((result)=>result + Number(inputRef.current!.value))
    }

    const resetInputValue = (e:any)=>{
        e.preventDefault();
        inputRef.current!.value = "0";
    }

    const resetResult = (e:any)=>{
        e.preventDefault();
        enterValueToCalc((prevValue)=> prevValue * 0)
    }

    return (
        <div>
            <form>
                <p ref={resultRef}>{result}</p>
                <input type="number" ref={inputRef} pattern="[0-9]" placeholder="Type a number" className="m-3"/>
                <button className="btn btn-primary px-2 mx-1" onClick={addValue}>Add</button>
                <button className="btn btn-primary px-1 mx-1" onClick={resetInputValue}>Reset Input</button>
                <button className="btn btn-primary px-1 mx-1" onClick={resetResult}>Reset Result</button>


            </form>
          
        </div>
    )


}

export default SimpleCalculator;
