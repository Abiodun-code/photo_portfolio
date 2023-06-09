import React, {useState, useEffect, createContext} from 'react'

export const CursorContext = createContext()

const CursorProvider = ({children}) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  })

  const [cursorBG, setCursorBG] = useState('default')

  useEffect(()=>{
  //   const move = (e)=>{
      
  //   }
    window.addEventListener('mousemove',(e)=>{
      setCursorPos({
        x: e.clientX,
        y: e.clientY
      })
      return ()=>{
        window.removeEventListener('mousemove',(e)=>{
          setCursorPos({
            x: e.clientX,
            y: e.clientY
          })
        })
      }
    })
  })

  const cursorVariants = {
    default:{
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgrounColor: "#0e1112",
    },
    text:{
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgrounColor: "#fff",
      mixBlendMode: "difference"
    },
  }

  return (
    <CursorContext.Provider value={{cursorVariants, cursorBG}}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider