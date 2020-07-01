function bodyload(){
$("#paynoweth").hide()
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


function paynow(){
var radonen=document.getElementById("ethje").value;
var ethernen = (radonen*0.00055);
    bleger = (ethernen+0.0014)
ammmountr =  bleger.toFixed(5)
console.log(ammmountr)





var ammmount = (bleger-0.0014)*1000000000000000000;

web3.eth.sendTransaction({
       from: account,
    to: '0x00555F4f4D0b1dBCD20F0fBc791efd7C88BFa76f',
     gasPrice: '20000000000',
    value: ammmount.toFixed(5)
}, function(error, hash){

	console.log(error)
   Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Transaction Failed ):',
  footer: 'Please reload this page... And try again :('
})
});


}