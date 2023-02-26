import React, {KeyboardEvent} from 'react';
import classes from './Dialogs.module.css'
import {Field, Form, Formik} from 'formik';

type MessagesPropsType = {
    messagesArray: Array<string>
    onSend: (text: string) => void

}
const Messages: React.FC<MessagesPropsType> = ({messagesArray, onSend}: MessagesPropsType) => {
    const allMessages = messagesArray.map((message: string, index: number) => <div key={index}
                                                                                   className="message">{message}</div>)
    return (
        <div className={classes.messages}>
            {allMessages}
            <SendMessageForm onSend={onSend}/>
        </div>
    );
};

export default Messages;

type SendMessageValueType = { messageText: string }
type SendMessageFormPropsType = { onSend: (message: string) => void }
const SendMessageForm = ({onSend}: SendMessageFormPropsType) => {
    return <Formik initialValues={{messageText: ''}}
                   validate={values => {
                       const errors: SendMessageValueType = {messageText: ''}
                       if (!values.messageText) {
                           errors.messageText = 'Required message text'
                       }
                       if (errors.messageText) {
                           return errors
                       }
                   }
                   }
                   onSubmit={(values, {resetForm}) => {
                       onSend(values.messageText)
                       resetForm({values: {messageText: ''}})
                   }}>
        {({
              errors,
              touched,
              handleSubmit,
          }) => {

            const handleCtrlEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.ctrlKey && e.code === 'Enter') {
                    e.preventDefault()
                    handleSubmit()
                }
            }
            return <Form onSubmit={handleSubmit}>
                <Field name={'messageText'} as={'textarea'} placeholder={'Your Message'}
                       onKeyPress={handleCtrlEnterPress}
                ></Field>
                {touched.messageText && errors.messageText}
                <div>
                    <button type="submit">
                        Send message
                    </button>
                </div>
            </Form>
        }}
    </Formik>
}