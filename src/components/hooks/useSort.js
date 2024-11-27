import { useState } from "react"

function useSort(data,config){
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)
    let sortedData = data

    const onClickHandler = (label) => {
        if(sortBy && label !== sortBy){
            setSortOrder("asc")
            setSortBy(label)
            return
        }
        if (sortOrder === null) {
            setSortOrder("asc")
            setSortBy(label)
        } else if (sortOrder === "asc") {
            setSortOrder("dsc")
            setSortBy(label)
        } else if (sortOrder === "dsc") {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    if(sortBy && sortOrder){
        const {sortValue} =  config.find((column)=> column.label === sortBy)
        sortedData = [...data].sort((a,b)=>{
            const valueA = sortValue(a)
            const valueB = sortValue(b)
          const reverseOrder = sortOrder === "asc" ? 1 : -1
            if(typeof valueA === "string"){
                return valueA.localeCompare(valueB) * reverseOrder
            }else{
                return (valueA - valueB) * reverseOrder
            }
        })
        }

   return{
    onClickHandler,
    sortOrder,
    sortBy,
    sortedData
   }
}

export default useSort