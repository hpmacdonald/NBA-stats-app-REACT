import { put, call } from "redux-saga/effects";
import axios from "axios";

import {
    GET_TEAM_SUCCESS,
    GET_TEAM_FAIL
} from "../actions/actionTypes";

const cleStatsURL = 'https://nba-players.herokuapp.com/players-stats-teams/cle';

const statsWeWant = [
    'team_name',
    'games_played',
    'minutes_per_game',
    'field_goals_made_per_game',
    'field_goal_percentage',
    'free_throw_percentage',
    'three_point_attempt_per_game',
    'three_point_percentage',
    'points_per_game',
    'defensive_rebounds_per_game',
    'assists_per_game'
]

function fetchPlayerData(teamName) {
    let url = `${cleStatsURL}`;

    return axios.get(
        url
    );
}

export function* retrieveTeam(action) {
    let { teamName } = action.payload;
    try {
        // grab the data from the players heroku api
        let response = yield call(fetchPlayerData, teamName);

        // if a player is found and returned to us
        if (response.data.teamName) {
            let stats = [];

            // loop over keys in data
            for (let key in response.data) {
                // if key matches one of the stats we want
                if (statsWeWant.includes(key)) {
                    // assign it to our stats variable
                    stats.push({ label: key, value: response.data[key] })
                }
            }

            let teamProfile = {
                ...response.data,
                stats,
             
            }
            yield put({ type: GET_TEAM_SUCCESS, payload: teamProfile });
        }

    } catch (e) {
        yield put({ type: GET_TEAM_FAIL, payload: e });
    }
}