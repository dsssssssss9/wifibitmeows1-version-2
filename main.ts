controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sdwireless.sdw_mbit_send_number(controller.lightLevel())
    LightLevel = textsprite.create("", 10, 9)
    textSprite = textsprite.create("Light Level")
    LightLevel.setMaxFontHeight(30)
    LightLevel.setPosition(22, 58)
    LightLevel.setText("" + controller.lightLevel())
    LightLevel.setPosition(64, 102)
    pause(1000)
    LightLevel.setText("")
    textSprite.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    TempC.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sdwireless.sdw_mbit_send_number(1)
    textSprite3 = textsprite.create("Get Compass Reading.", 1, 15)
    textSprite3.setPosition(60, 78)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    textSprite2.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    textSprite3.destroy()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sdwireless.sdw_mbit_send_number(2)
    textSprite3.destroy()
    textSprite2 = textsprite.create("Turn Motor On.", 1, 15)
    textSprite2.setPosition(48, 18)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    LightLevel.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setScore(controller.temperature(ControllerTemperatureUnit.Celsius))
    pause(200)
    textSprite = textsprite.create("Temperature")
    textSprite.setPosition(64, 102)
    sdwireless.sdw_mbit_send_number(controller.temperature(ControllerTemperatureUnit.Celsius))
    TempC = textsprite.create("", 2, 1)
    TempC.setMaxFontHeight(30)
    TempC.setPosition(22, 58)
    TempC.setText("" + controller.temperature(ControllerTemperatureUnit.Celsius))
    pause(1000)
    TempC.setText("")
    textSprite.destroy()
    info.setScore(0)
})
let textSprite2: TextSprite = null
let textSprite3: TextSprite = null
let TempC: TextSprite = null
let textSprite: TextSprite = null
let LightLevel: TextSprite = null
let TurnOnTempSensor = controller.temperature(ControllerTemperatureUnit.Celsius)
scene.setBackgroundColor(3)
sdwireless.sdw_init()
sdwireless.sdw_set_radiogp(1)
