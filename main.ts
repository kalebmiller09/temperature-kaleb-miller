let Current_Temp = 0
basic.forever(function () {
    Current_Temp = input.temperature()
    basic.showNumber(Current_Temp)
    basic.pause(1000)
    basic.clearScreen()
})
