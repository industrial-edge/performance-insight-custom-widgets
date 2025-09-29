# Configuration

- [Configuration](#configuration)
  - [Configure IIH Essentials](#configure-iih-essentials)
  - [EChart options](#echart-options)
  - [Configure Performance Insight](#configure-performance-insight)
    - [Accessing data](#Accessing-data)
    - [Create a standart custom widget](#create-a-standart-custom-widget)
    - [Create an individual custom widget](#create-an-individual-custom-widget)
    - [Widget examples](#widget-examples)

## Configure IIH Essentials

The PLC with the running TIA project is connected via the OPC UA connector to the Industrial Edge Device (IED). Within the connector, all necessary tags are configured and deployed.  

Please visit one of our [connector application examples](https://github.com/search?q=org%3Aindustrial-edge%2C+*connector*&type=repositories) to discover the basics of using connectors on an IED.

Now the app IIH Essentials needs to collect and store this data, to further use it within Performance Insight. Make sure the OPC UA Connector is activated within IIH Essentials!

- Add the following PLC attributes to a new or existing asset:
  - *GDB.process.numberFaulty*

!!! TODO !!! :
![Variables](/docs/graphics/Variables.png)

## EChart options

The custom widgets are based on the [Apache ECharts library](https://echarts.apache.org/examples/en/index.html), where you can find examples for several dashboard types. If you open the [ECharts options](https://echarts.apache.org/en/option.html#title) overview page, you can discover the different possibilities you have to configure a widget.  

The essential option for configuring the widget types is the 'series' option.

For example, to configure a line diagram, it looks like this:

```js
series: [{ 
    {type: line} 
  }]
```

Within Performance Insight the default code for a custom widget looks like this:

```js
  series: widget.parameters?.map(parameter => ({
    data: parameter.data?.map(d => ([d.timestamp, d.value])),
    type: 'line',
    itemStyle: {
      color: parameter.color
    }
  }))
  ```

## Configure Performance Insight

### Accessing data

**Access via widget object**

Use the widget object and map the 'data' structure:

![WidgetObject](/docs/graphics/WidgetObject.png)

Example 1 (default widget access):

```js
  series: widget.parameters?.map(parameter => ({
    data: parameter.data?.map(d => ([d.timestamp, d.value])),
    type: 'line',
    itemStyle: {
      color: parameter.color
    }
  }))
```

Example 2 (access 1. parameter):

```js
const dataseries = widget.parameters[0].data.map(dp => [dp.timestamp, dp.value]);
...
  series: [{
    type: 'line',
    data: dataseries,
    itemStyle: {
      color: widget.parameters[0].color
    }
  }]
```

![AccessViaWidgetObject](/docs/graphics/AccessViaWidgetObject.png)

**Access via placeholders**

The widget editor provides several placeholders to access dashboard data as needed. These placeholders will be replaced with the actual data when the widget is rendered:

![Placeholders](/docs/graphics/Placeholders.png)

Example (access 1. parameter):

```js
const length = __data[0].length;
const datapoints = [];

// access data via placeholder and map to datapoint structure
for (let i = 0; i < length; i++) {
  const dp = {
    timestamp: "",
    value: ""
  };
  dp.timestamp = __time[0][i];
  dp.value = __data[0][i];
  datapoints.push(dp);
}

const dataseries = datapoints.map(dp => [dp.timestamp, dp.value]);
...
  series: [{
    type: 'line',
    data: dataseries,
    itemStyle: {
      color: __parameterColor[0]
    }
  }]
```

![AccessViaPlaceholder](/docs/graphics/AccessViaPlaceholder.png)

### Create a standart custom widget

After preparing all necessary input data, you can create a standart custom widet.

- Go to *My Plant* and select the dedicated asset
- Choose *Add dashboard* > *User-defined dashboard* to create a new dashboard 'Widgets'
- Click on *Add first widget*

The widget configuration wizard opens. Set the configuration as following:

1 General:
- Select *Custom* widget type
- Enter the widget name *Standart custom widget*

![StandartWidget_Config1](/docs/graphics/StandartWidget_Config1.png)

2 Parameter:
- Select the parameter *GDB.process.numberFaulty* and set aggregation to *Counter*

![StandartWidget_Config2](/docs/graphics/StandartWidget_Config2.png)

3 Details:
- set the *Trend calculation period* to 1 minute

Under *Custom chart configuration* you find the JavaScript editor for the custom widget code. Per default, there is already a code example inserted. In this case it is a simple diagram template were the previously selected input parameter is already mapped into the code. It looks like this:

![StandartWidget_Config3](/docs/graphics/StandartWidget_Config3.png)

- Click on *Create widget* to finalize the custom widget

Finally, the custom widget is created an looks like this:

![StandartWidget](/docs/graphics/StandartWidget.png)

### Create an individual custom widget

xxx

### Widget examples

xxx

**IMPORTANT**: Always state the keyword `return {}` to make your script and configuration working!

See the chapter [Usage](/README.md#usage) to discover further information.