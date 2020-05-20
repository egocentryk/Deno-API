import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import Game from './Game.controller.ts'

let games: Game[] = [
  {
    id: '1',
    name: 'Cyberpunk 2077',
    description: 'Third person action RPG',
    company: 'CD Project RED',
    platform: 'PS4, PS5, Xbox One X, Xbox Series X'
  };
];

const getGamesList = ({ response }: { response: any }) => {
  response.body = {
    data: {
      list: games,
      success: true
    }
  }
}
