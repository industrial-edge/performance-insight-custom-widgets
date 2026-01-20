# Custom widgets

This application example demonstrates how to use custom widgets within the apps **Performance Insight** and **Energy Manager** for flexible visualization of any plant data.

- [Custom widgets](#custom-widgets)
  - [Description](#description)
    - [Overview](#overview)
    - [Examples](#examples)
    - [General task](#general-task)
  - [Requirements](#requirements)
    - [Prerequisites](#prerequisites)
    - [Used components](#used-components)
    - [TIA Project](#tia-project)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Documentation](#documentation)
  - [Contribution](#contribution)
  - [Contribution](#disclaimer)
  - [Licence and Legal Information](#licence-and-legal-information)

## Description

### Overview

Besides the standart widget portfolio within Performance Insight and Energy Manager, users are able to create customized widgets tailored to specific needs. These widgets are based on the [Apache ECharts library](https://echarts.apache.org/examples/en/index.html), which is a free and open-source JavaScript library for data visualizations. Several defined [ECharts options](https://echarts.apache.org/en/option.html#title) enable dynamic and interactive data representation.  

![CustomWidgetExample](/docs/graphics/CustomWidetExample.png)

The ECharts library covers several widget types:  
Bar, Line, Pie, Scatter, Radar, Tree, Boxplot, Heatmap, Map, Graph, Sankey, Gauge and many more...

### Examples

[![UseCase1](/docs/graphics/UseCase_1_Beijing.png "Click here to open JavaScript code")](/src/Beijing.js)   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  [![UseCase2](/docs/graphics/UseCase_2_RadialPolarBar.png "Click here to open JavaScript code")](/src/RadialPolarBar.js)

[![UseCase100](/docs/graphics/UseCase_100_MoreExamples.png "Click here to open ECharts library")](https://echarts.apache.org/examples/en/index.html)

### General task

This repository describes how to create a custom widet within Performance Insight. It gives an overview about the configuration possibilities and provides some widget examples.  

## Requirements

### Prerequisites

- Access to an Industrial Edge Management System (IEM)
- Onboarded Industial Edge Device (IED) on IEM
- IED connected to PLC
- TIA Portal project loaded on PLC
- HTML5-capable Internet browser (e.g. Google Chrome)

### Used components

- Industrial Edge Management (IEM) V1.14.9
- Industrial Edge Device V3.0.0
- Management applications:
  - Databus Configurator V3.2.0
  - Common Connector Configurator V2.0.0
- Device applications:
  - Databus V3.1.0
  - OPC UA Connector V2.4.0
  - Common Configurator V2.2.0
  - IIH Essentials V2.2.0
  - Performance Insight V1.22.0
- TIA Portal V19

### TIA Project

This application example is based on the [tank application](https://github.com/industrial-edge/miscellaneous/tree/main/tank%20application) TIA Portal project.

## Configuration

You can find detailled information about the following steps in the [Configuration](/docs/Installation.md) documentation:

- [Configure IIH Essentials](/docs/Installation.md#configure-iih-essentials)
- [Configure Performance Insight](/docs/Installation.md#configure-performance-insight)

## Usage

You can use the custom widgets as any other widgets within Performance Insight and Energy Manager.

Via the dashboard date picker you can define the time range for incoming data to e.g. analyze system behaviour backwards.

![CEChartsWidgetWeek](/docs/graphics/EChartsWidgetWeek.png)

You can also open the *Details* view of the widget or export the data as .csv file.

Simply import [this](/src/Custom%20Widget.json) dashboard into Performance Insight or Energy Manager to try it out.

## Documentation

You can find further documentation and help in the following links:

* [Industrial Edge Hub](https://iehub.eu1.edge.siemens.cloud/#/documentation)
* [Industrial Edge Forum](https://www.siemens.com/industrial-edge-forum)
* [Industrial Edge Documentation](https://docs.industrial-operations-x.siemens.cloud/p/industrial-edge)
* [Industrial Edge landing page](https://new.siemens.com/global/en/products/automation/topic-areas/industrial-edge/simatic-edge.html)
* [Industrial Edge GitHub page](https://github.com/industrial-edge)

## Contribution

Please check our [contribution guideline](CONTRIBUTING.md). 

## Disclaimer

This documentation describes how you can download and set up a test environment which consists of or contains third-party software. 
Please read the following [disclaimer](Disclaimer_Tutorials.md) carefully.

## Licence and Legal Information

Please read the [Legal information](LICENSE.txt).
