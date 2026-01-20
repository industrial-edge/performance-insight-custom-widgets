// Date settings > Mixed = 1 Month (current month)
// Parameter 1 (parameters[0]) > e.g. Energy consumption
// Trend calculation period = 1 Hour

// Data collection and transformation
// ---------------------------------

// Get the size of the array element (number of hours within month including the current hour)
var numberOfHours = __data[0].length;

// Initialize an empty array to store datapoints
const datapoints_current = [];
const datapoints_high = [];
const datapoints_low = [];

// Current sum of hours within month
var sumMonth = 0;

// Loop through the data arrays (hours)
for (let i = 0; i < numberOfHours; i++) {

  // Define structure for dataserie visualisation
  const current = {
    timestamp: "",
    value: ""
  };
  const high = {
    timestamp: "",
    value: ""
  };
  const low = {
    timestamp: "",
    value: ""
  };

  // Get value for current hour
  var currentHour = widget.parameters[0].data[i].value;

  // Current sum of hours within month
  sumMonth = sumMonth + widget.parameters[0].data[i].value;

  // Current avergage of hours within month
  var averageMonth = sumMonth / (i + 1);

  // Average + 10%
  var averageHigh = averageMonth * 1.1;

  // Average - 10%
  var averageLow = averageMonth * 0.9;

  // Assign the values
  current.timestamp = widget.parameters[0].data[i].timestamp;
  current.value = currentHour.toFixed(0);

  high.timestamp = widget.parameters[0].data[i].timestamp;
  high.value = averageHigh.toFixed(0);

  low.timestamp = widget.parameters[0].data[i].timestamp;
  low.value = averageLow.toFixed(0);

  // Add the datapoint to the datapoints array
  datapoints_current.push(current);
  datapoints_high.push(high);
  datapoints_low.push(low);

}

// Transform the datapoints into a format suitable for plotting:
const dataseries_current = datapoints_current.map(dp => [dp.timestamp, dp.value]);
const dataseries_high = datapoints_high.map(dp => [dp.timestamp, dp.value]);
const dataseries_low = datapoints_low.map(dp => [dp.timestamp, dp.value]);

// Widget configuration
// --------------------

return {
  // Define series colors
  color: ['#1e90ff', 'red', '#32cd32'],

  // Tooltip configuration
  tooltip: {
    trigger: 'axis', // Show tooltip when hovering over axis
    axisPointer: {
      type: 'cross' // Use a crosshair pointer
    }
  },
  // Legend configuration
  legend: {
    orient: 'horizontal',
    icon: 'circle'
  },
  grid: {
    left: '3%',
    right: '10%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    axisLabel: {
      formatter: '{d}.{M}'
    },
    type: 'time'
  },
  yAxis: {
    name: 'kWh'
  },

  series: [{
      name: 'Current',
      type: 'line',
      data: dataseries_current,
      lineStyle: {
        width: 2,
        type: 'solid'
      },
      showSymbol: false
    },
    {
      name: 'Monthly average + 10%',
      type: 'line',
      data: dataseries_high,
      lineStyle: {
        width: 2,
        type: 'dashed'
      },
      showSymbol: false
    },
    {
      name: 'Monthly average - 10%',
      type: 'line',
      data: dataseries_low,
      lineStyle: {
        width: 2,
        type: 'dashed'
      },
      showSymbol: false
    },
  ]
};