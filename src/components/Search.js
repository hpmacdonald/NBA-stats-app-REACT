import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayer } from '../store/actions/player';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class Search extends Component {

    state = {
        searchTerm: '',
        error: ''
    }

    searchPlayer = (e) => {
        const playerName = this.state.searchTerm.split(' ');
        const firstName = playerName[0];
        const surname = playerName[1];
        e.preventDefault();
        if (firstName && surname) {
            // if both exist, pass the searchTerm to our action creator.
            this.props.getPlayer(firstName, surname);
        } else {
            // otherwise let the user know we'll need more than a first name.
            this.setState({ error: 'Search requires a first and last name.' })
        }

    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    render() {
        const { searchTerm, error } = this.state;
        return (
            <Container>
            <form onSubmit={this.searchPlayer}>
                <div>
                    <br></br>
                <TextField style={{backgroundColor: 'white' }}className="text--field" id="filled-basic" label="Filled" variant="filled" type="text" value={searchTerm} onChange={this.handleChange} />
                <br></br>
                <br></br>
                <Button variant="contained"  type="submit" color="primary">
                    search
                </Button>
                    
                </div>
                {error && <p>{error}</p>}
            </form>
            </Container>
        )
    }
}

export default connect(null, { getPlayer })(Search);
