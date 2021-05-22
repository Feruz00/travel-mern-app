
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { User_Auth, User_Login } from '../../_actions/user';

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

function Login(){

  const [load, setLoad] = useState("Loading");


  const {loading, success, error} = useSelector(state => state.login);
  const dispatch = useDispatch();
  const user = useSelector( state => state.user );
  useEffect( ()=>{
    dispatch( User_Auth );
    if( user && user.isAuth ) return <Redirect to = "/" />
  }, [success] );
  
  // console.log(success, user);

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
           email: '',
           password: '', // added for our checkbox
         }}
         validationSchema={Yup.object({
           email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
           password: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .min(6, 'Must be 6 character or greater than')
             .required('Required'),
            
            })}
         onSubmit={(values, { setSubmitting }) => {
            dispatch( User_Login( values ) );
            setSubmitting(false);
            
         }}
       >
         <Form className="form">
             <h1 className="form__title"> Sign In </h1>
            { loading? <p> {load} </p>:
              error? <p> {error} </p>: null }
    
 
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
           <button type="submit" className="form__button" disabled = { loading }>Submit</button>
         </Form>
       </Formik>
    </div>
}
export default Login;