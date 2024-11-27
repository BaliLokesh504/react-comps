//cmd+Shit+L

import Accordion from "../components/Accordion"
function AccordionPage(){
  const data = [{
    id: 1,
    label : "Can i learn Database",
    content: "Yes, you can learn Database. Yes, you can learn Database. Yes, you can learn Database"
  },{
    id: 2,
    label : "Can i learn Nodejs",
    content: "Yes, you can learn Nodejs. Yes, you can learn Nodejs. Yes, you can learn Nodejs"
  },{
    id: 3,
    label : "Can i learn react",
    content: "Yes, you can learn react. Yes, you can learn react. Yes, you can learn react"
  }]
  return <Accordion data={data}></Accordion>
}

export default AccordionPage