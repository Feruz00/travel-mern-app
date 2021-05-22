
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { User_Auth, User_Register } from '../../_actions/user';

const MyTextInput = ({ label, ...props }) => {
 
   const [field, meta] = useField(props);
   return (
     <>
        <div className="form__div">
       <input className="form__input" {...field} {...props} autoComplete="false" />
       <label htmlFor={props.id || props.name} className="form__label">{label}</label>
       </div>
       {meta.touched && meta.error ? (
         <div className="form__error">{meta.error}</div>
       ) : null}
     </>
   );
};

function Register(){

    
  const dispatch = useDispatch();
  const [load, setLoad] = useState("Loading");


  const {loading, success, error} = useSelector(state => state.register);
  
  const user = useSelector( state => state.user );
  useEffect( ()=>{
    dispatch( User_Auth );
    if( user && user.isAuth ) return <Redirect to = "/" />
  }, [success] );
    
  
    
  if( loading ){
      setInterval( ()=>{
          if( load === "Loading" ) setLoad("Loading.");
          else if( load === "Loading." ) setLoad("Loading..");
          else if( load === "Loading.." ) setLoad("Loading...");
          else if( load === "Loading..." ) setLoad("Loading");
            
      } ,730 );
  }
  

  return <div className="login">
        
        <Formik
         initialValues={{
           username: '',
           email: '',
           password: '', 
           conpassword: ''
           // added for our checkbox
         }}
         validationSchema={Yup.object({
           username: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .min(5, 'Must be 5 character or greater than')
             .required('Required'),
           email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
           password: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .min(6, 'Must be 6 character or greater than')
             .required('Required'),
             conpassword: Yup.string()
             .oneOf([Yup.ref('password'), null], 'Passwords cannot match'),
            
            })}
         onSubmit={(values, { setSubmitting }) => {
             const value = {
                 email: values.email,
                 username: values.username,
                 password: values.password
             };
            dispatch( User_Register( value ) );
            setSubmitting(false);
            
         }}
       >
         <Form className="form">
             <h1 className="form__title"> Sign Up </h1>
            { loading? <p> {load} </p>:
              error? <p> {error} </p>: null }
           <MyTextInput
             label="Username"
             name="username"
             type="text"
             placeholder=" "
           />
 
 
           <MyTextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder=" "
           />
            
            <MyTextInput
             label="Password"
             name="password"
             type="password"
             placeholder=" "
           />
            <MyTextInput
             label="Confirm password"
             name="conpassword"
             type="password"
             placeholder=" "
           />
           
           <button type="submit" className="form__button" disabled = { loading }>Submit</button>
         </Form>
       </Formik>
    </div>
}
export default Register;