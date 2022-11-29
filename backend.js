const express = require('express');
const methodOverride = require('method-override')
const app = express();

///////////// BODY PARSER
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(methodOverride('_method'));

/////DATABASE
let data = {
	"payer": String,
	"points": Number,
	"timestamp": String,
}

////// FUNCTIONS
//A function that houses payers current points and can be called back to by other routes.
function getPayerPoints(){
	//return list of payers and points
}

//A function that edits specific payer and date.
function addPayerPoints(){
	//edits specific payer and date
}
//A function that allows payer to spend points.
function spendPayerPoints(){
	//spends specific payer's points.
}
/////// ROUTES

//INDEX
//Return all payer point balances
app.get('/getPayerPoints')

//EDIT
// Add transactions for specific payer and date.

//SPEND
//route used for spending points

/////////////////// CONNECT TO SERVER
app.listen(3000, ()=>{
	console.log('listening....');
});