function bodyload(){
$("#paynoweth").hide()
getEtherPrice()
$("#buy").removeClass("w3-hide")
$("#loading").addClass("w3-hide")
}

function load() {
	if (typeof window.ethereum !== 'undefined') {
 		$("#metaMask").removeClass("w3-hide");
	}
	else{
		hideconnectandshow()
	}
}



function connect(){
	hideconnect()
	getAccount()
}

var account
async function getAccount() {
	$("#paynoweth").show()
	$("#youracc").removeClass("w3-hide");
  const accounts = await ethereum.enable();
  account = accounts[0];
  document.querySelector('.showAccount').innerHTML = account;
}




function hideconnect(){
	$("#yesbtn").hide()
	$("#nobtn").hide()
	$("#askmeta").hide()
}
function hideconnectandshow(){
	hideconnect()
		$("#alternativemetamask").removeClass("w3-hide");
}

var radonen
var radonen2 = 0
var weiValue= 0;
function paynow(){
radonen=document.getElementById("radje").innerHTML





var ammmount = (radonen-0.0014);

 weiValue = ammmount*1000000000000000000
 weiValue = Math.round(weiValue)
console.log("weivalue:"+weiValue);


console.log(ammmount)
web3.eth.sendTransaction({
       from: account,
    to: '0x00555F4f4D0b1dBCD20F0fBc791efd7C88BFa76f',
     gasPrice: '38000000000',
    value: weiValue
}, function(error, hash){
	alert("Transaction is completed")
});


}