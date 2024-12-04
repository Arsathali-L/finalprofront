import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
const Newuser = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      number:"",
    },
    validate: (values) => {
      let error = {};

      if (!values.username) {
        error.username = "Please enter the username";
      }

      if (!values.email) {
        error.email = "Please enter the email";
      }

      if (!values.password || values.password.length < 3) {
        error.password = "Please enter the valid password";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        // await axios.post("http://localhost:3000/register", values);
        await axios.post("https://finalprobackend-4.onrender.com/register",values);
        navigate('/Login');
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <div className='flex items-center justify-center mt-8'>
        <h1 className='text-5xl font-serif'>Welcome Newuser </h1>
      </div>
      <div className='flex items-center justify-center mt-10'>
        <h1 className='text-4xl font-mono underline'>Please Enter Your Details</h1>
      </div>
      <div className='flex justify-around'>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex  justify-start mt-8 align-items: flex-start;'>
            <label className='text-2xl underline'>UserName :</label>
          <input 
          className='border-2 border-black rounded-lg'
                      type="text"
                      placeholder="Username"
                      name="username"
                      required
                      id="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}/>
            <span>{formik.errors.username}</span>

          </div>
          <div className='flex items-center justify-start mt-8 align-items: flex-start;'>
            <label className='text-2xl underline'>Date of Birth :</label>
            <input className='border-2 border-black rounded-lg' type="date" name="user" id="user" placeholder='date of birth' />
          </div>
          <div className='flex items-center justify-start mt-8'>
            <label className='text-2xl underline'> Father name : </label>
            <input className='border-2 border-black rounded-lg' type="text" name="name" id="name" placeholder='father name'/>
          </div>
          <div className='flex items-center justify-start mt-8'>
            <label className='text-2xl underline'>Enter Valid Email :</label>
          <input
          className='border-2 border-black rounded-lg'
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                   <span>{formik.errors.password}</span>
          </div>
          <div className='flex items-center justify-start mt-8'>
            <label className='text-2xl underline'>Enter password :</label>
          <input
          className='border-2 border-black rounded-lg'
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    /> <span>{formik.errors.password}</span>

          </div>
          {/* <div className='flex items-center justify-start mt-8'>
            <label className='text-2xl'>Confirm password :</label>
            <input className='border-2 border-black bg-red-100' type="password" name="pass" id="pass" />
          </div> */}
          <div className='flex items-center justify-start mt-8'>
            <label className='text-2xl underline'> Student mobile number :</label>
            <input
            className="border-2 border-black rounded-lg"
                      type="number"
                      placeholder="pH Number"
                      name="number"
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      
                    ></input>
          </div>
          <div className='flex items-center justify-start mt-8'>
            <label className='text-2xl underline'>Emergency mobile number :</label>
            <input className='border-2 border-black rounded-lg' type="number" name="number" id="emergency" placeholder='emergency pH Number'/>
          </div>
          <div className='flex items-center justify-start mt-8'>
            <label className='text-2xl underline'>Enter your state :</label>
            <input className='border-2 border-black rounded-lg' type="text" placeholder='Your state'/>
          </div>
          <div className='flex items-center justify-start mt-8'>
            <label className='text-2xl underline'>Enter your distric :</label>
            <input className='border-2 border-black rounded-lg' type="text" placeholder='Distric'/>
          </div>
          <div className='flex items-center justify-center mt-8'>
            {/* <input className='text-2xl border-2 border-black bg-red-100'type="button" value="Submit" /> */}
            <input 
            type="submit"
            value={"Register"}
            className="btn btn-secondary text-2xl"
            />
          </div>
        </form>
      </div>
      <div className='flex justify-center mt-10'>
        <h1 className='text-4xl'>complete your details then click below</h1>
      </div>
      {/* <div className='flex justify-center mt-10'> */}
        {/* <button className='text-2xl border-2 border-blue-300 bg-slate-400' > <Link to="/login"> LogIn </Link></button> */}
      {/* </div> */}
    </div>
  ) 
}

export default Newuser