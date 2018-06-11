describe ("Fizzbuzz", function() {
  var fizzbuzz;
  fizzbuzz = new Fizzbuzz();

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
    });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)
    });

  });

  describe('when playing it says', function () {

    it('"Fizz" when a number is divisible by 3', function () {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

  });
});
