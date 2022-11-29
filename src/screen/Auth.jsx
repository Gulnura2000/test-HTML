import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Auth = () => {
    let navigate = useNavigate()
    let [inp, setinp] = useState()
    let showinp = (event) => {
        setinp(event.target.value)
    }
    console.log(inp);
    let func =()=>{
        if(inp != null) {
            localStorage.setItem('token' ,inp)
            navigate("/ask/1")
           
        }else {
            alert('Пожалуйста, напишите свое имя')
        }
    }

    return (
        <div className="text-center mt-5 " >
            <h1>Начать тест по основам HTML</h1> <br />
            <h4>Чтобы начать тест необходимо представиться </h4> <br />
            <h4>Как вас зовут?</h4> <br />
            <div className="col-md-2 mx-auto ">
                <input type="text" onInput={showinp} className="form-control" />
                <button onClick={func} className="mt-3 px-5 py-2 rounded border-0 text-white bg-success" >Начать</button>
            </div>

        </div>
    )
}

export default Auth