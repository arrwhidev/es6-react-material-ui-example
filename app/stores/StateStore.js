import BaseStore from './BaseStore.js';
import {ActionTypes} from '../events/ActionTypes.js';

export default new class StateStore extends BaseStore {

    constructor() {
        super();
        super.registerToActions(this._handleAction);
    }

    getNotes() {
        return this.data.notes;
    }

    _handleAction = (action) => {
        switch(action.type) {
            case ActionTypes.ADD_NOTE:
                this._handleAddNote(action.data);
                break;
            default:
                break;
        }
    };

    _handleAddNote = (note) => {
        if(!this.data.notes) {
            this.data.notes = [];
        }

        this.data.notes.push(note);
        this.emitChange();
    }
};
