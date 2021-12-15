input.onButtonPressed(Button.A, function () {
    if (paddleA.get(LedSpriteProperty.X) < 0) {
        paddleA.change(LedSpriteProperty.X, -1)
        paddleB.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddleA.get(LedSpriteProperty.X) < 3) {
        paddleA.change(LedSpriteProperty.X, 1)
        paddleB.change(LedSpriteProperty.X, 1)
    }
})
let paddleB: game.LedSprite = null
let paddleA: game.LedSprite = null
paddleA = game.createSprite(2, 4)
paddleB = game.createSprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
let direction_Y = 1
let direction_X = randint(-1, 1)
basic.forever(function () {
    ball.change(LedSpriteProperty.X, direction_X)
    ball.change(LedSpriteProperty.Y, direction_Y)
    if (ball.isTouching(paddleA) || ball.isTouching(paddleB)) {
        ball.change(LedSpriteProperty.X, direction_X * -1)
        ball.change(LedSpriteProperty.Y, -1)
        direction_Y = -1
        direction_X = randint(-1, 1)
    } else {
        if (ball.get(LedSpriteProperty.Y) <= 0) {
            direction_Y = 1
            direction_Y = randint(-1, 1)
        } else if (ball.get(LedSpriteProperty.Y) >= 4) {
            ball.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (ball.get(LedSpriteProperty.X) <= 0) {
            direction_X = 1
        } else if (ball.get(LedSpriteProperty.X) >= 4) {
            direction_X = -1
        }
        basic.pause(500)
    }
})
