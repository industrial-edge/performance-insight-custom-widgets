# Configuration

- [Configuration](#configuration)
  - [Configure IIH Essentials](#configure-iih-essentials)
  - [Configure Performance Insight](#configure-performance-insight)
    - [Create a standart custom widget](#create-a-standart-custom-widget)
    - [EChart options](#echart-options)
    - [Create a custom widget](#create-a-custom-widget)
    - [Alternative options for accessing data](#alternative-options-for-accessing-data)
    - [Widget examples](#widget-examples)

## Configure IIH Essentials

The PLC with the running TIA project is connected via the OPC UA connector to the Industrial Edge Device (IED). Within the connector, all necessary tags are configured and deployed.  

Now the app IIH Essentials needs to collect and store this data, to further use it within Performance Insight.

- Make sure the OPC UA Connector is activated within IIH Essentials

![Connector](/docs/graphics/Connector.png)

- Add the following PLC attributes to a new or existing asset:
  - *GDB.process.numberFaulty*

!!! TODO !!! :
![Variables](/docs/graphics/Variables.png)

## Configure Performance Insight

## Create a standart custom widget

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

## EChart options

`
Echart option:
series: [{
   {type: line}
 }]
`

## Create a custom widget

xxx

## Alternative options for accessing data

xxx

## Widget examples

xxx

See the chapter [Usage](/README.md#usage) to discover further information.