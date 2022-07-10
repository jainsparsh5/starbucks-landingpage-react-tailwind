import React from 'react'

function Footer(){
    return(
        <div className='xl:mx-40'>
            <footer>
                <div className='grid grid-cols-2 md:grid-cols-5 mx-10 md:ml-44 text-lightText'>
                    <ul>
                        <p className='font-semibold text-titleText pb-3'>About XYZ</p>
                        <li className='py-1'>Our Company</li>
                        <li className='py-1'>Our Coffee</li>
                        <li className='py-1'>Stories and News</li>
                    </ul>
                    <ul>
                        <p className='font-semibold text-titleText pb-3'>About XYZ</p>
                        <li className='py-1'>Our Company</li>
                        <li className='py-1'>Our Coffee</li>
                        <li className='py-1'>Stories and News</li>
                    </ul>
                    <ul>
                        <p className='font-semibold text-titleText pb-3'>About XYZ</p>
                        <li className='py-1'>Our Company</li>
                        <li className='py-1'>Our Coffee</li>
                        <li className='py-1'>Stories and News</li>
                    </ul>
                    <ul>
                        <p className='font-semibold text-titleText pb-3'>About XYZ</p>
                        <li className='py-1'>Our Company</li>
                        <li className='py-1'>Our Coffee</li>
                        <li className='py-1'>Stories and News</li>
                    </ul>
                    <ul>
                        <p className='font-semibold text-titleText pb-3'>About XYZ</p>
                        <li className='py-1'>Our Company</li>
                        <li className='py-1'>Our Coffee</li>
                        <li className='py-1'>Stories and News</li>
                    </ul>
                </div>

                <div className='border my-6'>
                </div>
                <div className='flex justify-between'>
                <ul className='flex flex-row items-center pb-4'>
                    <li className='px-1'><i class="fa-brands fa-linkedin text-2xl"></i></li>
                    <li className='px-1'><i class="fa-brands fa-facebook text-2xl"></i></li>
                    <li className='px-1'><i class="fa-brands fa-twitter text-2xl"></i></li>
                    <li className='px-1'><i class="fa-brands fa-youtube text-2xl"></i></li>
                </ul>
                <p className='text-xs text-lightText'>
                    © 2022 Starbucks Coffee Company. All rights reserved.
                </p>
                </div>
            </footer>
        </div>
        
    )
}

export default Footer;