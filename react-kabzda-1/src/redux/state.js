let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi nigga how a y', likesCount: 18},
                {id: 2, message: 'hi nigga how a y', likesCount: 16},
                {id: 3, message: 'qq niga', likesCount: 12},
                {id: 4, message: 'it is my first post', likesCount: 11}
            ],
            newPostText: 'it-kama'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your progress'},
                {id: 3, message: 'Yo'}
            ]
        }
    },
    _callSubscriber() {
        console.log('changed');
    },

    getState() {
        return this._state;
},
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPosts = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPosts);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}







export default store;
window.store = store;

