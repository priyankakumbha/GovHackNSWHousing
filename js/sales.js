 function drawChartSales() {
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Region');
     data.addColumn('date', 'Month&year');
     data.addColumn('number', 'Average House Price');
     data.addRows(subrubs);

     var chart = new google.visualization.MotionChart(document.getElementById('sales_div'));
     chart.draw(data, {
         width: 900,
         height: 500
     });
 }