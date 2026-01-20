
// fix signature values
const signature = [
  [-10, 6600],
  [-8, 5500],
  [-6, 4600],
  [-4, 3800],
  [-2, 3100],
  [0, 2700],
  [2, 2400],
  [4, 2300],
  [6, 2200],
  [8, 2100],
  [10, 2000],
  [12, 1950],
  [14, 1900],
  [16, 1850],
  [18, 1800],
  [20, 1760],
  [22, 1720],
  [24, 1690],
  [26, 1670],
  [28, 1655],
  [30, 1650]
];

// Initialize an empty array to store datapoints
const datapoints = [];

// Loop through the data arrays, ensuring we don't exceed the length of either __data[0] or __data[1]
for (let i = 0; (i < __data[0].length) && (i < __data[1].length); i++) {
  
  // Create a datapoint object with temperature and energy properties
  const dp = {
    temperature: "",
    energy: ""
  };

  // Assign temperature and energy values from __data arrays, rounded to one decimal place
  dp.temperature = __data[0][i].toFixed(1);
  dp.energy = __data[1][i].toFixed(1);

  // Add the datapoint to the datapoints array
  datapoints.push(dp);
}

// Transform the datapoints into a format suitable for plotting: [temperature, energy]
const dataseries = datapoints.map(dp => [dp.temperature, dp.energy]);

// Chart configuration
return {
  tooltip: {
    trigger: 'axis', 	// Show tooltip when hovering over axis
  },
  xAxis: {
	axisLabel: {
      formatter: '{value} °C'
    },
    splitLine: {
      lineStyle: {
        type: 'dashed' 	// Dashed grid lines on the x-axis
      }
    },
    splitNumber: 10 	// Suggests dividing the axis into 10 segments
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed' 	// Dashed grid lines on the y-axis
      }
    }
  },
  series: [
    {
      name: 'signature', // Name of the first data series
      type: 'line',      // Line chart
      color: '#FD0100',  // Red color for the line
      data: signature    // Data for the line chart (assumed to be defined elsewhere)
    },
    {
      name: 'data',       // Name of the second data series
      type: 'scatter',    // Scatter plot
      data: dataseries    // Data points from the datapoints array
    }
  ]
};