//cmd+Shit+L
import { useState } from "react"
import DropDown from "../components/DropDown"

function DropdownPage(){
const [selected, setSelected] = useState(null)
const onSelectHandler = (term)=>{
setSelected(term)
}
  const options = [{
 label : "Red", value: "red"
  },{
    label : "Yellow", value: "yellow"

  },{
    label : "Green", value: "Green"

  }]

  return (
      <div className="flex">
    <DropDown options={options} onChange={onSelectHandler} value={selected}></DropDown>
      </div>
  )

}

export default DropdownPage