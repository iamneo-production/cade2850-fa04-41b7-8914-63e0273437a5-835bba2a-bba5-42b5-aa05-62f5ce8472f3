import React from 'react'
import { useSelector, UseSelector } from 'react-redux'
function Demo() {

    const cust = useSelector((state)=>state.customers.value)

  return (
    <div>
        {cust.name}
    </div>
  )
}

export default Demo