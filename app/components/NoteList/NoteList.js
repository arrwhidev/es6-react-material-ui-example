import React from 'react/addons';
import mui from 'material-ui';
let List = mui.List;
let ListItem = mui.ListItem;

export default class NoteList extends React.Component {

    _renderNote = (note, index) => {
        return (
            <ListItem key={index} primaryText={note} />
        );
    }

    render() {
        return (
            <List>
                {this.props.notes.map(this._renderNote)}
            </List>
        );
    }
}
