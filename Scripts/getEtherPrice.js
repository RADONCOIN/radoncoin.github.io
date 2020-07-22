var testpeop = 0;
var RealEtherPrice;
async function getEtherPrice(){
	testpeop = await httpGet("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=78c6f463f57cb7945e59d719be7234e59b1d0c2e9d38f84a2a1e563cceefef6d")
	testpeop=testpeop.split(":")
	testpeop=testpeop[1].split(".")
	
	RealEtherPrice  = testpeop[0]


	if(testpeop ==0){
		console.warn("error")
	}

	else{
		testifEtherpriceisnumber()
	}
	
}

var izx;
var PhaseArray = new Array;
function testifEtherpriceisnumber(){
	//need work
	console.warn("not implemented.")

	
	for (izx = 1; izx <= 20; izx++) {
		var juk=(0.13*izx)/RealEtherPrice
		PhaseArray.push(juk.toFixed(6)+" ETH")
	}

	if(izx==21){
		SetEtherAmmounts()
	}
	
}

function SetEtherAmmounts(){
	for (var p = 1; p <= 20; p++) {
		$("#phase"+p).text(PhaseArray[p-1])
	}
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}