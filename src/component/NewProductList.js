import React from 'react';
import NewProduct from './NewProduct'

function NewProductList() {
    let arr =[5,8,4,9]
    return (
        <div className="fflex">
           {arr.map((el)=>(<NewProduct/>))} 
        </div>
    )
}

export default NewProductList
