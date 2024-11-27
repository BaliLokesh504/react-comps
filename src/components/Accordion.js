import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({data}){
    const [expendedIndex, setExpendedIndex] = useState(-1)

    const handleClick = (nextIndex)=>{
        //    //SIMPLE VERSION
        // MOSTLY WILL STICK WITH THIS
        // if(nextIndex === expendedIndex){
        //     setExpendedIndex()
        // }else{
        //     setExpendedIndex(nextIndex)
        // }


        // FUNCTIONAL VERSION
        // Use if new value depends on old
      
         setExpendedIndex(currentExpendedIndex =>{
            if(nextIndex === currentExpendedIndex){
                return -1
            }else{
                return nextIndex
            }
        })
    }

const MyTag = data.map((item, index)=>{
    const isExpended = index === expendedIndex
    const icon = (
        <span className="text-2xl">{isExpended ? <GoChevronDown /> : <GoChevronLeft />}</span>
    )
    return (
        <div key={item.id}>
           <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=> handleClick(index)}>
               {item.label}
               {icon}
           </div>
           {isExpended && <div className="border-b p-5">{item.content}</div>}
        </div>
        
    )
})
    return (
        <div className="border-x border-t rounded">
           {MyTag}
        </div>
    )

}

export default Accordion
