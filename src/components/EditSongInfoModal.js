import React, { Component } from 'react';


export default class EditSongInfoModal extends Component {
	constructor(props) {
        super(props);

		this.state = {
            title : "ha1",
            artist :"ha2",
            youTubeID : "ha3",
			updateTiming : true
        }
    }
	
	EditConfirm = () => {
		let tempKey = this.props.keyToEditSongInfo
        let realKey = tempKey.replace('song-', '')
        let song = this.props.currentList.songs[realKey-1]
		song.title = this.state.title
		song.artist = this.state.artist
		song.youTubeId = this.state.youTubeID
		this.props.currentList.songs[realKey-1] = song
		this.props.hideEditSongInfoModalCallback()
		
		this.setState({
			  title: song.title, 
			  artist: song.artist, 
			  youTubeID: song.youTubeId, 
			  updateTiming: true
			});
    }
	
	handleChange = (e) => {
			this.setState({
			  [e.target.name]: e.target.value, 
			});
		  };

    render() {
		let tempKey = this.props.keyToEditSongInfo
		if( tempKey ){
			if ( this.props.hasOwnProperty("currentList") && 
			this.props.currentList != null &&
			this.props.currentList.hasOwnProperty("songs")  ){
				let realKey = tempKey.replace('song-', '')
				let song = this.props.currentList.songs[realKey-1]

				if ( this.state.updateTiming ){
					this.setState(prevState => ({
					title : song.title,
					artist: song.artist,
					youTubeID: song.youTubeId,
					updateTiming: false
					}), () => {	
					});
				}
			}
		}
        		
        return (
            <div 
                class="modal" 
                id="edit-song-info-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-list-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-left">
                            title:
							<input
							name="title"
							type="text"
							defaultValue={this.state.title}
							onChange={this.handleChange}
							/>					
                        </div>						
						<div class="modal-left">
                            artist:
							<input
							name="artist"
							type="text"
							defaultValue={this.state.artist}
							onChange={this.handleChange}
							/>							
                        </div>
						
						<div class="modal-left">
                            youTubeId:
							<input
							name="youTubeID"
							type="text"
							defaultValue={this.state.youTubeID}
							onChange={this.handleChange}
							/>							
                        </div>		
						
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-list-confirm-button" 
                                class="modal-button" 
								onClick={this.EditConfirm}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-list-cancel-button" 
                                class="modal-button" 
                                onClick={this.props.hideEditSongInfoModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}