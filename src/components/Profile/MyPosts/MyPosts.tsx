import React, {KeyboardEvent} from 'react';
import Post from './Post/Post';
import {MyPostsPropsType, PostType} from './MyPostsContainer';
import {Field, Form, Formik} from 'formik';


const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost}: MyPostsPropsType) => {
    const allPosts = posts.map((post: PostType) => <Post key={post.id} post={post}/>)
    return (
        <div>
            My posts
            <AddPostForm addPost={addPost}/>
            <div>
                {allPosts}
            </div>
        </div>
    )
}
export default MyPosts

type AddPostValueType = { postText: string }
type AddPostFormPropsType = { addPost: (postText: string) => void }
const AddPostForm = ({addPost}: AddPostFormPropsType) => {
    return <Formik initialValues={{postText: ''}}
                   validate={values => {
                       const errors: AddPostValueType = {postText: ''}
                       if (!values.postText) {
                           errors.postText = 'Required post text'
                       }
                       if (errors.postText) {
                           return errors
                       }
                   }
                   }
                   onSubmit={(values, {resetForm}) => {
                       addPost(values.postText)
                       resetForm({values: {postText: ''}})
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
                <Field name={'postText'} as={'textarea'} placeholder={'Your Post Message'}
                       onKeyPress={handleCtrlEnterPress}

                ></Field>
                {touched.postText && errors.postText}
                <div>
                    <button type="submit">
                        Add Post
                    </button>
                </div>
            </Form>
        }}
    </Formik>
}