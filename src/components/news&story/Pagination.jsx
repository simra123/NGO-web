import React from 'react';

const Pagination = (props) => {
    let pageNumbers = [];
  
    
    for(let i= 1; i <= 5; i++){
        pageNumbers.push(i)
    }
    
    return(
        <nav style={{justifyContent:props.align}} className="pagination-custom" aria-label="Pagination">
            <li className="">
                <span className="sr-only ">Prev</span>
            </li>
            
            {
                pageNumbers.map((number)=>{
                    return <li style={{listStyle:'none'}} 
                    className="each-number">
                    {number}
                    </li>
                   
                })
            }
        
            <li className="">
            <span className="sr-only">Next</span>
            
         
            </li>
        </nav>
    )
}
export default Pagination;