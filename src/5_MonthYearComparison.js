// Date settings > Mixed = 1 Year (current year)
// Parameter 1 (parameters[0]) > e.g. Energy consumption 1
// Parameter 2 (parameters[1]) > e.g. Energy consumption 2
// Parameter 3 (parameters[2]) > e.g. Energy consumption 3
// Trend calculation period = 1 Month


// Data retrieval and transformation
// ---------------------------------

// Get the size of the array element (number of month within this year)
var numberOfMonth = __data[0].length;

// Get the values of last month out of parameter 1,2,3
var month_1 = widget.parameters[0].data[numberOfMonth - 1].value;
var month_2 = widget.parameters[1].data[numberOfMonth - 1].value;
var month_3 = widget.parameters[2].data[numberOfMonth - 1].value;

var year_1 = 0;
var year_2 = 0;
var year_3 = 0;

// Get the values of whole year out of parameters 1,2,3 by adding each monthly value
for (let i = 0; i < numberOfMonth; i++) {
  year_1 = year_1 + widget.parameters[0].data[i].value;
  year_2 = year_2 + widget.parameters[1].data[i].value;
  year_3 = year_3 + widget.parameters[2].data[i].value;
}

// Widget configuration
// --------------------

return {

// Tooltip configuration
  tooltip: {
    trigger: 'item',
    formatter: '{a}: {b} = {c} ({d}%)'	// Formatter for the tooltip content: {a} series name, {b} data item name, {c} data value, {d} percentage
  },

  // Legend configuration
  legend: {
    data: [
      'Electrictiy', //__parameterName[0],
      'Water', 		//__parameterName[1],
      'Gas' 		//__parameterName[2]
    ]
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
      data: [{
          value: month_1.toFixed(1),
          name: 'Electrictiy' //__parameterName[0]
        },
        {
          value: month_2.toFixed(1),
          name: 'Water' //__parameterName[1]
        },
        {
          value: month_3.toFixed(1),
          name: 'Gas' //__parameterName[2]
        }
      ]
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
      data: [{
          value: year_1.toFixed(1),
          name: 'Electrictiy' //_parameterName[0]
        },
        {
          value: year_2.toFixed(1),
          name: 'Water' //__parameterName[1]
        },
        {
          value: year_3.toFixed(1),
          name: 'Gas' //__parameterName[2]
        }
      ]
    }
  ]
};