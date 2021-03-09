describe("Thermostat", function() {
  describe(".temperature", function() {
    it("starts at 20 degrees", function() {
      var temp = new Thermostat;
      expect(temp.temperature()).toBe(20);
    });
  });
});
