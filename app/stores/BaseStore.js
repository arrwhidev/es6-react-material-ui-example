import {EventEmitter} from 'events';
import AppDispatcher from '../events/AppDispatcher.js';

const EV = 'change';

export default class BaseStore extends EventEmitter {

    constructor() {
        super();
        this.data = {};
    }

    getToken() {
        return this._dispatchToken;
    }

    emitChange() {
        this.emit(EV);
    }

    registerToActions(cb) {
        this._dispatchToken = AppDispatcher.register(cb);
    }

    addChangeListener(cb) {
        this.on(EV, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(EV, cb);
    }
}
