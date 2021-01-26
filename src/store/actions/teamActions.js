import { GET_TEAM } from './actionTypes';

export function getPlayer(teamName) {
    return {
        type: GET_TEAM,
        payload: { teamName }
    }
}