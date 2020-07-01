import {
    addNewPlayer,
    getPlayers,
    getPlayerID,
    updatePlayer,
    deletePlayer
} from '../controllers/playerControllers'

const routes = (app) => {

    app.route('/players')

        //GET players
        .get(getPlayers)

        //post endpoint
        .post(addNewPlayer)

    app.route('/player/:id')
        //GET player with id
        .get(getPlayerID)
        // UPDATE specific player
        .put(updatePlayer)
        // delete a player
        .delete(deletePlayer)
}



export default routes


