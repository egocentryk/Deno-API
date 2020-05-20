import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getGamesList } from './Game.controller.ts'

const router = new Router()

router.get('/api/v1/games', getGamesList);

export default router;
