function celsius( fahrenheit){
      return (fahrenheit-32)*5/9;
}
function kelvin( fahrenheit){
    return (fahrenheit-273.15)* 9/5;
}

let fahrenheit = parseFloat(window.prompt("Enter value of fahrenheit:"))
document.write("celsius value:"+celsius(fahrenheit)+" "+"Kelvin value:"+kelvin( fahrenheit))