let milkPrice = 45; // 45ksh
const fullTIme = 52; // 52 weeks
let dayOutput;
let sellingPrice;

sheds = ['A','B','C','D']
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
thirtyDays = ['September','April','June', 'November']
feb = ['February']
const shedOutput = {
    A : Math.ceil((Math.random()* 700)+200),
    B : Math.ceil((Math.random()*700)+200),
    C : Math.ceil((Math.random()* 700)+200),
    D : Math.ceil((Math.random()* 700)+200),
}

const totalOutput = Math.ceil(shedOutput.A +
     shedOutput.B + shedOutput.C + shedOutput.D);

const totalPrice = totalOutput * milkPrice;
console.log(totalOutput+':'+ totalPrice);




// ////////////////////////////////////////////////////////

totalProduction = function(sheds, shedOutput) {
    output = [];
    for(i=0; i<sheds.length; i++) {
    output.push(`<li>Your production in Shed ${sheds[i]} : ${Object.values(shedOutput)[i]} litres per day</li>`)
    }
    output.push(`<li>The total output is ${totalOutput} litres for the week</li>`)
    dayOutput = totalOutput
    return(output)
    //console.log(`The total income for the day is ${totalOutput*milkPrice}`)
    //return totalOutput
}



// //////////////////////////////////////////////////////


function incomeOverTime(sellingPrice, time, input = dayOutput){
    let price = sellingPrice;
    let profit;
    let income = price * input;
    if (time=="weekly"){
        profit = income*7;
        console.log (`Your income for ${time} is ${profit}`)
    }

    else if (time=="monthly"){
        for (i=0; i<12; i++){
            month = months[i];
            if (thirtyDays.includes(month)){
                profit = income*30;
                console.log (`Your income for ${months[i]} is ${profit}`)
            }
            
            else if (month == "February") {
                profit = income*29;
                console.log (`Your income for ${months[i]} is ${profit}`)
            }

            else{
                profit = income*31;
                console.log (`Your income for ${months[i]} is ${profit}`)
            }
    }   
    }
    else if (time=="year"){
        profit = income*366
        console.log(`Your income for the whole year is ${profit}`)
    }
    
    else{
        console.log ("Enter a valid timeframe")
    }
}



//create a report variable that listens to the daily output button
const report = document.querySelector('.contents')

report.addEventListener('click', ()=>{
    let prod = totalProduction(sheds, shedOutput);
    productionDiv = document.createElement('div');
    document.querySelector('.content').appendChild(productionDiv);
    productionDiv.setAttribute('class','sheds-output-child')
    productionDiv.innerHTML = `${prod}`;
    
})

const button1 = document.querySelector('.buttonA');
button1.addEventListener('click', () => {
    prod = totalProduction(sheds, shedOutput);
    let content1 = document.getElementById('button1');
    content1.innerHTML = `${prod}`
})

const button2 = document.getElementById('buttonB');
button2.addEventListener('click', () =>{
    sellingPrice = prompt("Enter the selling price for a liter");
    let weekly = sellingPrice * dayOutput * 7;
    let content2 = document.getElementById('button2');
    content2.innerHTML = `for the week: ${weekly}`

})