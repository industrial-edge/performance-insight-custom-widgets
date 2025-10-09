// Extract timestamp and value pairs from parameter 1
const dataseries = widget.parameters[0].data.map(dp => [dp.timestamp, dp.value]);

return {
  title: {					
    text: 'Beijing AQI', 	// Title text
    left: '1%'           	// Position of the title from the left
  },
  tooltip: {
    trigger: 'axis' 		// Tooltip appears when interacting with the axis
  },
  grid: {					// Layout of the chart grid
    left: '5%',
    right: '15%',
    bottom: '10%'
  },
  xAxis: {					// X-axis configuration
    type: 'time',    		// Time-based axis
    data: __time[0]	 		// Use placeholder to get array of time values (parameter 1)
  },
  yAxis: {},				// Y-axis configuration (default settings)
  
  toolbox: {				// Toolbox with interactive features
    right: 10,
    feature: {
      dataZoom: {
        yAxisIndex: 'none' 	// Zoom only affects the x-axis
      },
      restore: {},         	// Reset the chart to its original state
      saveAsImage: {}      	// Save the chart as an image
    }
  },
  dataZoom: [				// Zoom functionality inside the chart
    {
      type: 'inside' 		// Enables zooming via mouse or touch gestures
    }
  ],
  visualMap: {				// Visual map for color-coding levels
    top: 50,
    right: 10,
    pieces: [ 				// Define ranges and their corresponding colors
      { gt: 0, lte: 50, color: '#93CE07' },   // green
      { gt: 50, lte: 100, color: '#FBDB0F' }, // yellow
      { gt: 100, lte: 150, color: '#FC7D02' },// orange
      { gt: 150, lte: 200, color: '#FD0100' },// red
      { gt: 200, lte: 300, color: '#AA069F' },// purple
      { gt: 300, color: '#AC3B2A' }           // brown
    ],
    outOfRange: {
      color: '#999' 		// grey (values outside defined ranges)
    }
  },

  // Data series configuration
  series: {
    name: 'Beijing AQI', 	// Series name
    type: 'line',        	// Type of chart (line)
    data: dataseries,    	// Data points (timestamp, value)
    
	markLine: {				// Horizontal lines marking thresholds
      silent: true, 		
      lineStyle: {
        color: '#333' 		
      },
      data: [ 				// threshold lines
        { yAxis: 50 },
        { yAxis: 100 },
        { yAxis: 150 },
        { yAxis: 200 },
        { yAxis: 300 }
      ]
    }
  }
};