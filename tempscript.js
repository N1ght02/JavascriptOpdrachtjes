function CelsiusConverter(){
document.converter.fahrenheit.value = (document.converter.celsius.value * 9 / 5) + 32
document.converter.kelvin.value = document.converter.celsius.value * 1 + 273.15
}
function FahrenheitConverter(){
document.converter.celsius.value = (document.converter.fahrenheit.value - 32) * 5 / 9
document.converter.kelvin.value=((document.converter.fahrenheit.value - 32)*5/9)+273.15
}
function KelvinConverter(){
document.converter.celsius.value = document.converter.kelvin.value - 273.15
document.converter.fahrenheit.value=((document.converter.kelvin.value - 273.15)*9/5)+32
}
