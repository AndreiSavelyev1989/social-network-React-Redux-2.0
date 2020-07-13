import React from 'react'
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className = {styles.statusContainer}>
                <span>My Status :</span>
                {!this.state.editMode &&
                    <div className = {styles.status}>
                        <div onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</div>
                    </div>
                }
                {this.state.editMode &&
                    <div className = {styles.status}>
                        <input  type="text" onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;