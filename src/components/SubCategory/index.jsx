import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Endpoints from '../../api/Endpoints';
import { useParams } from 'react-router-dom';

function SubCategory() {

    const [subcategory, setsubcategory] = useState([])
    const {catId} = useParams()
    // console.log(Endpoints.SUB_CATEGORY_CATID + catId)
    const fetchdata = () => {
        axios.get(Endpoints.SUB_CATEGORY_CATID + catId)
            .then(res => setsubcategory(res.data.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <div>
            <h2 className="text-center">Sub category</h2>
            <ul className="list-group">
                {subcategory.map((i=>
                <li className="list-group-item">{i.subName}</li>
                    
                    
                    
                    ))}
            </ul>

        </div>
    )
}

export default SubCategory