function Wrong_Answer () {
    if (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    strip = neopixel.create(DigitalPin.P0, 70, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
}
input.onButtonPressed(Button.A, function () {
    Quiz = randint(1, 5)
    basic.showNumber(Quiz)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onPinPressed(TouchPin.P2, function () {
    if (Quiz == Question_1) {
        Wrong_Answer()
    }
    if (Quiz == Question_2) {
        Right_Answer()
    }
    if (Quiz == Question_3) {
        Wrong_Answer()
    }
    if (Quiz == Question_4) {
        Right_Answer()
    }
    if (Quiz == Question_5) {
        Right_Answer()
    }
})
function Right_Answer () {
    if (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    strip = neopixel.create(DigitalPin.P0, 70, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onPinPressed(TouchPin.P1, function () {
    if (Quiz == Question_1) {
        Right_Answer()
    }
    if (Quiz == Question_2) {
        Wrong_Answer()
    }
    if (Quiz == Question_3) {
        Right_Answer()
    }
    if (Quiz == Question_4) {
        Wrong_Answer()
    }
    if (Quiz == Question_5) {
        Right_Answer()
    }
})
let Quiz = 0
let strip: neopixel.Strip = null
let Question_5 = 0
let Question_4 = 0
let Question_3 = 0
let Question_2 = 0
let Question_1 = 0
Question_1 = 1
Question_2 = 2
Question_3 = 3
Question_4 = 4
Question_5 = 5
