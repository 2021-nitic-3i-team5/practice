// @param degrees desired degrees to turn through
function TurnLeft (degrees: number) {
    timeToWait = degrees * MicroSecInASecond / NumberOfDegreesPerSec
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    control.waitMicros(timeToWait)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    TurnLeft(90)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    DriveForward(100)
})
// This function drives :MOVE mini forwards.
// @param distance how far to drives
function DriveForward (distance: number) {
    timeToWait2 = distance * MicroSecInASecond / NumberOfDegreesPerSec
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    control.waitMicros(timeToWait2)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
let timeToWait2 = 0
let timeToWait = 0
let NumberOfDegreesPerSec = 0
let MicroSecInASecond = 0
MicroSecInASecond = 1000000
let DistancePerSec = 100
NumberOfDegreesPerSec = 200
