import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                   validate={[required, maxLength10]}/>

        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

AddNewPostForm = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

// const AddNewPostForm = (props) => {
//     return (
//         <form>
//             <div>
//                     <textarea onChange={onPostChange} ref={newPostElement}
//                               value={props.newPostText} />
//             </div>
//             <button onClick={onAddPost}>Add post</button>
//         </form>
//     )
// }

export default MyPosts;