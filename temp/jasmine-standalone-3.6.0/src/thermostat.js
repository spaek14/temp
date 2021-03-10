class Thermostat{
  constructor(current_temp = 20) {
    this.current_temp = current_temp;
  };

  temperature(){
    return this.current_temp;
  };

  up = function(value) {
    this.current_temp += value;
  };

  down = function(value) {
    this.current_temp -= value;
  };
}
