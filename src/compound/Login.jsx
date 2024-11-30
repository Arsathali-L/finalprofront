import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import  axios  from 'axios';
import { useFormik } from 'formik';
import "../compound/Login.css"

const Login = () => {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.email) {
        error.email = "Please Enter the email";
      }
      if (!values.password){
        error.password = "please enter the correct password"
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const resp = await axios.post("http://localhost:3000/login", values);
        if (resp.status == 200) {
          window.localStorage.setItem("mytoken",resp.data.message)
          navigate("/Roommanual");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
    // <div className=''>
    //     <div className='flex justify-center mt-10'>
    //         <h1 className='text-4xl'>Login</h1>
    //     </div>
    //     <div className='flex justify-center mt-10'>
    //         <h1 className='text-4xl bg-purple-300'>Enter your email and password</h1>
    //     </div>
    //     <div className='flex items-center justify-center'>
    //         <div className='border-2   mt-16 w-96 drop-shadow-xl rounded-md '>
    //             <div className='mt-8 '>
    //                 <label className='text-2xl underline'>Email :</label> <br />
    //                 <input type="email" className='rounded-md border-2 border-black h-14 block w-full drop-shadow-lg mt-6' />
    //             </div>
    //             <div className='items-center mt-8 mb-8'>
    //                 <label className='text-2xl underline'>Ender your passwors :</label> <br />
    //                 <input type="email" className='rounded-md border-2 border-black h-14 block w-full drop-shadow-lg mt-6' />
    //             </div>
    //             <div className='flex justify-end'>
    //                 <button className='rounded-md text-2xl font-bold drop-shadow-lg mt-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '> <Link to='/Roommanual' >Submit </Link></button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    
      <div className='flex justify-center pt-24'>
        
        <form onSubmit={formik.handleSubmit}>
        <h1 className='underline'>Sign In</h1>
                    <div className='p-2 '>
                      <label className='pt-10 text-2xl underline'>Enter Email</label>
                      <br />
                        <input
                          type="text"
                          placeholder="Email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          className="form-control border-2 border-black"
                        ></input></div>
                      <div className='p-2'>
                        <label className='text-2xl underline'>Enter Password</label>
                        <input
                          placeholder="password"
                          type="password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          className="form-control border-2 border-black"
                        ></input></div>
                      {/* <input type="button" value="Login" className=' border-2 border-black hover:bg-red-300 rounded-lg ml-20 text-2xl mt-10' /> */}
                      <input type="submit" value={"Login"} className="btn secondary_btn auth_btn border-2 border-black flex justify-center pl-10 ml-16" />
                    <p>
                      Don't have an account? <Link to="/register">Create</Link>
                    </p>  </form>
        </div>               
  )
}

export default Login