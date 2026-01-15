// Date settings > Mixed (Day-1)
// Parameter 1 (machineStateOEE)
// Trend calculation period = 1 Minute

// These variables will store the total occurrences for broad failure types.
var count_level1_MechanicalFailure = 0;
var count_level1_ProcessFailure = 0;
var count_level1_GenericFailure = 0;

// These variables will store the total occurrences for very specific machine states or failures.
var count_state_4_BottleInWrongPosition = 0;
var count_state_5_CrackedBottleDetected = 0;
var count_state_6_NoBottleInConveyor = 0;
var count_state_7_WrongBottleDetected = 0;
var count_state_8_ConveyorMalfunction = 0;
var count_state_9_FillerMalfunction = 0;
var count_state_10_ValveBlocked = 0;
var count_state_11_NoFlowInMainPipe = 0;
var count_state_12_CheckPlcBuffer = 0;
var count_state_13_CheckAlarmBuffer = 0;
var count_state_14_ContactWithSupplier = 0;

// Data collection and transformation
// -----------------------------------

// Loop through all machine states that occured during a day (1 minute slices)
for (let i = 0; i < __data[0].length; i++) {
  
  // Count up machine states depending on the current value
  switch (__data[0][i]) {

    case 4: // State 4: Bottle in Wrong Position
      count_state_4_BottleInWrongPosition++;
      count_level1_ProcessFailure++;
      break;

    case 5: // State 5: Cracked Bottle Detected
      count_state_5_CrackedBottleDetected++;
      count_level1_ProcessFailure++;
      break;

    case 6: // State 6: No Bottle in Conveyor
      count_state_6_NoBottleInConveyor++;
      count_level1_ProcessFailure++;
      break;

    case 7: // State 7: Wrong Bottle Detected
      count_state_7_WrongBottleDetected++;
      count_level1_ProcessFailure++;
      break;

    case 8: // State 8: Conveyor Malfunction
      count_state_8_ConveyorMalfunction++;
      count_level1_MechanicalFailure++; 
      break;

    case 9: // State 9: Filler Malfunction
      count_state_9_FillerMalfunction++;
      count_level1_MechanicalFailure++; 
      break;

    case 10: // State 10: Valve Blocked
      count_state_10_ValveBlocked++;
      count_level1_MechanicalFailure++; 
      break;

    case 11: // State 11: No Flow in Main Pipe
      count_state_11_NoFlowInMainPipe++;
      count_level1_ProcessFailure++;
      break;

    case 12: // State 12: Check PLC Buffer
      count_state_12_CheckPlcBuffer++;
      count_level1_GenericFailure++; 
      break;

    case 13: // State 13: Check Alarm Buffer
      count_state_13_CheckAlarmBuffer++;
      count_level1_GenericFailure++; 
      break;

    case 14: // State 14: Contact with Supplier
      count_state_14_ContactWithSupplier++;
      count_level1_GenericFailure++; 
      break;

    default:
      break;
  }
}

// --- Prepare data for Level 1 visualization (e.g., outer pie chart) ---
var level1 = [{
    value: count_level1_MechanicalFailure,
    name: 'Meachanical failure' // Typo: Should be 'Mechanical failure'
  },
  {
    value: count_level1_ProcessFailure,
    name: 'Process failure'
  },
  {
    value: count_level1_GenericFailure,
    name: 'Generic failure'
  }
];

// --- Prepare data for Level 2 visualization (e.g., inner pie chart) ---
var level2 = [
  {
    value: count_state_4_BottleInWrongPosition,
    name: 'BottleInWrongPosition'
  },
  {
    value: count_state_5_CrackedBottleDetected,
    name: 'CrackedBottleDetected'
  },
  {
    value: count_state_6_NoBottleInConveyor,
    name: 'NoBottleInConveyor'
  },
  {
    value: count_state_7_WrongBottleDetected,
    name: 'WrongBottleDetected'
  },
  {
    value: count_state_8_ConveyorMalfunction,
    name: 'ConveyorMalfunction'
  },
  {
    value: count_state_9_FillerMalfunction,
    name: 'FillerMalfunction'
  },
  {
    value: count_state_10_ValveBlocked,
    name: 'ValveBlocked'
  },
  {
    value: count_state_11_NoFlowInMainPipe,
    name: 'NoFlowInMainPipe'
  },
  {
    value: count_state_12_CheckPlcBuffer,
    name: 'CheckPlcBuffer'
  },
  {
    value: count_state_13_CheckAlarmBuffer,
    name: 'CheckAlarmBuffer'
  },
  {
    value: count_state_14_ContactWithSupplier,
    name: 'ContactWithSupplier'
  }
];

// Widget configuration
// --------------------
return {
  // Tooltip configuration: defines what appears when hovering over a chart segment.
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {d}%'
  },
  // Legend configuration: defines how the legend (key for chart segments) is displayed.
  legend: {
    type: 'scroll',
    orient: 'vertical',
    width: '20%',
    right: 10
  },
  // Series configuration: defines the actual chart data and appearance.
  series: [
  // 1st series (inner pie chart)
  {
      name: 'Level 1',
      type: 'pie',
      radius: ['0%', '70%'],
      center: ['35%', '50%'],
      label: {
        formatter: '{b}',
        position: 'inside'
      },
      data: level1
    },
	// 2nd series (outer pie chart)
    {
      name: 'Level 2',
      type: 'pie',
      radius: ['72%', '100%'],
      center: ['35%', '50%'],
      data: level2,
      label: {
        show: ''
      }
    }
  ]
};