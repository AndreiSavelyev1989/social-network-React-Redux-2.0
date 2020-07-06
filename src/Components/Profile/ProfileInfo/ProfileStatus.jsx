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
            <div className = {styles.statusContainer}>
                <span>My Status :</span>
                {!this.state.editMode &&
                    <div className = {styles.status}>
                        <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
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