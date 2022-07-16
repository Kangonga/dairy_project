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
    output.push(`<li>The total output is ${totalOutput} litres for the day</li>`)
    output.push(`<li>The total output is ${totalOutput*7} litres for the week</li>`)
    dayOutput = totalOutput
    return(output)
    //console.log(`The total income for the day is ${totalOutput*milkPrice}`)
    //return totalOutput
}



// //////////////////////////////////////////////////////


function incomeOverTime(sellingPrice, input = totalOutput){
    let price = sellingPrice;
    let profit;
    let income = price * input;
    let month
    let monthIncome = []
    for (i=0; i<12; i++){
        month = months[i];
        if (thirtyDays.includes(month)){
            profit = income*30;
            month =  (`<li>Your income for ${months[i]} is ${profit}</li>`)
        }
        
        else if (month == "February") {
            profit = income*29;
            month = (`<li>Your income for ${months[i]} is ${profit}</li>`)
        }
 
        else{
            profit = income*31;
            month =  (`<li>Your income for ${months[i]} is ${profit}</li>`)
        }
        monthIncome.push(month)
    }
    return monthIncome   

}

function newIncome(input = totalOutput){
    price2 = prompt("Enter the second value to compare against")
    let price = price2;
    let profit;
    let income = price * input;
    let month
    let monthIncome = []
    for (i=0; i<12; i++){
        month = months[i];
        if (thirtyDays.includes(month)){
            profit = income*30;
            month =  (`<li>Your income for ${months[i]} is Ksh.${profit}</li>`)
        }
        
        else if (month == "February") {
            profit = income*29;
            month = (`<li>Your income for ${months[i]} is Ksh.${profit}</li>`)
        }
 
        else{
            profit = income*31;
            month =  (`<li>Your income for ${months[i]} is Ksh.${profit}</li>`)
        }
        monthIncome.push(month)
    }
    return monthIncome   

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

const button2 = document.querySelector('.buttonB');
button2.addEventListener('click', () =>{
    let weekly,yearly
    if(!(sellingPrice)){
        sellingPrice = prompt("Enter the selling price for a liter");
        weekly = sellingPrice * totalOutput * 7;
        yearly = sellingPrice * totalOutput * 366;}
    else {
         weekly = sellingPrice * totalOutput * 7;
         yearly = sellingPrice * totalOutput * 366;}
    let content2 = document.getElementById('button2');
    content2.innerHTML = `Your weekly income will be : Ksh. ${weekly}<br> Your yearly income will be : Ksh. ${yearly}`

})

const button3 = document.querySelector('.buttonC')
button3.addEventListener('click', () => {
    if (sellingPrice){
    monthly = incomeOverTime(sellingPrice)}
    else{
        sellingPrice = prompt('Enter the desired price for a liter.')
        monthly = incomeOverTime(sellingPrice)
    }
    let button3 = document.getElementById('button3')
    button3.innerHTML =  `${monthly}`

})

const button4 = document.getElementById('button4')
button4.addEventListener('click', ()=>{
    if (sellingPrice){
        monthly = incomeOverTime(sellingPrice)
        price1 = incomeOverTime(sellingPrice)
    }
    else {
        sellingPrice = prompt('Enter the rate of one liter')
        monthly = incomeOverTime(sellingPrice)
        price1 = incomeOverTime(sellingPrice)
    }
    price1 = incomeOverTime(sellingPrice)
    price2 = newIncome()
    let opt = document.getElementById('optContent')
    opt1.innerHTML = `<h2>Original price at ${sellingPrice}</h2> ${price1}`
    opt2.innerHTML = `<h2>New price</h2>${price2}`
})