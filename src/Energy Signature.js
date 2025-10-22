
// fix values for testing
/*

const signature = [
  [-10, 6600],
  [10, 2000],
  [15, 1500],
  [30, 1100]
];
const data = [
  [17.6, 1175],
  [15.7, 1018],
  [15.45, 833]
];

*/

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
    axisPointer: {
      type: 'cross' 	// Use a crosshair pointer
    }
  },
  xAxis: {
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