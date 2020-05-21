import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Game } from './Game.interface.ts'

let games: Game[] = [
  {
    id: '1',
    title: 'Cyberpunk 2077',
    description: 'Third person action RPG',
    company: 'CD Project RED',
    platform: ['PC', 'PS4', 'PS5', 'Xbox One X', 'Xbox Series X']
  },
  {
    id: '2',
    title: 'The Last of Us: Part II',
    description: 'Third person action RPG',
    company: 'Naughty Dog',
    platform: ['PS4', 'PS5']
  },
  {
    id: '3',
    title: 'Ghost of Tsushima',
    description: 'Third person action RPG',
    company: 'Sucker Punch',
    platform: ['PS4', 'PS5']
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

  static getGame = ({ params, response }: { params: { id: string }, response: any }) => {
    const game: Game | undefined = games.find(g => g.id === params.id)

    if (game) {
      response.status = 200
      response.body = {
        data: {
          game
        },
        success: true
      }
    } else {
      response.status = 404
      response.body = {
        data: {
          message: 'No game found'
        },
        success: false
      }
    }
  }

  static addGame = async ({ request, response }: { request: any, response: any }) => {
    const body = await request.body()

    if (request.body) {
      const game: Game = body.value

      game.id = v4.generate()
      games.push(game)
      response.status = 201
      response.body = {
        data: {
          games
        },
        success: true
      }
    } else {
      response.status = 400
      response.body = {
        data: {
          message: 'No game data to work with found'
        },
        success: false
      }
    }
  }

  static updateGame = async ({ params, request, response }: { params: { id: string }, request: any, response: any }) => {
    const game: Game | undefined = games.find(g => g.id === params.id)

    if (game) {
      const body = await request.body()

      const updateGameData: { title?: string; description?: string, company?: string, platform?: string[] } = body.value

      games = games.map(g => g.id === params.id ? { ...g, ...updateGameData } : g)

      response.status = 200
      response.body = {
        data: {
          games
        },
        success: true
      }
    } else {
      response.status = 404
      response.body = {
        data: {
          message: 'No game found'
        },
        success: false
      }
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
