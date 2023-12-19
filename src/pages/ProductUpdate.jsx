import React, { useEffect,useState } from 'react'
import MasterLayout from '../components/masterLayout/MasterLayout'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {GetAllProduct} from "../api/Api"
const ProductUpdate = () => {

  let [data,setData]=useState([]);
    let [change,setChange]=useState(0);
    useEffect(() => {
        (async ()=>{
          let res= await GetAllProduct();
          setData(res);
        })()
    }, [change]);
  return (
    <MasterLayout>
      <div className="breadcrumbs-area p-[30px]">
          <h2 className="text-[30px] font-robotoFont font-medium text-[#111111] ">Product Update</h2>
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
        {/* <h1 key={i}>{item.title}</h1> */}

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>title</th>
                            <th>image</th>
                            <th>price</th>
                            <th>discount</th>
                            <th>discountPrice</th>
                            <th>star</th>
                            <th>stock</th>
                            <th>Update</th>
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
                        <td><button className="p-3 rounded text-white bg-green-500">Update</button></td>

                    </tr>
                    </tbody>
                </table>
            </div>
        </>
      ))}

    </MasterLayout>

  )
}

export default ProductUpdate


// ProductUpdate