
import profileCreator from "./Profile-Creator";
import dialogsCreator from "./Dialogs-Creator";




let store = {
    _state: {

        profilePage: {

        },

        dialogsPage: {

        }

    },
    getState() {
        return this._state;
    },
    dispatch(action) {
         this._state.profilePage = profileCreator(this._state.profilePage,action);
         this._state.dialogsPage = dialogsCreator(this._state.dialogsPage, action);
         this._RerenderDOM(this._state);
    },
    _RerenderDOM() {},
    subscribe(observer) {
        this._RerenderDOM = observer;
    }
}





window.store = store;
export default store;





