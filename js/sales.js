 function drawChartSales() {
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Region');
     data.addColumn('date', 'Month&year');
     data.addColumn('number', 'Average House Price');
     data.addRows(subrubs);

     var chart = new google.visualization.MotionChart(document.getElementById('sales_div'));
     var options = {};
		   options['state'] ='{"xAxisOption":"2","orderedByX":false,"yLambda":1,"sizeOption":"2","nonSelectedAlpha":0.4,"xZoomedDataMax":760,"xZoomedIn":false,"time":"1990-03-01","yZoomedDataMax":760,"iconType":"BUBBLE","yZoomedIn":false,"iconKeySettings":[],"xLambda":1,"showTrails":false,"yAxisOption":"2","xZoomedDataMin":110,"yZoomedDataMin":110,"duration":{"timeUnit":"D","multiplier":1},"uniColorForNonSelected":false,"colorOption":"_UNIQUE_COLOR","dimensions":{"iconDimensions":["dim0"]},"playDuration":15000,"orderedByY":false}'
		   options['width'] = 900;
		   options['height'] = 500;
		   chart.draw(data, options);
 }
