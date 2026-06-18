# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

// import {React, useState} from "react"

// function App() {
//   const [clicked1, setClicked1] = useState(false)
//   const [clicked2, setClicked2] = useState(false)
//   let name = "reactJs"

// let students = [
//   {id: 1, name: "saima"},
//   {id: 2, name: "Khan"},
//   {id: 3, name: "Sara"},
//   {id: 4, name: "Sara"}
// ]


//   return (
//     <>
//     <h2>hello {name}</h2>
//     <ul>
//       {students.map((student) => (
//         <li key={student.id}>{student.name}</li>
//       ))}
//     </ul>
//     <button onDoubleClick={() => setClicked1(!clicked1)}>Button 1</button>
//     <button onDoubleClick={() => setClicked2(!clicked2)}>Button 2</button>
//     {clicked1 && <p>Button 1 was double-clicked!</p>}
//     {clicked2 && <p>Button 2 was double-clicked!</p>}
//     </>




//   )
// }

// export default App

import Heading2 from "./components/H2";
import Para from "./components/P";
import "./style.css"
function App() {
  //   let name = "reactJs"

  // let students = [
  //   {id: 1, name: "saima"},
  //   {id: 2, name: "Khan"},
  //   {id: 3, name: "Sara"},
  //   {id: 4, name: "Sara"}
  // ]

  // const heading2= {
  //   color: "blue",
  // }



  return (
    <>
      <Heading2 heading="Vuetify One" />
      <Para para="Vuetify provides a comprehensive collection of components that can be used to build your application." />
      <Heading2 heading="More than just Components" />
      <Para para="Vuetify is proudly supported by these amazing companies and individuals. If you'd like to join them, please consider sponsoring Vuetify's development." />

      <Heading2 heading="Vuetify Tooling" />
      <Para para="Vuetify is a complete Vue ecosystem that provides you with all of the tools necessary to create beautiful content rich web applications." />

      <Heading2 heading="Component Gallery" />
      <Para para="A unified platform providing powerful all Ecosystem Tools in one place. Build faster, collaborate better, and create stunning Vuetify applications." />


      {/* <h2 className="heading" style={heading2}>hello {name}</h2>
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}



      <button onClick={() => console.log("Button clicked!")}>Click me</button>
    </ul> */}




    </>




  )
}

export default App

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
