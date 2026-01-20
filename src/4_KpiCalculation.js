// Date settings > Mixed = 1 Year (31.12.2025 23:00 - 31.12.2026 23:00)
// Parameter 0 (parameters[0]) > e.g. Energy consumption
// Trend calculation period = 1 Month


// Data collection and transformation
// ---------------------------------

// Get the size of the array element (number of month within this year)
var array_size = __data[0].length;

// Get the value of last month
if (array_size = 1) {
  var sum_last = widget.parameters[0].data[0].value;
} else {
  var sum_last = widget.parameters[0].data[array_size - 2].value;
}
// Get the value of current month
var sum_current = widget.parameters[0].data[array_size - 1].value;


// KPI calculation
// ---------------

// Here: Comparison of current month with last month (in %)
var percentPrevious = sum_last / 100;
var percentCurrent = sum_current / percentPrevious;
var percent = percentCurrent - 100;


// Widget configuration
// --------------------

return {
  series: [{
    type: 'gauge',		// Gauge chart
    min: -100,			// min limit for the chart
    max: 100,			// max limit for the chart
	data: [{
      name: '%',		// label to be displayed
      value: percent.toFixed(0)	// value to be displayed, formatted to zero decimal places
    }]
  }]
};