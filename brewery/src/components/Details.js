//import React, {useEffect } from 'react';
import './Details.css';
import { useParams, Link} from 'react-router-dom';
import { Data } from './Data';

import {getItems, AddToCart} from '../components/actions/itemActions';
import {connect} from 'react-redux';
import React, { useEffect } from 'react';


//import axios from "axios";
//import { useDispatch, useSelector } from 'react-redux';
//import { selectedProduct } from '../actions/productActions';


const Details = (props) => {

    // const product = useSelector((state) => state.products)
    // const {productId} = useParams();
    // const dispatch = useDispatch();
    // console.log(productId);


    useEffect(()=>{
        props.getItems();
    })  


    const {id}=useParams();
     let contentProduct = props.item.items.find(item => item._id ===parseInt(id));
    // const fetchProductDetail = async =() => {
    // const response = await axios
    // .get(`https://fakestoreapi.com/products/${productId}`)
    // .catch((err) => {
    //     console.log("Err", err);
    // });

    // dispatch(selectedProduct(resssponse.data));


  return (
    <div className="details">
        <div className=" inside-container">
            <h3>Product details</h3>
            <div className="details-center">
                <div className = "details-img">
                    <img src ={`/${contentProduct.imageUrl}`} alt = "product" />

                </div>
                <div className ="details-info">
                    <h4 className = "details-title">{contentProduct.name}</h4>
                    <p className = "details-text-info">{contentProduct.content}</p>
                    <h3>$ {contentProduct.price}</h3>


                </div>

                <div className = "details-btn">
                    <Link to ="/products">Back to products</Link>
                    <button onClick={()=>props.AddToCart(contentProduct._id)}>Add to cart</button>
                </div>

            </div>

        </div>
        
    </div>
  )
}

const mapStateToProps=(state)=>({
    item:state.item
  })

  export default connect(mapStateToProps,{getItems,AddToCart})(Details)