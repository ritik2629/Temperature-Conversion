const tempCalculate =() =>{
    const numberTemp = document.getElementById('tempr').value 

    // console.log(numberTemp);


    const tempSelect = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelect.selectedIndex].value
    // console.log(valueTemp);

    const celToFah = (cel)=>{
        let Fahrenheit = Math.round((cel * 9/5)+32);
        return Fahrenheit;
    }


    const fahToCel = (fehr)=>{
        let celcius = Math.round((fehr -32) *5/9);
        return celcius;

    }

    let result;

    if(valueTemp == 'cel'){
        result =celToFah(numberTemp);
        document.getElementById('resultContain').innerHTML=`= ${result}°Fahrenheit`
    }
    else{
        result =fahToCel(numberTemp);
        document.getElementById('resultContain').innerHTML=`= ${result}°Celcius`
    }
}