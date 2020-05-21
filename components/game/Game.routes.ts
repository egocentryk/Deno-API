import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getGamesList } from './Game.controller.ts'

const router = new Router({ prefix: '/api/v1' })

router.get('/games', getGamesList);

export default router;
