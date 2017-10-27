function chartCreator(inputData){

  $("#canvas-holder").empty();
  $("#canvas-holder").append('<canvas width=150 height=150 id="goal-chart"></canvas>');

  var canvasObject = document.getElementById('goal-chart');

  canvasObject.width  = 400;
  canvasObject.height = 300;

  var ctx = document.getElementById('goal-chart').getContext('2d');

  var data = {
  labels: inputData.labels,
  dates: inputData.dates,
  competitions: inputData.competitions,
  datasets: [
      {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: inputData.data,
          spanGaps: false,
      }
  ]
};



var options = {
      responsive: true,
      title: {
          display: false,
          position: "top",
          text: 'anything',
          fontSize: 18,
          fontColor: "#111"
      },
      tooltips: {
              enabled: true,
              mode: 'single',
              callbacks: {
                  label: function(tooltipItems, data) {
                    console.log(tooltipItems)
                    console.log(data)
                     var multistringText = [tooltipItems.yLabel];
                         multistringText.push(tooltipItems.index+1);
                      return multistringText;
                  }
              }
          },
      legend: {
          display: false,
          position: "bottom",
          labels: {
              fontColor: "#333",
              fontSize: 16
          }
      },
      scales:{
          yAxes:[{
              display:true,
              ticks:{
                  suggestedMin: 0,
                  callback: function(value) {if (value % 1 === 0) {return value;}},
              }
          }]

      }
  };
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
}
