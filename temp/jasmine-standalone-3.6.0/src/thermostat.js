class Thermostat {
  constructor(currentTemp = 20, minTemp = 10) {
    this.currentTemp = currentTemp;
    this.minTemp = minTemp;
    this.powerSaver = true;
};

temperature() {
  return this.currentTemp
};

up = function(value) {
  if (this.powerSaver === true && this.currentTemp + value > 25) {
    this.currentTemp = 25
  }
  else if (this.powerSaver === false && this.currentTemp + value > 32) {
    this.currentTemp = 32
  }
  else {
    this.currentTemp += value;
  };
};

down = function(value) {
  if (this.currentTemp - value < this.minTemp) {
    this.currentTemp = this.minTemp
  } else {
    this.currentTemp -= value;
  };
};

powerSavingMode = function(setting) {
  if (setting === "on") {
    this.powerSaver = true;
  } else if (setting === "off") {
    this.powerSaver = false;
  };
};
}
