import AppDispatcher from './AppDispatcher.js';
import {ActionTypes} from './ActionTypes.js';

export default new class Actions {

    addNote = (note) => {
        this._dispatch(ActionTypes.ADD_NOTE, note);
    }

    _dispatch = (action, data) => {
        if(!data) data = false;
        setTimeout(() => {
            AppDispatcher.dispatch({
                type: action,
                data: data
            });
        }, 1);
    }
};
