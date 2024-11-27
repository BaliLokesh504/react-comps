//cmd+Shit+L
// window.location = "http://localhost:3000" - this will cause full page refresh
// window.history.pushState({}, "", "/dropdown") - Update the address bar but doesn't cause a refresh
import "./index.css"
import Route from "./components/Route"
import AccordionPage from "./pages/AccordionPage"
import DropdownPage from "./pages/DropdownPage"
import ButtonPage from "./pages/ButtonPage"
import Sidebar from "./components/Sidebar"
import ModelPage from "./pages/ModelPage"
import TablePage from "./pages/TablePage"
import CounterPage from "./pages/CounterPage"
function App(){

return (
  <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
   <Sidebar />
    <div className="col-span-5">
      <Route path="/accordion">
        <AccordionPage></AccordionPage>
      </Route>
      <Route path="/">
        <DropdownPage></DropdownPage>
      </Route>
      <Route path="/button">
        <ButtonPage></ButtonPage>
      </Route>
      <Route path="/model">
        <ModelPage></ModelPage>
      </Route>
      <Route path="/table">
       <TablePage></TablePage>
      </Route>
      <Route path="/counter">
       <CounterPage></CounterPage>
      </Route>
    </div>
  </div>
)

}

export default App