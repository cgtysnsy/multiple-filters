"use client"
import React, { useEffect, useState } from 'react';
import { items as defaultItems } from './items';


export default function MultipleFilters() {
    const [items, setItems] = useState(defaultItems);
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedFilters, setSelectedFilters] = useState<any>([])
    let filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];

    const handleFilter = (el:any) => {
        if (selectedFilters.includes(el)) {
            setSelectedFilters((prev:any)=> prev.filter(i=> i!= el))
        }else{setSelectedFilters((prev:any)=> [...prev,el])}
    
    }

    useEffect(() => {
        itemsToShow()
    }, [selectedFilters])
    

    const itemsToShow = () => {
        if (selectedFilters.length > 0) {
            let tempArr = selectedFilters.map((el:any) => items.filter((i)=> i.category == el))
            console.log(tempArr)
            setFilteredItems(tempArr.flat())
        }else{setFilteredItems([...items])}
       
   }
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Algochurn Filters</h2>
      <div className="buttons-container">
        {filters.map((el, idx) => (
          <button className={`button ${selectedFilters?.includes(el)?"active": ""}`} key={`filters-${idx}`} onClick={()=>handleFilter(el)}>
            {el}
          </button>
        ))}
      </div>
      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
