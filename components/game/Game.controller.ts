import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Game } from './Game.interface.ts'

let games: Game[] = [
  {
    id: '1',
    name: 'Cyberpunk 2077',
    description: 'Third person action RPG',
    company: 'CD Project RED',
    platform: ['PS4', 'PS5', 'Xbox One X', 'Xbox Series X']
  },
  {
    id: '2',
    name: 'The Last of Us: Part II',
    description: 'Third person action RPG',
    company: 'Naughty Dog',
    platform: ['PS4']
  },
  {
    id: '3',
    name: 'Ghost of Tsushima',
    description: 'Third person action RPG',
    company: 'Sucker Punch',
    platform: ['PS4']
  },
];

export default class GameController {

  static getGamesList = ({ response }: { response: any }) => {
    response.body = {
        data: {
          games
        },
        success: true
    }
  }

  static deleteGame = ({ params, response}: { params: { id: string }, response: any }) => {
    games = games.filter(g => g.id !== params.id)
    response.body = {
      data: {
        message: 'Game successfully deleted',
        success: true
      }
    }
  }
}
