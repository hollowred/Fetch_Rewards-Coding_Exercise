const express = require('express');
const methodOverride = require('method-override')
const app = express();

///////////// BODY PARSER
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(methodOverride('_method'));

/////DATABASE
let data = {
	"payer": {
		"id": 1,
		"name": "Sam"
	},
	"points": {
		"payerId":1,
		"points":250
	},
	"timestamp": {
		"actionTime": "2022-01-10"
	}
}

const payerPoints = []

////// FUNCTIONS
//A function that houses payers current points and can be called back to by other routes.
const getAllPayerPoints =()=>{

	//a list to hold payers point data

	//loop through data, push data to payerPoints array

	//return payerPoints array

	return data.payer
	return data.points 
		
}

//A function that edits specific payer and date.
const addPayerPoints=()=>{
	//edits specific payer and date
}
//A function that allows payer to spend points.
const spendPayerPoints=()=>{
	//spends specific payer's points.
}
/////// ROUTES

//INDEX
//Return all payer point balances
app.get('/getAllPayerPoints')

//EDIT
// Add transactions for specific payer and date.

//SPEND
//route used for spending points

/////////////////// CONNECT TO SERVER
app.listen(3000, ()=>{
	console.log('listening....');
});