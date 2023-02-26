import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Profile.module.css'

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    toggleMode = () => {
        this.state.editMode && this.props.updateStatus(this.state.status)
        this.setState({
            editMode: !this.state.editMode
        })
    }
    onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        (e.code === 'Enter') && this.toggleMode()
    }
    onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <div className={s.profileStatus}>
            {this.state.editMode ?
                <input autoFocus={true} value={this.state.status} onBlur={this.toggleMode}
                       onKeyPress={this.onKeyPressHandler}
                       type="text"
                       onChange={this.onChangeInputHandler}></input>
                :
                <span onDoubleClick={this.toggleMode}>{this.state.status || 'No status'}</span>}
        </div>
    }
}

export default ProfileStatus