import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            ],
           newMessageBody: ""
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}







export default store;
window.store = store;

