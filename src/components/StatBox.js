import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function StatBox({ stat }) {

    const useStyles = makeStyles({
       
      });

    const statsMap = {

        team_name: 'Team:',
        free_throw_percentage: 'Free Throw Percentage',
        points_per_game: 'Points Per Game:',
        assists_per_game: 'Assists:',
        blocks_per_game: 'Blocks:',
        three_point_percentage: 'Three Point Percentage:',
        field_goal_percentage: 'Field Goal Percentage:',
        rebounds_per_game: 'Rebounds:',
        steals_per_game: 'Steals Per game',
        player_efficiency_rating: 'Player Efficiency Rating',
        minutes_per_game: 'Average Minutes Per Game'
        
    }

    


    const label = statsMap[stat.label];
    const value = stat.label.includes('percentage') ? `${stat.value}%` : stat.value;

    return (
        <div>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ height: '15px', fontSize: '10px' }}>{label}</TableCell>
                            <TableCell style={{ height: '15px', fontSize: '10px' }} align="right">{value}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    )
}
