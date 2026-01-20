// Date settings > Mixed (Month)
// Parameter 1 (e.g. numberProduced)
// Parameter 2 (e.g. numberGood)
// Trend calculation period = 1 Day

// Data collection and transformation
// -----------------------------------

// dataseriesProduced: An array of data points for 'Produced' items
const dataseriesProduced = widget.parameters[0].data.map(dp => [dp.timestamp, dp.value]);

// dataseriesGood: An array of data points for 'Good' items
const dataseriesGood = widget.parameters[1].data.map(dp => [dp.timestamp, dp.value]);

// Widget configuration
// --------------------
// This is the main configuration object for the chart widget.
// It defines how the chart will look and behave.

return {
  // title: Configuration for the chart's main title.
  title: {
    text: 'Rainfall vs Evaporation'
  },
  // tooltip: Configuration for the interactive tooltip that appears on hover.
  tooltip: {
    trigger: 'axis'
  },
  // legend: Configuration for the chart legend, which identifies each series.
  legend: {
    data: ['Produced', 'Good']
  },
  // toolbox: Configuration for a set of utility tools available on the chart.
  toolbox: {
    show: true,
    feature: {
      // dataView: Allows viewing the raw data in a table format.
      dataView: {
        show: true,
        readOnly: false
      },
      // Allows switching between different charts (e.g., line, bar).
      magicType: {
        show: true,
        type: ['line', 'bar']
      },
      // restore: Allows restoring the chart to its initial state.
      restore: {
        show: true
      },
      // saveAsImage: Allows saving the chart as an image.
      saveAsImage: {
        show: true
      }
    }
  },
  calculable: true, // Enables drag-recalculable features (e.g., for data range selection).
  // xAxis: Configuration for the x-axis.
  xAxis: {
    axisLabel: {
      formatter: '{d}.{M}'
    },
    type: 'time'
  },
  // yAxis: Configuration for the y-axis. It's an array to allow for multiple y-axes if needed.
  yAxis: [{
    type: 'value'
  }],
  // series 1: bar chart for produced items
  series: [{
      name: 'Produced',
      type: 'bar',
      data: dataseriesProduced,
      markPoint: {
        data: [{
            type: 'max',
            name: 'Max'
          },
          {
            type: 'min',
            name: 'Min'
          }
        ]
      },
      // markLine: Configuration for special lines (e.g., average) on the series.
      markLine: {
        data: [{
          type: 'average',
          name: 'Avg'
        }]
      }
    },
    // series 2: bar chart for good items
    {
      name: 'Good',
      type: 'bar',
      data: dataseriesGood,
      markPoint: {
        data: [{
            type: 'max',
            name: 'Max'
          },
          {
            type: 'min',
            name: 'Min'
          }
        ]
      },
      // markLine: Same mark line configuration as the 'Produced' series.
      markLine: {
        data: [{
          type: 'average',
          name: 'Avg'
        }]
      }
    }
  ]
};