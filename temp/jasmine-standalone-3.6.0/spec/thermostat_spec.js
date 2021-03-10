describe("Thermostat", function() {
  describe(".temperature", function() {
    it("starts at 20 degrees", function() {
      var temp = new Thermostat();
      expect(temp.temperature()).toBe(20);
    });
  });

  describe(".up", function() {
    it("you can increase the temperature with an up function", function() {
      var thermo = new Thermostat();
      thermo.up(5);
      expect(thermo.temperature()).toBe(25);
    });
  });

  // You can decrease the temperature with a down function
describe(".down", function() {
    it("decreases the temperature with a down function", function() {
      let thermo = new Thermostat();
      thermo.down(5);
      expect(thermo.temperature()).toEqual(15);
    });
  });

  describe(".min", function() {
    it("the minimum temperature is 10 degrees", function() {
      let thermo =  new Thermostat();
      thermo.down(15);
      expect(thermo.temperature()).toEqual(10);
    });
  });
});
