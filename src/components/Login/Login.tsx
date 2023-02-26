import React from 'react';
import {Field, Form, Formik} from 'formik';
import {login} from '../../redux/auth-reducer';

const Login = () => {
    return (<>
            <h1> Login </h1>
            <LoginForm/>
        </>
    );
};

export default Login;
export type LoginDataType = { email: string, password: string, rememberMe: boolean, captcha: boolean }

const LoginForm = () => (
    <Formik
        initialValues={{email: '', password: '', rememberMe: false, captcha: false}}
        validate={values => {
            const errors: LoginDataType = {email: '', password: '', rememberMe: false, captcha: false};
            if (!values.email) {
                errors.email = 'Required';
            }
            if (!values.password) {
                errors.password = 'Required';
            }
            if (errors.email || errors.password) return errors;
        }}
        onSubmit={(values) => {
            login(values)
        }}>
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
                <div>
                    <Field
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder={'Email'}
                    />
                    {touched.email && errors.email}
                </div>
                <div>
                    <Field
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder={'Password'}

                    />
                    {touched.password && errors.password}
                </div>

                <label>
                    <Field type="checkbox" name={'remember'}/>
                    remember me</label>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </Form>
        )}
    </Formik>
);