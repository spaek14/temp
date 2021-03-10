class Thermostat{
  constructor(currentTemp = 20, minTemp = 10) {
    this.currentTemp = currentTemp;
    this.minTemp = minTemp;
  };

  temperature(){
    return this.currentTemp;
  };

  up = function(value) {
    this.currentTemp += value;
  };

  down = function(value) {
    if(this.currentTemp - value < this.minTemp) {
      this.currentTemp = this.minTemp
    } else {
      this.currentTemp -= value;
    };
  };
}
