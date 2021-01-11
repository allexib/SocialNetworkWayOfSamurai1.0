import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'hi nigga how a y', likesCount: 18},
        {id: 2, message: 'hi nigga how a y', likesCount: 16},
        {id: 3, message: 'qq niga', likesCount: 12},
        {id: 4, message: 'it is my first post', likesCount: 11}
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('kama test');

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(5);

});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('kama test');

    let newState = profileReducer(state, action);

    expect (newState.posts[4].message).toBe('kama test');
});

it('after deleting length of message should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(4);
});