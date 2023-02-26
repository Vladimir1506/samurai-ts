import {Field, Form, Formik} from 'formik';
import React from 'react';

export type LoginDataType = { email: string, password: string, rememberMe: boolean, captcha: boolean }
type LoginFormType = { login: (data: LoginDataType, setStatus: (status?: any) => void) => void }
const LoginForm = ({login}: LoginFormType) => (
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
        onSubmit={(values, {setStatus}) => {
            login(values, setStatus)

        }}>
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              status
          }) => {
            return <Form onSubmit={handleSubmit}>
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
                    remember me
                </label>
                <div>
                    {status && status.error}
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </Form>
        }}
    </Formik>
);

export default LoginForm