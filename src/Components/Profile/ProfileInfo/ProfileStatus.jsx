import React from 'react'
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div className = {styles.statusContainer}> My Status:
                {!this.state.editMode &&
                    <div className = {styles.status}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className = {styles.status}>
                        <input type="text" autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;