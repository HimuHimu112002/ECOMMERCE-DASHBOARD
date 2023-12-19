import React from 'react'
import MasterLayout from '../components/masterLayout/MasterLayout'
import { Link, useNavigate } from "react-router-dom";
const ProductUpload = () => {
  return (
    <MasterLayout>
        <div className="login_page max-lg:p-[30px] bg-[#F0F1F3]  max-lg:h-full h-screen flex items-center ">
                <div className="container mx-auto">
                    <div className="login_page_inner">
                        <div className=" xl:w-6/12 md:w-6/12 w-full max- mx-auto bg-white p-8 shadow-[0 16px 49px -15px rgba(0,0,0,0.3)] rounded-lg  ">
                            <div className="mb-10">
                                <h2 className="text-[45px] font-robotoFont font-medium text-[#253D4E] " >Upload Product</h2>
                            </div>
                          
                            <form action="" >
                            <div className='flex justify-between'>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >title <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="text" 
                                  placeholder="Enter Otp here" />
                              </div>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >Discription <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="password" 
                                  placeholder="Enter Otp here" />
                              </div>
                            </div>
                            <div className='flex justify-between'>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >Price <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="password" 
                                  placeholder="Enter Otp here" />
                              </div>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >Discount <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="password" 
                                  placeholder="Enter Otp here" />
                              </div>
                            </div>
                            <div className='flex justify-between'>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >DiscountPrice <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="password" 
                                  placeholder="Enter Otp here" />
                              </div>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >image <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="password" 
                                  placeholder="Enter Otp here" />
                              </div>
                            </div>
                            <div className='flex justify-between'>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >DiscountPrice <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="password" 
                                  placeholder="Enter Otp here" />
                              </div>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >Star <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="password" 
                                  placeholder="Enter Otp here" />
                              </div>
                            </div>
                            <div className='flex justify-between'>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >Stock <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="password" 
                                  placeholder="Enter Otp here" />
                              </div>
                              <div className="form_group w-[49%]">
                                  <label className="text-[17px] font-robotoFont" >Remark <sup>*</sup></label>
                                  <input 
                                  className="w-full text-[17px] focus:outline-none focus:border-primaryColor rounded-md border-2 border-[#04295425] px-[15px] py-[10px] font-robotoFont mt-2" 
                                  type="password" 
                                  placeholder="Enter Otp here" />
                              </div>
                            </div>
                            <div className="form_group text-center py-3"> 
                                <button 
                                className="bg-[#042954] text-white px-[30px] inline rounded-lg text-[20px] py-[12px] hover:bg-primaryColor hover:-translate-y-2 transition-all duration-300 mb-4" 
                                type="submit" >Upload</button>
                            </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
    </MasterLayout>
  )
}

export default ProductUpload