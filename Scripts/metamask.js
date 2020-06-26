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

  ethereum.on('accountsChanged', function (accounts) {
	Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Your Ethereum-adress changed!',
  footer: 'Please reload this page... And try to pay again.'
})
});
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
var ammmount = (bleg-0.0014)*1000000000000000000;

web3.eth.sendTransaction({
       from: account,
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    value: ammmount.toFixed(5)
}, function(error, hash){
   Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Transaction Failed ):',
  footer: 'Please reload this page... And try again :('
})
});


}