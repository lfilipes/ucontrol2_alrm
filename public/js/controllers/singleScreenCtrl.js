angular.module('App').controller('singleScreenCtrl', function($scope,$resource){
	
///////////////////////////////////////////////////////////////////////////// Aqui começa o controlador de alertas

	var vm = this;

        vm.alerts = [];
        vm.addAlert = function(type, msg){
            vm.alerts.push({
                type : type,
                msg : msg
            })
        }
        
 //       vm.closeAlert = function(index) {
 //           vm.alerts.splice(index, 1);
 //       };
			
		vm.closeAlert = function (index) {
			vm.alerts.splice(index, 1);
			if ( vm.alerts.length == 0 ) {
				displayOk();
			};
		};

    function displayAlert(aType,aMsg){
		 vm.alerts.push({
						type : aType,
						msg : aMsg
		})
	};	
		
	function hideOk(){
		vm.ok = {show:false, type: 'alert-success', msg: 'OK' };
	};

	function displayOk(){
		vm.ok = {show:true, type: 'alert-success', msg: 'OK' };
	};

	displayOk();

//////////////////////////////////////////////////////////////////////////////////////////////// Aqui termina o controlador de alertas	
	
queue()
   .defer(d3.json, "/api/data/1/latest")
   .await(displayTotals);
   
     function displayTotals(error, apiData){
   //Start Transformations
	var dataSet = apiData;
	var dateFormat = d3.time.format("%m/%d/%Y %H:%M:%S");
	
	dataSet.forEach(function(d) {
		d.datetime = dateFormat.parse(d.datetime);
//		console.log(d.datetime);
		if (d.level4 == 1) {
			d.total = 4;
            d.changecolor = "#E53A0F";
			} 
		else if (d.level3 == 1) {
			d.total = 3;
            d.changecolor = "#E53A0F";
			}
		else if (d.level2 == 1) {
			d.total = 2;
            d.changecolor = "#008100";
			}
		else if (d.level1 == 1) {
			d.total = 1;
            d.changecolor = "#FFCE00";
			}	
		 else {
			d.total = 0;
            d.changecolor = "#E53A0F";
		   }	
	});
	
	//Cria Crossfilter
	var ndx = crossfilter(dataSet);
	
    // Cria as dimensões de tempo e de sensorId
	var timeDim = ndx.dimension(function(d) {return new Date(d.datetime).getTime() });
	var sensorDim = ndx.dimension(function(d) {return d.sensorid });
	var blocoDim = ndx.dimension(function(d) {return d.blocoid });
	
	// ultima leitura Cisterna Bloco 2
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSCistern1'});
	blocoDim.filter(function(d) {return d == 2});
	if (timeDim.top(1)[0] != null) {
		var lastVolC1 = timeDim.top(1)[0].total;
		var colorC1 = timeDim.top(1)[0].changecolor;
	}
	else {
		var lastVolC1 = 0;
		var colorC1 =  "#E53A0F";
	}
		
	// ultima leitura Cisterna Bloco 5
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCScistern1'});
	blocoDim.filter(function(d) {return d == 5});
	if (timeDim.top(1)[0] != null) {
		var lastVolC2 = timeDim.top(1)[0].total;
		var colorC2 = timeDim.top(1)[0].changecolor;
	}
	else {
		var lastVolC2 = 0;
		var colorC2 =  "#E53A0F";
	}
	
	// ultima leitura Caixa Bloco 1
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSReserv1'});
	blocoDim.filter(function(d) {return d == 1});
	if (timeDim.top(1)[0] != null) {
		var lastVolR1 = timeDim.top(1)[0].total;
		var colorR1 = timeDim.top(1)[0].changecolor;
		
			if (lastVolR1 != 2) {hideOk();};
			switch (lastVolR1) {
			  case 1:
				displayAlert('alert-warning','Nivel baixo da cx. do Bl.1' );
				break;
			  case 0:
				displayAlert('alert-danger','Nivel crítico da cx. do Bl,1' );
				break;
			  case 3:
				displayAlert('alert-danger','Transbordamento da cx. do Bl.1' );
				break;
			};	
			
	}
	else {
		var lastVolR1 = 0;
		var colorR1 =  "#E53A0F";
	}
	
	// ultima leitura Caixa Bloco 2
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSReserv1'});
	blocoDim.filter(function(d) {return d == 2});
	if (timeDim.top(1)[0] != null) {
		var lastVolR2 = timeDim.top(1)[0].total;
		var colorR2 = timeDim.top(1)[0].changecolor;
		
		if (lastVolR2 != 2) {hideOk();};
			switch (lastVolR2) {
			  case 1:
				displayAlert('alert-warning','Nivel baixo da cx. do Bl.2' );
				break;
			  case 0:
				displayAlert('alert-danger','Nivel crítico da cx. do Bl,2' );
				break;
			  case 3:
				displayAlert('alert-danger','Transbordamento da cx. do Bl.2' );
				break;
			};	
			
	}
	else {
		var lastVolR2 = 0;
		var colorR2 =  "#E53A0F";
	}
			
	// ultima leitura Caixa Bloco 3
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSReserv1'});
	blocoDim.filter(function(d) {return d == 3});
	if (timeDim.top(1)[0] != null) {
		var lastVolR3 = timeDim.top(1)[0].total;
		var colorR3 = timeDim.top(1)[0].changecolor;
		
			if (lastVolR3 != 2) {hideOk();};
			switch (lastVolR3) {
			  case 1:
				displayAlert('alert-warning','Nivel baixo da cx. do Bl.3' );
				break;
			  case 0:
				displayAlert('alert-danger','Nivel crítico da cx. do Bl,3' );
				break;
			  case 3:
				displayAlert('alert-danger','Transbordamento da cx. do Bl.3' );
				break;
			};	
		
	}
	else {
		var lastVolR3 = 0;
		var colorR3 =  "#E53A0F";
	}
	
	// ultima leitura Caixa Bloco 4A
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSReserv1'});
	blocoDim.filter(function(d) {return d == 4});
	if (timeDim.top(1)[0] != null) {
		var lastVolR4 = timeDim.top(1)[0].total;
		var colorR4 = timeDim.top(1)[0].changecolor;
		
			if (lastVolR4 != 2) {hideOk();};
			switch (lastVolR4) {
			  case 1:
				displayAlert('alert-warning','Nivel baixo da cx. do Bl.4' );
				break;
			  case 0:
				displayAlert('alert-danger','Nivel crítico da cx. do Bl.4' );
				break;
			  case 3:
				displayAlert('alert-danger','Transbordamento da cx. do Bl.4' );
				break;
			};	
		
	}
	else {
		var lastVolR4 = 0;
		var colorR4 =  "#E53A0F";
	}

	
	// ultima leitura Caixa Bloco 5A
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSReserv1'});
	blocoDim.filter(function(d) {return d == 5});
	if (timeDim.top(1)[0] != null) {
		var lastVolR5 = timeDim.top(1)[0].total;
		var colorR5 = timeDim.top(1)[0].changecolor;
		
			if (lastVolR5 != 2) {hideOk();};
			switch (lastVolR5) {
			  case 1:
				displayAlert('alert-warning','Nivel baixo da cx. do Bl.5' );
				break;
			  case 0:
				displayAlert('alert-danger','Nivel crítico da cx. do Bl.5' );
				break;
			  case 3:
				displayAlert('alert-danger','Transbordamento da cx. do Bl.5' );
				break;
			};	
		
	}
	else {
		var lastVolR5 = 0;
		var colorR5 =  "#E53A0F";
	}
	
	// ultima leitura Caixa Bloco 6A
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSReserv1'});
	blocoDim.filter(function(d) {return d == 6});
	if (timeDim.top(1)[0] != null) {
		var lastVolR6 = timeDim.top(1)[0].total;
		var colorR6 = timeDim.top(1)[0].changecolor;
		
			if (lastVolR6 != 2) {hideOk();};
			switch (lastVolR6) {
			  case 1:
				displayAlert('alert-warning','Nivel baixo da cx. do Bl.6' );
				break;
			  case 0:
				displayAlert('alert-danger','Nivel crítico da cx. do Bl.6' );
				break;
			  case 3:
				displayAlert('alert-danger','Transbordamento da cx. do Bl.6' );
				break;
			};	
		
	}
	else {
		var lastVolR6 = 0;
		var colorR6 =  "#E53A0F";
	}

	// ultima leitura Caixa Bloco 4B
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSReserv2'});
	blocoDim.filter(function(d) {return d == 4});
	if (timeDim.top(1)[0] != null) {
		var lastVolR7 = timeDim.top(1)[0].total;
		var colorR7 = timeDim.top(1)[0].changecolor;
		
			if (lastVolR7 != 2) {hideOk();};
			switch (lastVolR7) {
			  case 1:
				displayAlert('alert-warning','Nivel baixo da cx. do Bl.7' );
				break;
			  case 0:
				displayAlert('alert-danger','Nivel crítico da cx. do Bl.7' );
				break;
			  case 3:
				displayAlert('alert-danger','Transbordamento da cx. do Bl.7' );
				break;
			};	
		
	}
	else {
		var lastVolR7 = 0;
		var colorR7 =  "#E53A0F";
	}


	// ultima leitura Caixa Bloco 5B
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSReserv2'});
	blocoDim.filter(function(d) {return d == 5});
	if (timeDim.top(1)[0] != null) {
		var lastVolR8 = timeDim.top(1)[0].total;
		var colorR8 = timeDim.top(1)[0].changecolor;
		
			if (lastVolR8 != 2) {hideOk();};
			switch (lastVolR8) {
			  case 1:
				displayAlert('alert-warning','Nivel baixo da cx. do Bl.5B' );
				break;
			  case 0:
				displayAlert('alert-danger','Nivel crítico da cx. do Bl.5B' );
				break;
			  case 3:
				displayAlert('alert-danger','Transbordamento da cx. do Bl.5B' );
				break;
			};	
		
	}
	else {
		var lastVolR8 = 0;
		var colorR8 =  "#E53A0F";
	}

	// ultima leitura Caixa Bloco 6B
	sensorDim.filterAll();
	sensorDim.filter(function(d) {return d === 'UCSReserv2'});
	blocoDim.filter(function(d) {return d == 6});
	if (timeDim.top(1)[0] != null) {
		var lastVolR9 = timeDim.top(1)[0].total;
		var colorR9 = timeDim.top(1)[0].changecolor;
		
			if (lastVolR9 != 2) {hideOk();};
			switch (lastVolR9) {
			  case 1:
				displayAlert('alert-warning','Nivel baixo da cx. do Bl.6B' );
				break;
			  case 0:
				displayAlert('alert-danger','Nivel crítico da cx. do Bl.6B' );
				break;
			  case 3:
				displayAlert('alert-danger','Transbordamento da cx. do Bl.6B' );
				break;
			};	
		
	}
	else {
		var lastVolR9 = 0;
		var colorR9 =  "#E53A0F";
	}


// Configura gaugues
	var config1 = liquidFillGaugeDefaultSettings();
	config1.circleColor = colorC1;	// The color of the outer circle.
	//config1.waveColor = colorC1;	// The color of the 
	
	var config2 = liquidFillGaugeDefaultSettings();
	config2.circleColor = colorC2; 	// The color of the outer circle.
	
	var config3 = liquidFillGaugeDefaultSettings();
	config3.circleColor = colorR1; 	// The color of the outer circle.	
	
	var config4 = liquidFillGaugeDefaultSettings();
	config4.circleColor = colorR2; 	// The color of the outer circle.
	
	var config5 = liquidFillGaugeDefaultSettings();
	config5.circleColor = colorR3; 	// The color of the outer circle.
	
	var config6 = liquidFillGaugeDefaultSettings();
	config6.circleColor = colorR4; 	// The color of the outer circle.
	
	var config7 = liquidFillGaugeDefaultSettings();
	config7.circleColor = colorR5; 	// The color of the outer circle.
	
	var config8 = liquidFillGaugeDefaultSettings();
	config8.circleColor = colorR6; 	// The color of the outer circle.

//4b
	var config9 = liquidFillGaugeDefaultSettings();
	config9.circleColor = colorR7; 	// The color of the outer circle.
//5b
	var config10 = liquidFillGaugeDefaultSettings();
	config10.circleColor = colorR8; 	// The color of the outer circle.
//6b
	var config11 = liquidFillGaugeDefaultSettings();
	config11.circleColor = colorR9; 	// The color of the outer circle.

// Mostra gauges
//Cisternas
	 var gauge100 = loadLiquidFillGauge("fillgauge100", lastVolC1,config1);  //cisterna bloco 2
     var gauge101 = loadLiquidFillGauge("fillgauge101", lastVolC2,config2); //cisterna bloco 5
//Caixas D agua dos Blocos
     var gauge1 = loadLiquidFillGauge("fillgauge1", lastVolR1, config3); //caixa d agua bloco 1
     var gauge2 = loadLiquidFillGauge("fillgauge2", lastVolR2, config4); //caixa d agua bloco 2	 
     var gauge3 = loadLiquidFillGauge("fillgauge3", lastVolR3, config5); //caixa d agua bloco 3	 	 
     var gauge4a = loadLiquidFillGauge("fillgauge4a", lastVolR4, config6); //caixa d agua bloco 4a	 	 	 
     var gauge5a = loadLiquidFillGauge("fillgauge5a", lastVolR5, config7); //caixa d agua bloco 5a 	 	 
	 var gauge6a = loadLiquidFillGauge("fillgauge6a", lastVolR6, config8); //caixa d agua bloco 6a 	  
//Não definidas
     var gauge4b = loadLiquidFillGauge("fillgauge4b", lastVolR7, config9); // caixa d agua bloco 4B
     var gauge5b = loadLiquidFillGauge("fillgauge5b", lastVolR8, config10); //caixa d agua bloco 5B
     var gauge6b = loadLiquidFillGauge("fillgauge6b", lastVolR9, config11); //caixa d agua bloco 6B		
};

});
	