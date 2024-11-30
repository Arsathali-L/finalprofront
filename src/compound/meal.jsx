import React from 'react'
import { Link } from 'react-router-dom';

function handleClick() {
    alert('payment is succesfull!');
}
const Meal = () => {
  return (
    <div>
        <div className='flex justify-center mt-10 text-3xl'>
            <h1 className='font-serif underline'>Day to Day Meal For Student</h1>
        </div>
        <div className='flex justify-center mt-8 text-2xl'>
            <h1 className='font-bold'>Food is Common For Each Student</h1>
        </div>
        <div className='mx-20'>
            <p className='text-3xl font-extralight mt-8 text-justify'>"Below of the food list is shafull on ever day what ever a chef think they make diffrent on food 
                every day not same make changes on day to day diffrent any think complaint you inform on incharge"
            </p>
        </div>
        <div className='flex justify-center mt-8 text-4xl'>
            <h1 className='underline'>Food List </h1>
        </div>
        <div>
            <div className='flex justify-center'>
                <h1 className='font-bold text-2xl underline mt-7'>BREAK FAST</h1>
            </div>
            <div className='flex justify-center'>
                <ul className='list-outside'>
                    <li className='list-disc'>Idle</li>
                    <li className='list-disc'>Chapati</li>
                    <li className='list-disc'>Pongal</li>
                    <li className='list-disc'>Mini MeaLS</li>
                    <li className='list-disc'>Salt-ma</li>
                </ul>
            </div>
            <div className='flex justify-center'>
                <h1 className='font-bold text-2xl underline mt-7'>LUNCH </h1>
            </div>
            <div className='flex justify-center'>
                <ul className='list-outside'>
                    <li className='list-disc'>Rice dal</li>
                    <li className='list-disc'>Briyani</li>
                    <li className='list-disc'>Ghee rice</li>
                    <li className='list-disc'>Rice chicken gravi</li>
                    <li className='list-disc'>Tomato rice</li>
                </ul>
            </div>
            <div className='flex justify-center'>
                <h1 className='font-bold text-2xl underline mt-7'>DINNER</h1>
            </div>
            <div className='flex justify-center'>
                <ul className='list-outside'>
                    <li className='list-disc'>Chapati</li>
                    <li className='list-disc'>Rice dal</li>
                    <li className='list-disc'>Idle</li>
                    <li className='list-disc'>Paniyaram</li>
                    <li className='list-disc'>Samiya</li>
                </ul>
            </div>
        </div>
        <div className='flex text-3xl from-neutral-400 mx-16 mt-8 justify-center text-center '>
            <p>"Some pluse point in our hostel you didn't like the hostel food you can enjoy outside food also 
                you want to explore the out side food no problem you can go ""
            </p>
        </div>
        <div className='flex text-3xl from-neutral-400 text-center mx-16 mt-8'>
            <p>"In our hostel we provide a tea . two times a day morning and evening that was free of cost"</p>
        </div>
        <div className='flex text-3xl from-neutral-400 text-center mx-16 mt-8'>
            <p>"You need to read clearly you ok of the above of the content the click on the below button"</p>
        </div>
        <div className='flex justify-center mt-8 '>
            

            
                <button onClick={handleClick} className='text-2xl border-2 border-black rounded-lg font-bold hover:bg-green-400 p-4'>
                      <Link to="/Dashboard">  Click To Pay </Link>
                </button>
            
        </div>
        <p className='flex justify-center pt-6 text-3xl'>(OR)</p>
        <div className='flex justify-center mt-8'>
            <button className='text-2xl border-2 border-black rounded-lg font-bold hover:bg-green-400 p-4'><Link to= "/dashboard"> Skip </Link> </button>
        </div>
    </div>
  )
}

export default Meal