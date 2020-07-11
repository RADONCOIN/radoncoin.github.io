function TronLoad(){
    if(window.tronWeb && window.tronWeb.defaultAddress.base58){

    	$("#tronButtonYes").removeClass("w3-hide")
              console.log("Yes, catch it:",window.tronWeb.defaultAddress.base58)
    }

}
