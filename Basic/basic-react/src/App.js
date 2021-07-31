// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       Testing purpose
//     </div>
//   )
// }

const App = () => {
  return(
    <>
      <MyName />
      <h1>Hello World!</h1>
    </>
  )
}

const MyName = () => {
  return(
    <h3>This is Nested Component</h3>
  )
}

export default App;