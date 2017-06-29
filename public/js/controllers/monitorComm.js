//     rascunho do código...........

 function timeDiffSec( date1, date2 ) {
  //Get 1 day in seconds
  //var one_day_sec = 60*60*24;
  // Convert both dates to seconds
  var date1_sec = date1.getTime() / 1000 | 0 ;
  var date2_sec = date2.getTime() / 1000 | 0 ;
  // Calculate the difference in seconds
  var difference_sec = date2_sec - date1_sec;
  // Send back the difference
  return difference_sec;
}

var tNow = new Date();

var lastD = timeDim.top(1)[0].datetime;

if (timeDiffSec(lastD,tNow) >= 3601 ) {
	displayAlertcom('alert-warning','Não há comunicação há uma hora' );
} 

if (timeDiffSec(lastD,tNow) >= 7201 ) {
	displayAlertcom('alert-danger','Não há comunicação há duas horas' );
} 
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////