function chartCreator(){

  $("#canvas-holder").append('<canvas id="goal-chart"></canvas>');

  var labelsarr = ["Jan 15", "Feb 15", "Mar 15", "Apr 15", "May 15", "Jun 15", "Jul 15", "Aug 15", "Sep 15", "Oct 15", "Nov 15", "Dec 15"];
var ctx = document.getElementById('goal-chart').getContext('2d');
var chart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['Jan', 'Feb', 'Mar'], //labelsarr,
      datasets: [{
         type: 'line',
         fill: false,
         label: 'Metric 1',
         backgroundColor: 'rgba(255,0,0,1)',
         borderColor: 'rgba(255,0,0,1)',
         data: [3, 2, 4], //val1
      }, {
         label: 'Metric 2',
         backgroundColor: 'rgba(0, 129, 214, 0.8)',
         data: [50, 30, 40], //val2
      }]
   },
   options: {
      tooltips: {
         callbacks: {
            label: function(t, d) {
               if (t.datasetIndex === 0) {
                  var xLabel = d.datasets[t.datasetIndex].label;
                  var yLabel = t.yLabel;
                  return xLabel + ': ' + yLabel;
               } else {
                  var xLabel = d.datasets[t.datasetIndex].label;
                  var yLabel = t.yLabel >= 1000 ? '$' + t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '$' + t.yLabel;
                  return xLabel + ': ' + yLabel;
               }
            }
         }
      },
      legend: {
         display: false,
         position: 'top',
      },
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true,
               callback: function(value, index, values) {
                  if (parseInt(value) >= 1000) {
                     return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  } else {
                     return '$' + value;
                  }
               }
            }
         }]
      }
   }
});
}
