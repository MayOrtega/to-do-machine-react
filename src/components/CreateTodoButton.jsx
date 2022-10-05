import React from 'react'

const CreateTodoButton = (props) => {
const onClickButton = (msg) => {
  alert('msg')
}



  return (
    <>
     <button className='CreateTodoButton' onClick={()=>onClickButton('aquí debería abrirse un modal')}>+</button>
    </>
  )
}

export default CreateTodoButton