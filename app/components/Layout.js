import React from 'react/addons';
import mui from 'material-ui';
import Actions from '../events/Actions.js';
import StateStore from '../stores/StateStore.js';
import NoteListContainer from './NoteList/NoteListContainer.js';

let ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

let RaisedButton = mui.RaisedButton;
let TextField = mui.TextField;

export default class Layout extends React.Component {

    state = {};
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

   getChildContext() {
       return {
           muiTheme: ThemeManager.getCurrentTheme()
       };
   }

    _setText(text) {
        this.setState({
            text: text
        });
    }

    _handleTextChange = (ev) => {
        this._setText(ev.target.value);
    };

    _handleClick = () => {
        let text = this.state.text;
        if(!text) return;

        Actions.addNote(text);
        this._setText('');
    };

    render() {
        return (
            <div>
                <TextField
                    onChange={this._handleTextChange}
                    value={this.state.text}
                    hintText="..."
                    floatingLabelText="Add a note..." />
                <RaisedButton
                    primary={true}
                    label='Save'
                    onClick={this._handleClick} />
                <NoteListContainer />
            </div>
        );
    }
}
