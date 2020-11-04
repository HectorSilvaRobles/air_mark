import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './view2.sass'


// Form phone input regex
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// Form validation
const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short').max(30, 'Too long').required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    phone: Yup.string().matches(phoneRegExp, 'Invalid Phone Number').required('Phone is required').max(15, 'Invalid Phone Number')
})


const View2 = (props) => {
    return (
        <div className='view2'>
            <div className='view-title'>
                <h1>Contact Info</h1>
                <h2>How can we reach out to you.</h2>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: ''
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values)
                    props.handleInfo(values)
                    props.view('thankyou')
                }}
            >
            {({values,errors, touched, handleChange}) => (
                <Form className='view2-content'>
                {console.log(Boolean(values.name))}
                    <div className='view2-form'>
                        <div className={errors.name && touched.name ? 'form-input-error' : null}>
                            <div className='form-title'>
                                <h1>Name</h1>
                                {errors.name && touched.name ? <h2>*{errors.name}</h2> : null}
                            </div>
                            <Field 
                                id='name' 
                                name='name' 
                                placeholder='Enter your name'
                            />
                        </div>
                        <div className={errors.email && touched.email ? 'form-input-error' : null}>
                            <div className='form-title'>
                                <h1>Email</h1>
                                {errors.email && touched.email ? <h2>*{errors.email}</h2> : null}
                            </div>
                            <Field 
                                id='email' 
                                name='email' 
                                placeholder='Enter your email'
                            />
                        </div>
                        <div className={errors.phone && touched.phone ? 'form-input-error' : null}>
                            <div className='form-title'>
                                <h1>Phone</h1>
                                {errors.phone && touched.phone ? <h2>*{errors.phone}</h2> : null}
                            </div>
                            <Field 
                                id='phone' 
                                name='phone' 
                                placeholder='Enter phone number'
                            />
                        </div>
                    </div>
                    <div className='view2-button'>
                        <button 
                            className={errors.name || errors.email || errors.phone || !values.name || !values.email || !values.phone ? null : 'modal-button-active' }
                            disabled={errors.name ||  errors.email || errors.phone || !values.name || !values.email || !values.phone ? true : false}
                            // onClick={() => {
                            //     props.handleService(serviceState)
                            //     props.view('view2')
                            // }}
                            type='submit'
                        >Submit</button>
                    </div>
                </Form>
            )}
            </Formik>
            
        </div>
    )
}

export default View2