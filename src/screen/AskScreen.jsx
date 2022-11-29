import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Ask from "../Ask"

const AskScreen = () => {
    let [text, settext] = useState(false)
    if (localStorage.getItem('ball') == null) {
        localStorage.setItem('ball', 0)
    }


    let [inp, setinp] = useState()

    let param = useParams()
    let fill = Ask.filter(i => i.ask_id == param.id)

    const Points = () => {

        if (parseInt(param.id) > Ask.length) {
            settext(true)
        }
        if( localStorage.getItem('token') == null ){
            window.location.href = '/'
        }
    }
    let func2 = () => {

        if (inp == 'true') {
            let loc = parseInt(localStorage.getItem('ball')) + 5
            localStorage.setItem('ball', loc)
            console.log(localStorage.getItem('ball'));
            // navigate('/ask/' + (parseInt(param.id) + 1))
            window.location.href = '/ask/' + (parseInt(param.id) + 1)
        } else {
            window.location.href = '/ask/' + (parseInt(param.id) + 1)
        }


    }
    let goOut = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('ball')
        window.location.href = '/'
    }

    useEffect(() => {
        Points();
    }, [])

    return (
        <div>
            {fill.map(i =>
                <div className=" mx-auto col-lg-4  ">
                    <p className=" my-5 "  >
                        <b>{i.ask_id} . {i.ask} </b>  <br /> <br />

                        <div className="my-5 text-start col-lg-12 mx-auto answer">
                            <input type="radio" name="answer" onChange={(event) => { setinp(event.target.value) }} value={i.answer_0.status} />
                            <b name="answer" className="mx-2" >  {i.answer_0.text}</b><br />
                            <input onChange={(event) => { setinp(event.target.value) }} type="radio" name="answer" value={i.answer_1.status} />
                            <b name="answer" className="mx-2" >  {i.answer_1.text}</b><br />
                            <input onChange={(event) => { setinp(event.target.value) }} type="radio" name="answer" value={i.answer_2.status} />
                            <b name="answer" className="mx-2" >  {i.answer_2.text}</b><br />
                            <input onChange={(event) => { setinp(event.target.value) }} type="radio" name="answer" value={i.answer_3.status} />
                            <b name="answer" className="mx-2" >  {i.answer_3.text}</b><br />
                        </div>
                    </p>
                </div>


            )}
            <div className="text-center text " >


                {text ? <><h4> {localStorage.getItem('token')} : {localStorage.getItem('ball')} балл  
                </h4><br />
                <div onClick={goOut} className="col-2 mx-auto ">
                        <p className="  border border-primary rounded px-5  py-2" >  Выйти  </p> </div>
                </> : <button onClick={func2} className="mt-3  px-5 py-2 rounded border-0 text-white bg-success" >  ДАЛЕЕ </button>}


            </div>


        </div>
    )

}
export default AskScreen