import React from 'react';

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    toggleMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return <div>
            {this.state.editMode ?
                <input autoFocus={true} value={this.props.status} onBlur={this.toggleMode} type="text"></input> :
                <span onDoubleClick={this.toggleMode}>{this.props.status}</span>}
        </div>
    }
}

export default ProfileStatus