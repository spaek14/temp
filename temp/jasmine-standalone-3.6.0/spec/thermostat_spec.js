describe("Thermostat", function() {
  describe(".temperature", function() {
    it("starts at 20 degrees", function() {
      var temp = new Thermostat;
      expect(temp.temperature()).toBe(20);
    });
  });

  describe(".up", function() {
    it("you can increase the temperature with an up function", function() {
      var thermo = new Thermostat;
      thermo.up(5);
      expect(temp.temperature()).toBe(25);
    });
  });
});
