import {useState, useRef, useEffect} from "react"
import styles from "./calculator.module.css"
export default function Calculator (){
const [input, setInput] = useState("")
const [result, setResult] = useState("")
const inputRef = useRef(null)
useEffect (()=> {
    const storedResult = localStorage.getItem("result");
    if(storedResult){
      setResult(JSON.parse(storedResult))
    }
      },[])
    
      useEffect (()=> {
         localStorage.setItem("result", JSON.stringify(result));
    
          },[result])

function equal (){

    let ans=eval(input)
    setResult(ans)
    if (input.includes("**")){
        setResult("syntax error")
        return;
    }
else if (input.includes("//")){
        setResult("syntax error")
        return;
    }
    else if (input ===""){
        setResult("")
        return;
    }

}
function del(){
    setInput(input.slice(0, -1))
}
function clear(){
    setInput("")
    setResult("")
}
function per(){
   const percentage = eval(input)/100
   setResult(percentage)
   if (input ===""){
    setResult("")
    return;
}
 
}
function handle(number){ 
const newValue = input + number;
setInput(newValue)
}
useEffect (() =>{
inputRef.current.scrollLeft =
 inputRef.current.scrollWidth;
},[input])



    return(
        <>
      
        <div className={styles.top}>
         <input type="text" ref={inputRef} onChange={() =>{}} className={styles.input} placeholder="0" value={input} />
         <input className={styles.result}  onChange={() =>{}} value={result} />
        </div>
        <div className={styles.calculator}>
        <div className={styles.firstBody}>
            <button className={styles.blueBtn} onClick={()=>clear()}>AC</button>
            <button className={styles.blueBtn} onClick={()=>del()}>DEL</button>
            <button className={styles.blueBtn} onClick={()=>per()}>%</button>
            <button onClick={()=> handle("/")} className={styles.orangeBtn} >&#247;</button>
            <button onClick={()=> handle("7")} className={styles.grayBtn} >7</button>
            <button onClick={()=> handle("8")} className={styles.grayBtn} >8</button>
            <button onClick={()=> handle("9")} className={styles.grayBtn}>9</button>
            <button onClick={()=> handle("*")} className={styles.orangeBtn} >&#215;</button>
            <button onClick={()=> handle("4")} className={styles.grayBtn} >4</button>
            <button onClick={()=> handle("5")} className={styles.grayBtn} >5</button>
            <button onClick={()=> handle("6")} className={styles.grayBtn}>6</button>
            <button onClick={()=> handle("-")} className={styles.orangeBtn}>-</button>
            <button onClick={()=> handle("1")} className={styles.grayBtn} >1</button>
            <button onClick={()=> handle("2")} className={styles.grayBtn} >2</button>
            <button onClick={()=> handle("3")} className={styles.grayBtn}>3</button>
            <button onClick={()=> handle("+")} className={styles.orangeBtn} >+</button>
            </div>
            <div className={styles.secondBody}>
            <button onClick={()=> handle("0")} className={styles.zeroBtn} >0</button>
            <button onClick={()=> handle(".")} className={styles.grayBtn} >&#183;</button>
            <button className={styles.orangeBtn} onClick={()=>equal()}>=</button>
        </div>
        </div>
        </>
    )
}

