var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload = function() {
    var data = request.response;
    var result = JSON.parse(data)
  
/*Get all the countries from Asia continent /region using Filter method*/
    var _result = result.filter((ele)=>ele.region==="Asia")
    var final = _result.map((ele)=>console.log(ele.name.common));

/*Get all the countries with a population of less than 2 lakhs using Filter method*/

    const popu = result.filter((ele)=>{
        return ele.population<200000;
    })
console.log(popu);}

/*Print the following details name, capital, flag, using forEach method*/

result.forEach((element)=>{
console.log("country name =>",element.name,",capital =>",element.capital,",flag =>",element.flag);
});

/*Print the total population of countries using reduce method*/
const population=result.reduce((acc,curr)=>{
    return acc+curr.population;
},0)
console.log(population);

/*Print the country that uses US dollars as currency.*/
var result = JSON.parse(this.response);
var cur=[];
for(i=0;i<data.length;i++){
    if(data[i].currencies[0].code==="USD")
    {
     console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
    }
}

