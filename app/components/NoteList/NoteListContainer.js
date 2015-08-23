import React from 'react/addons';
import StateStore from '../../stores/StateStore.js';
import NoteList from './NoteList.js';

export default class NoteListContainer extends React.Component {

    state = {};

    componentDidMount() {
        StateStore.addChangeListener(this._handleStoreChange);
    }

    componentWillUnmount() {
        StateStore.removeChangeListener(this._handleStoreChange);
    }

    _handleStoreChange = () => {
        this.setState({
            notes: StateStore.getNotes()
        });
    }

    render() {
        if(!this.state.notes) return null;
        return <NoteList {...this.state} />;
    }
}
