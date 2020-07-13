// function TronLoad(){
//     if(window.tronWeb){

//     	$("#TronLink").removeClass("w3-hide")
//     	$("#textNoTron").addClass("w3-hide")
//               console.log("Yes, catch it:",window.tronWeb.defaultAddress.base58)
//     }
//     else{
//     	// setTimeout(TronLoad, 1000)
//     	console.log("notronlink yet")
//     }
// }
// function gettronweb(){
//             if(window.tronWeb && window.tronWeb.defaultAddress.base58){
//                 document.write("Yes, catch it:",window.tronWeb.defaultAddress.base58)
//             }
//         }

// function connectTron(){
// 	tronweb.transactionBuilder.sendTrx('TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP', 10, 'TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ')
// }


 // var obj = setInterval(async ()=>{
 //            if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
 //                clearInterval(obj)
 //                var tronweb = window.tronWeb
 //                var tx = await tronweb.transactionBuilder.sendTrx('TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP', 10, 'TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ')
 //                var signedTx = await tronweb.trx.sign(tx)
 //                var broastTx = await tronweb.trx.sendRawTransaction(signedTx)
 //                console.log(broastTx)
 //            }
 //        }, 10)