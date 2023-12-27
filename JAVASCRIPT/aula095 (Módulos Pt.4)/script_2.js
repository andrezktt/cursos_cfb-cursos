class Games {
    static games = ["Alan Wake II", "Days Gone", "The Last f Us", "Spiderman: Miles Morales", "Hogwarts Legacy", "CyberPunk 2077", "The Sims 4", "Final Fantasy XV"]

    static getTodosGames= () => {
        return this.games
    }

    static getGame = (indice) => {
        return this.games[indice]
    }

    static addGame = (novoGame) => {
        this.games.push(novoGame)
    }

    static removerGame = () => {
        this.games = []
    }
}

export default Games