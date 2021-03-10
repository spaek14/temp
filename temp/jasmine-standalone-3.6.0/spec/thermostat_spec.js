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
      let thermo = new Thermostat();
      thermo.down(15);
      expect(thermo.temperature()).toEqual(10);
    });
  });

// If power saving mode is on, the maximum temperature is 25 degrees
  describe("powerSavingMode", function() {
    it("power saver max temp 25", function() {
      let thermo = new Thermostat();
      thermo.powerSavingMode("on");
      thermo.up(10);
      expect(thermo.temperature()).toEqual(25);
    });
  });

  describe("powerSavingMode", function() {
    it("power saver off max temp 32", function() {
      let thermo = new Thermostat();
      thermo.powerSavingMode("off");
      thermo.up(30);
      expect(thermo.temperature()).toEqual(32);
    });
  });

  describe("powerSavingMode", function() {
    it("power saver is on by default but can by toggled on and off", function() {
      let thermo = new Thermostat();
      expect(thermo.powerSaver).toBe(true)
      thermo.powerSavingMode("off");
      expect(thermo.powerSaver).toBe(false)
    });
  });
});
