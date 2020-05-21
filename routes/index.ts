import { Router } from 'https://deno.land/x/oak/mod.ts'
import GameController from '../components/game/Game.controller.ts'

const router = new Router({ prefix: '/api/v1' })

router.get('/games', GameController.getGamesList)
router.get('/games/:id', GameController.getGame)
router.post('games', GameController.addGame)
router.delete('/games/:id', GameController.deleteGame)

export default router;
