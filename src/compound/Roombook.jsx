import React from 'react'
import { Link } from 'react-router-dom'
// import image1 from "./assets/room1.jpg"
function handleClick() {
    alert('Payment is sucessfull!');
}
const Roombook = () => {
  return (
    <div>
        <div className='flex items-center justify-center mt-10'>
            <h1 className='text-5xl font-serif underline'>Room Menu</h1>
        </div>
        <div className='flex mt-10 pl-10 gap-20'>
            <div>
                <img src="./public/room1.jpg" alt="room" className='rounded-lg'/>
                <p className='mt-6 ml-40 text-3xl underline'>"per month -₹7000!"</p>
                <button onClick={handleClick} className='text-2xl border-2 border-slate-400 rounded-lg hover:bg-slate-400 ml-40 mt-4'><Link to="/Meal"> book now </Link></button>
            </div>
            <div className='flex justify-center'>
                <div className='flex justify-items-center align-middle pl-10'>
                    <h1 className='text-4xl font-serif'>Room detail</h1>
                    
                </div>

                <div className='mt-8 pr-10'>
                    <div className='mt-8 align-middle  '>
                        <ul className='list-outside'>
                            <li className='list-disc'>Attach bathroom:yes</li>
                            <li className='list-disc'>floor-1</li>
                            <li className='list-disc'>room category:premium</li>
                            <li className='list-disc'>total stay-2</li>
                            <li className='list-disc'>fan-2</li>
                        </ul>
                    </div>
                    <div className='mt-8 align-middle  '>
                        <h1 className='text-2xl underline'>ROOM FACILITIES</h1>
                        <ul className='list-outside mt-8'>
                            <li className='list-disc'>Fingerprint unlock</li>
                            <li className='list-disc'>Plug sockets</li>
                            <li className='list-disc'>Free WiFi</li>
                            <li className='list-disc'>Cleaning service</li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex gap-16 mt-10'>
            <div>
                <div className='min-h-32 ml-10 '>
                    <img src="./public/room2.webp" alt="room" className='rounded-lg'/>
                    <p className='mt-6 ml-40 text-3xl underline'>"per month -₹6000!"</p>
                    <button onClick={handleClick} className='text-2xl border-2 border-slate-400 rounded-lg hover:bg-slate-400 ml-40 mt-4'> <Link to="/Meal">book now </Link></button>

                </div>
            </div>
            <div>
            <div className='flex justify-center '>
                <div className='flex justify-items-center align-middle pl-10'>
                    <h1 className='text-4xl font-serif'>Room detail</h1>
                </div>

                <div className='mt-8 pr-10'>
                    <div className='mt-8 align-middle  '>
                        <ul className='list-outside'>
                            <li className='list-disc'>Attach bathroom:no</li>
                            <li className='list-disc'>ground-floor</li>
                            <li className='list-disc'>room category:economy</li>
                            <li className='list-disc'>total stay-16</li>
                            <li className='list-disc'>fan-6</li>
                        </ul>
                    </div>
                
                
                    <div className='mt-8 align-middle  '>
                        <h1 className='text-2xl underline'>ROOM FACILITIES</h1>
                        <ul className='list-outside mt-8'>
                            <li className='list-disc'>Plug sockets</li>
                            <li className='list-disc'>Free WiFi</li>
                            <li className='list-disc'>Cleaning service</li>
                        
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        {/* <div> */}
            {/* <button></button> */}
        {/* </div> */}
    </div>

  )
}

export default Roombook