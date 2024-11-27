import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    // useRef - Allow a component to get reference to a DOM element that it creates
    // 95% of the time used with DOM elements, but can hold a reference to any value
   const divEl = useRef()

    useEffect(()=>{

        const handler = (event)=>{
            console.log("<<<<<<<<<<DIV INSIDE",event.target)
           if(!divEl.current){
               return
           }

           if(!divEl.current.contains(event.target)){
               setIsOpen(false)
           }
        }

        document.addEventListener("click", handler, true)

        return () => document.removeEventListener("click", handler)

    },[])

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => {
            onChange(option)
            setIsOpen(false)


        }} key={option.value} >{option.label}</div>
    })

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div ref={divEl} className="w-48 relative" >
            <Panel>
            <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{value?.label || "Select....."}
                <GoChevronDown className="text-lg"></GoChevronDown>
            </div>
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default DropDown