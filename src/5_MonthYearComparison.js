// Date settings > Mixed = 1 Year (current year)
// Parameter 1 (parameters[0]) > e.g. Energy consumption 1
// Parameter 2 (parameters[1]) > e.g. Energy consumption 2
// Parameter 3 (parameters[2]) > e.g. Energy consumption 3
// Trend calculation period = 1 Month


// Data collection and transformation
// ----------------------------------
const data_month = widget.parameters.map(param => {
  const lastValue = param.data[param.data.length - 1].value;
  return { value: lastValue, name: param.name };
});

const data_year = widget.parameters.map(param => {
  const total = param.data.reduce((sum, item) => sum + item.value, 0);
  return { value: total, name: param.name };
});

const legendData = widget.parameters.map(param => param.name);

// Widget configuration
// --------------------

return {

// Tooltip configuration
  tooltip: {
    trigger: 'item',
    formatter: '{a}: {b} = {c}kWh ({d}%)'	// Formatter for the tooltip content: {a} series name, {b} data item name, {c} data value, {d} percentage
  },

  // Legend configuration
  legend: {
    data: legendData
  },

  // Series configuration: defines the actual charts to be displayed
  series: [{
	  
	  // First pie chart series: Represents monthly consumption
      name: 'Month',
      type: 'pie',
      radius: ['30%', '44%'],	// Inner and outer radius of the pie chart
      label: {
        position: 'inside',		// Position labels inside the pie slices
        fontSize: 12,
        formatter: '{d}%',		// Format labels to show only the percentage
      },
      labelLine: {
        show: true
      },
	  // Data points for the monthly pie chart
      data: data_month
    },
    {
	  // Second pie chart series: Represents yearly consumption
      name: 'Year',
      type: 'pie',
      radius: ['45%', '60%'],	// Inner and outer radius of the pie chart
      labelLine: {
        length: 30				// Length of the label lines, show labels outside the chart
      },
      label: {
        formatter: '{d}%',		// Format labels to show only the percentage
      },
	  // Data points for the yearly pie chart
      data: data_year
    }
  ]
};