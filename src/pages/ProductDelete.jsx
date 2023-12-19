import React, { useEffect,useState } from 'react'
import MasterLayout from '../components/masterLayout/MasterLayout'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {DeleteProduct,GetAllProduct} from "../api/Api"
import {toast, Toaster} from "react-hot-toast";
import axios from "axios"
const ProductDelete = () => {
  let [data,setData]=useState([]);
    let [change,setChange]=useState(0);

    useEffect(() => {
        (async ()=>{
          let res= await GetAllProduct();
          setData(res);
        })()
    }, [change]);


    // let handleDelete = async(id) =>{
    //     console.log(id)
    //     let res = await DeleteProduct(id);
    //     if(res){
    //         toast.success("Product Delete completed");
    //         setChange(new Date().getTime())
    //     }else {
    //         toast.error("Delete fail")
    //     }
    // }
    let handleDelete = async (id) =>{
        console.log(id)
        let data = await axios.post("http://localhost:5000/api/v1/productDelete",{
          id
          
        })
      }

  return (
    <MasterLayout>
    <Toaster position="top-center" />
      <div className="breadcrumbs-area p-[30px]">
          <h2 className="text-[30px] font-robotoFont font-medium text-[#111111] ">Product Delete</h2>
          <ul className="flex items-center">
              <li className=" font-robotoFont text-[17px] " >Home</li>
              <li className=" font-robotoFont text-[13px] px-[6px]" >
                  <FontAwesomeIcon icon={faChevronRight} /> 
              </li>
              <li className=" font-robotoFont text-[17px] text-primaryColor " >Product</li>
          </ul>
      </div>
      {data.map((item, i)=>(
        <>
        
            <div key={i} className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>DiscountPrice</th>
                            <th>Star</th>
                            <th>Stock</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className='border-top border-solid border-gray-300'>
                        <p className='ml-4'>{i+1}</p>
                        <td className='w-[250px]'>{item.title}</td>
                        <td>
                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="rounded w-16 h-16">
                                    <img src={item.image} alt="Avatar" />
                                </div>
                            </div>
                        </div>
                        </td>
                        <td className='w-[150px]'>{item.price}</td>
                        <td>{item.discount}</td>
                        <td>{item.discountPrice}</td>
                        <td>{item.star}</td>
                        <td>{item.stock}</td>
                        <td><button onClick={()=>{handleDelete(item._id)}} className="btn bg-red-500">Delete</button></td>

                    </tr>
                    </tbody>
                </table>
            </div>
        </>
      ))}

    </MasterLayout>

  )
}

export default ProductDelete