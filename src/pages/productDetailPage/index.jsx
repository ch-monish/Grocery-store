import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Constants from '../../api/constants'
import Endpoints from '../../api/Endpoints'
import NavBar from '../../components/NavBar'
import './style.css'
import { GiCarWheel } from "react-icons/gi";
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../redux/module/actions/product.action'
function ProductDetailPage() {
    const [product, setproduct] = useState([])
    const { _id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fetchdata = () => {
        axios.get(Endpoints.PRODUCT_DETAILS + _id)
            .then(res => { setproduct(res.data.data);  })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchdata()
    }, [_id])
    const [anim, setamim] = useState("wholetr")
    return (
        <div className='cartpagebg'>
            <NavBar></NavBar>
            <h2 hidden={anim=="wholetr"} style={{ zIndex: 1, position: "absolute", left: "800px", top: "300px",color:"white" }}>adding to cart ... </h2>
            <div className={"container " + anim}>
                <div className="row">
                    <div className="col-lg-4"><div className="wrapper1">
                        <h2 className="catd-head">{product.productName}</h2>
                        <div className="card-image mw-200 mh-400"><img width="100%" src={Constants.IMAGE_URL + product.image}></img>
                        </div>
                    </div>
                    </div>




                    <div className="col-lg-6 wrapper2" style={{ zIndex: 3 }}>




                        {/* <span className="imgwrapper">{product.catId}  </span> */}
                        description: <span className="catd-head">{product.description}</span>
                        mrp:<span className="catd-head">{product.mrp}</span><br></br>
                        Position:<span className="catd-head">{product.position}</span><br></br>
                        price: <span className="catd-head">{product.price}</span><br></br>
                        quantity:<span className="catd-head">{product.quantity}</span><br></br>
                        status: <span className="catd-head">{product.status ? "true" : "false"}</span><br></br>
                        subId: <span className="catd-head">{product.subId}</span><br></br>
                        unit: <span className="catd-head">{product.unit}</span><br></br>
                        <button className='btn btn-primary mb-1' onClick={e => {
                            dispatch(addtocart(product));
                            setamim("wholetr2");
                            setTimeout(()=>navigate(-1), 4800);
                            // navigate.
                            // (() => { navigate('/home', { replace: true }), 7000 })()
                        }}>Add to cart</button>
                    </div>
                </div>

                <div className="row ">

                    <div className="col " style={{ marginLeft: "60px", height: "100px", maxWidth: "100px", borderRadius: 90, }}><GiCarWheel className={anim == "wholetr" ? "rotate" : "rotate2"} style={{ fontSize: 120 }} /></div>
                    <div className="col" style={{ marginLeft: "560px", height: "100px", maxWidth: "100px", borderRadius: 90, }}><GiCarWheel className={anim == "wholetr" ? "rotate" : "rotate2"} style={{ fontSize: 120 }} /></div>
                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default ProductDetailPage