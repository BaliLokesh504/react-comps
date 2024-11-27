import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext()

function NavigationProvider({ children }) {
const [currentPath, setCurrentPath] = useState(window.location.pathname)

useEffect(()=>{

const handler = ()=>{
    setCurrentPath(window.location.pathname)
}
// This will be done only in back and forward button
    document.addEventListener("popState", handler)

    return ()=>{
        document.removeEventListener("popState", handler)
    }

},[])
const navigate = (to)=>{
// Programmatic navigation
    window.history.pushState({}, "", to)
    setCurrentPath(to)
}
    return (
        <NavigationContext.Provider value={{navigate, currentPath}}>
            {children}
        </NavigationContext.Provider>
    )
}

export { NavigationProvider }
export default NavigationContext