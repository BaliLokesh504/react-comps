import { useState } from "react"
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from "./hooks/useSort";
import Table from "./Table"

function SortableTable(props) {
   
    const { config, data } = props
   const {onClickHandler, sortBy, sortOrder, sortedData} = useSort(data,config)
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }
        return {
            ...column,
            header: () => {
                return <th className="cursor-pointer hover:bg-gray-100" onClick={() => onClickHandler(column.label)}>
                    <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                    </div>
                  </th>
            }
        }
    })
 

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig}></Table>
        </div>
    )
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return (
            <div>
            <GoTriangleDown></GoTriangleDown>
            <GoTriangleUp></GoTriangleUp>
        </div>
        )
    }

    if(sortOrder == null){
        return(
            <div>
            <GoTriangleDown></GoTriangleDown>
            <GoTriangleUp></GoTriangleUp>
        </div>
        )
    }else if(sortOrder === "asc"){
        return <div>
            <GoTriangleUp></GoTriangleUp>
        </div>
    }else if(sortOrder === "dsc"){
        return <div>
             <GoTriangleDown></GoTriangleDown>
        </div>
    }
}

export default SortableTable