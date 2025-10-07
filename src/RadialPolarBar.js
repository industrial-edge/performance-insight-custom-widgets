const param1Length = __data[0].length;
const param2Length = __data[1].length;
const param3Length = __data[2].length;

// Value [s] / 60 [min] / 60 [h]
const param1Value = (__data[0][param1Length - 1] / 60 / 60).toFixed(1);
const param2Value = (__data[1][param2Length - 1] / 60 / 60).toFixed(1);
const param3Value = (__data[2][param3Length - 1] / 60 / 60).toFixed(1);

return {
  title: [{
    text: 'Radial Polar Bar'
  }],
  polar: {
    radius: [30, '80%']
  },
  radiusAxis: {
    max: 4
  },
  angleAxis: {
    type: 'category',
    data: ['Production', 'Unplanned Downtime', 'Planned Downtime'],
    startAngle: 75
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [param1Value, param2Value, param3Value],
    coordinateSystem: 'polar',
    label: {
      //show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  },
  animation: false
};