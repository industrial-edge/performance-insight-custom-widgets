// Get the length of data arrays for parameter 1-3 (used the placeholder __data[x] for each data array)
const param1Length = __data[0].length;
const param2Length = __data[1].length;
const param3Length = __data[2].length;

// Convert the last value of each parameter from seconds to hours (divide by 60 twice)
// Then round to one decimal place
const param1Value = (__data[0][param1Length - 1] / 60 / 60).toFixed(1);
const param2Value = (__data[1][param2Length - 1] / 60 / 60).toFixed(1);
const param3Value = (__data[2][param3Length - 1] / 60 / 60).toFixed(1);

return {
  title: [{
    text: 'Radial Polar Bar' 			// Chart title
  }],
  polar: {
    radius: [30, '80%'] 				// Inner and outer radius of the polar coordinate system
  },
  radiusAxis: {
    max: 4 								// Maximum value for the radius axis
  },
  angleAxis: {
    type: 'category', 					// Categorical axis for angles
    data: ['Production', 'Unplanned Downtime', 'Planned Downtime'], // Labels for each bar (parameter 1-3)
    startAngle: 75 						// Starting angle of the first category
  },
  tooltip: {}, 							// Enables tooltip on hover
  
  // Data series configuration
  series: {
    type: 'bar', 						// Type of chart (bar)
    data: [param1Value, param2Value, param3Value], // Data values for each category (parameter 1-3)
    coordinateSystem: 'polar', 			// Use polar coordinate system
    label: {
      // show: true,
      position: 'middle', 				// Position of the label inside the bar
      formatter: '{b}: {c}' 			// Format: category name and value
    }
  },
  animation: false 						// Disable animation
};