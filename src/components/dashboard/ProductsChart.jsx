import React from 'react'
import Chart from '../../assets/products-chart.svg'

const ProductsChart = (props) => {
    return(
        <div className="each-chart" style={{backgroundColor: props.color}}>
            <div className="heading">
            <h4>{props.products} Products</h4>
            <p>in your chart</p></div>
            <img src={Chart}  width="100%" alt="" />
        </div>
                       
    )
}
export default ProductsChart