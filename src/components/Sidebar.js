import Link from "./Link";

function Sidebar(){

    const links = [
        {label :"Dashboard", path :"/"},
        {label :"Accordion", path :"/accordion"},
        {label :"Button", path :"/button"},
        {label :"Model", path :"/model"},
        {label:"Table", path:"/table"},
        {label:"Counter", path:"/counter"}
    ]

    const renderedList = links.map((link)=>{
        return (
            <Link key={link.label} to={link.path} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
        )
    })

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
        {renderedList}
        </div>
    )
}

export default Sidebar
