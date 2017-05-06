function checkCashRegister(price, cash, cid) {

  price = Math.round(price*100);
  cash = Math.round(cash*100);		

  var balance = cash - price;
  var result = [];
  cid.forEach(function (val) {
  	val[1] = val[1]*100;
  });


  function isClosed() {
  	var sum = 0;
  	cid.forEach(function (val) {
  		sum += val[1];
  	});

  	return (sum === balance);
  }

 
  if(isClosed()) return "Closed";
  else
    if(balance > 0) {
      //Look for cash
		var notes = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
		var change = [];
		var noteValue;
		for(var i = 8; i >= 0; i--) {

			noteValue = notes[i];
			if(noteValue <= balance && cid[i][1] > 0) { //This note will be returned, how much let's calculate

				var noteCount = 0; 
				var noteChange = cid[i][1];

				while( balance - noteValue >= 0 && noteChange - noteValue >= 0) {
					balance = balance - noteValue;
					noteChange = noteChange - noteValue;
					noteCount++;

					
				}

				result.push([cid[i][0], noteValue*noteCount]);
				
			}

		}

		result.forEach(function(val) {
			val[1] = val[1]/100;
		});

		
		if(balance === 0) return result;

		return "Insufficient Funds";
      
    }
}

ans = checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(ans);