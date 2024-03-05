import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment,incrementByAmount,reset } from './counterSlice'

function Counter() {

    const [amount,setAmount] = useState(0)
    const count = useSelector(state=>state.counterReducer.count)
    const dispatch = useDispatch()
    const handleIncrementByAmount = ()=>{
        if(amount){
            dispatch(incrementByAmount(amount))
        }
        else{
            alert("Enter a valid amount")
        }
    }

  return (
    <>

        <div className='d-flex justify-content-center'>
            <div style={{width: '600px'}} className='p-5 border rounded text-center bg-dark'>
                <h1 style={{fontSize: '100px',color: 'white'}}>{count}</h1>
                <div style={{width: '500px'}} className="d-flex justify-content-between mt-5">
                    <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
                    <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
                    <button onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' placeholder='Increment Amount' />
                    <button onClick={handleIncrementByAmount} className='btn btn-primary ms-4'>INCREMENT BY AMOUNT</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter