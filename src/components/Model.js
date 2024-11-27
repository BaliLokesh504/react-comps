import ReactDOM from "react-dom"
import {useEffect} from "react"
function Model({onClose, children, actionBar}){
    // Tells React to place HTML produced by this component somewhere else(index.html end)
    // Referance to an element in our index.html

    useEffect(()=>{
        document.body.classList.add("overflow-hidden")

        return ()=>{
            document.body.classList.remove("overflow-hidden")
        }
    },[])
    return ReactDOM.createPortal(
            // Tells React to place HTML produced by this component somewhere else(index.html end)
            <div >
                <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80">
                </div>
                <div className="fixed inset-40 p-10 bg-white">
                    <div className="flex flex-col justify-between h-full">
                    {children}
                    </div>
                    <div className="flex justify-end">
                    {actionBar}
                    </div>
                </div>
            </div>,
                // Referance to an element in our index.html
            document.querySelector(".modal-container")
        )
}

export default Model