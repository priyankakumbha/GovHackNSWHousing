 function drawChartSales() {
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Region');
     data.addColumn('date', 'Month&year');
     data.addColumn('number', 'Average House Price');
     subrubs = [
         ['Greater Sydney', new Date('Dec, 2016'), 831],
         ['Inner Ring', new Date('Dec, 2016'), 1125],
         ['Ashfield', new Date('Dec, 2016'), 787],
         ['Botany Bay', new Date('Dec, 2016'), 901],
         ['Lane Cove', new Date('Dec, 2016'), 938],
         ['Leichhardt', new Date('Dec, 2016'), 1478],
         ['Marrickville', new Date('Dec, 2016'), 1130],
         ['Mosman', new Date('Dec, 2016'), 1888],
         ['North Sydney', new Date('Dec, 2016'), 1178],
         ['Randwick', new Date('Dec, 2016'), 1125],
         ['Sydney', new Date('Dec, 2016'), 960],
         ['Waverley', new Date('Dec, 2016'), 1303],
         ['Woollahra', new Date('Dec, 2016'), 1963],
         ['Middle Ring', new Date('Dec, 2016'), 900],
         ['Auburn', new Date('Dec, 2016'), 705],
         ['Bankstown', new Date('Dec, 2016'), 870],
         ['Burwood', new Date('Dec, 2016'), 996],
         ['Canterbury', new Date('Dec, 2016'), 721],
         ['Canada Bay', new Date('Dec, 2016'), 1130],
         ['Hunters Hill', new Date('Dec, 2016'), 1825],
         ['Hurstville', new Date('Dec, 2016'), 795],
         ['Kogarah', new Date('Dec, 2016'), 1145],
         ['Ku-Ring-Gai', new Date('Dec, 2016'), 1755],
         ['Manly', new Date('Dec, 2016'), 1665],
         ['Parramatta', new Date('Dec, 2016'), 740],
         ['Rockdale', new Date('Dec, 2016'), 800],
         ['Ryde', new Date('Dec, 2016'), 965],
         ['Strathfield', new Date('Dec, 2016'), 698],
         ['Willoughby', new Date('Dec, 2016'), 1700],
         ['Outer Ring', new Date('Dec, 2016'), 730],
         ['The Hills Shire', new Date('Dec, 2016'), 1168],
         ['Blacktown', new Date('Dec, 2016'), 685],
         ['Blue Mountains', new Date('Dec, 2016'), 635],
         ['Camden', new Date('Dec, 2016'), 720],
         ['Campbelltown', new Date('Dec, 2016'), 585],
         ['Fairfield', new Date('Dec, 2016'), 736],
         ['Gosford', new Date('Dec, 2016'), 645],
         ['Hawkesbury', new Date('Dec, 2016'), 673],
         ['Holroyd', new Date('Dec, 2016'), 684],
         ['Hornsby', new Date('Dec, 2016'), 1115],
         ['Liverpool', new Date('Dec, 2016'), 725],
         ['Penrith', new Date('Dec, 2016'), 640],
         ['Pittwater', new Date('Dec, 2016'), 1550],
         ['Sutherland Shire', new Date('Dec, 2016'), 1050],
         ['Warringah', new Date('Dec, 2016'), 1293],
         ['Wollondilly', new Date('Dec, 2016'), 718],
         ['Wyong', new Date('Dec, 2016'), 510],
         ['Rest of GMR', new Date('Dec, 2016'), 520],
         ['Cessnock', new Date('Dec, 2016'), 340],
         ['Kiama', new Date('Dec, 2016'), 790],
         ['Lake Macquarie', new Date('Dec, 2016'), 511],
         ['Maitland', new Date('Dec, 2016'), 410],
         ['Newcastle', new Date('Dec, 2016'), 520],
         ['Port Stephens', new Date('Dec, 2016'), 482],
         ['Shellharbour', new Date('Dec, 2016'), 555],
         ['Wollongong', new Date('Dec, 2016'), 635],
         ['GMR', new Date('Dec, 2016'), 762],
         ['Rest of New South Wales', new Date('Dec, 2016'), 379],
         ['NEW SOUTH WALES', new Date('Dec, 2016'), 645],
         ['Strathfield', new Date('Sep, 2016'), 680],
         ['Willoughby', new Date('Sep, 2016'), 1490],
         ['Outer Ring', new Date('Sep, 2016'), 690],
         ['The Hills Shire', new Date('Sep, 2016'), 1100],
         ['Blacktown', new Date('Sep, 2016'), 660],
         ['Blue Mountains', new Date('Sep, 2016'), 585],
         ['Camden', new Date('Sep, 2016'), 710],
         ['Campbelltown', new Date('Sep, 2016'), 566],
         ['Fairfield', new Date('Sep, 2016'), 700],
         ['Gosford', new Date('Sep, 2016'), 615],
         ['Hawkesbury', new Date('Sep, 2016'), 668],
         ['Holroyd', new Date('Sep, 2016'), 690],
         ['Hornsby', new Date('Sep, 2016'), 1075],
         ['Liverpool', new Date('Sep, 2016'), 687],
         ['Penrith', new Date('Sep, 2016'), 610],
         ['Pittwater', new Date('Sep, 2016'), 1415],
         ['Sutherland Shire', new Date('Sep, 2016'), 930],
         ['Warringah', new Date('Sep, 2016'), 1236],
         ['Wollondilly', new Date('Sep, 2016'), 684],
         ['Wyong', new Date('Sep, 2016'), 499],
         ['Rest of GMR', new Date('Sep, 2016'), 500],
         ['Cessnock', new Date('Sep, 2016'), 321],
         ['Kiama', new Date('Sep, 2016'), 749],
         ['Lake Macquarie', new Date('Sep, 2016'), 487],
         ['Maitland', new Date('Sep, 2016'), 395],
         ['Newcastle', new Date('Sep, 2016'), 500],
         ['Port Stephens', new Date('Sep, 2016'), 490],
         ['Shellharbour', new Date('Sep, 2016'), 545],
         ['Wollongong', new Date('Sep, 2016'), 605],
         ['GMR', new Date('Sep, 2016'), 730],
         ['Rest of New South Wales', new Date('Sep, 2016'), 367],
         ['NEW SOUTH WALES', new Date('Sep, 2016'), 630],


     ];
     data.addRows(subrubs
         // ['Apples',  new Date (1988,0,1), 1000, 300, 'East'],
         // ['Oranges', new Date (1988,0,1), 1150, 200, 'West'],
         // ['Bananas', new Date (1988,0,1), 300,  250, 'West'],
         // ['Apples',  new Date (1989,6,1), 1200, 400, 'East'],
         // ['Oranges', new Date (1989,6,1), 750,  150, 'West'],
         // ['Bananas', new Date (1989,6,1), 788,  617, 'West']
     );

     var chart = new google.visualization.MotionChart(document.getElementById('sales_div'));
     chart.draw(data, {
         width: 900,
         height: 500
     });
 }

 