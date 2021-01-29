import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap'
import PlayerPhoto from './PlayerPhoto';
import StatBox from './StatBox';






class Player extends Component {
    render() {
        const { name, team_name, image, stats } = this.props.player;

        const statBoxList = stats && stats.map(stat => <StatBox stat={stat} key={stat.label} />);

        return (
            <div>
                <Container> 
                    <div className="left-box">
                        {image && <PlayerPhoto url={image} name={name} />}
                    </div>

                    <div className="right-box">
                        <h1>{team_name}</h1>
                        <div className='stat--box--list'>
                            {statBoxList}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

}


export default connect(state => ({ player: state.player.player }))(Player);

