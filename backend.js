const express = require('express');
const methodOverride = require('method-override')
const app = express();

///////////// BODY PARSER
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(methodOverride('_method'));

/////DATABASE
let payers = {
    1 : {
        "name": "PepCo"
    },
    2 : {
        "name": "Samco"
    }
}

let points = {
    1 : {
        "points": 250
    },
    2 : {
        "points": 250
    }
}

let timestamps = {
    1: { 
        "actionTime":"2022-20-01"
    },
    2: { 
        "actionTime":"2022-20-01"
    },
}

const payerPoints = []

////// FUNCTIONS
//A function that houses payers current points and can be called back to by other routes.
const getAllPayersPoints = (payers,points,timestamps) => {
    // get all payer ids and names
    for (const [key,value] of Object.entries(payers)){
        let payerId = key
        let payerName = value.name
        console.log(`payerid ${payerId}: payername${payerName}`);

        // get points for the payers
        payerPointsId = points[`${payerId}`]

        console.log(`These are ${payerName}'s points: ${payerPointsId.points}`)

        // 
    }
}
    




	//a list to hold payers point data

	//loop through data, push data to payerPoints array

	//return payerPoints array


//A function that edits specific payer and date.
// const addPayerPoints=()=>{
// 	//edits specific payer and date
// }
// //A function that allows payer to spend points.
// const spendPayerPoints=()=>{
// 	//spends specific payer's points.
// }
// /////// ROUTES

// //INDEX
// //Return all payer point balances
app.get('/getAllPayerPoints', (req,res)=>{
	let build = getAllPayersPoints(payers,points,timestamps)
	return build
})

//EDIT
// Add transactions for specific payer and date.

//SPEND
//route used for spending points

/////////////////// CONNECT TO SERVER
app.listen(3000, ()=>{
	console.log('listening....');
});