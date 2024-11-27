import {Fragment} from "react"

function Table({ data, config, keyFn }) {

    const renderHeaders = config.map((column) => {
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
            }
        return <th key={column.label}>{column.label}</th>
    })

    const renderRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td key={column.label} className="p-3">{column.render(rowData)}</td>
        })
        // return (
        //     <tr className="border-b">
        //     <td className="p-3">{value.name}</td>
        //     <td className="p-3">
        //         <div className={`p-3 m-2 ${value.color}`}></div>
        //     </td>
        //     <td className="p-3">{value.score}</td>
        //     </tr>

        // )
        return (
            <tr key={keyFn(rowData)} className="border-b">
                {renderedCells}
            </tr>

        )
    })
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
        </table>
    )
}

export default Table