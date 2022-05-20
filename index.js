const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;

// Code your solution here
function addingUpAllBatteries(batteryBatches) {
    totalBatteries = batteryBatches.reduce(function(prev, curr) {
        return prev + curr;
    }, totalBatteries);
}

addingUpAllBatteries(batteryBatches);

