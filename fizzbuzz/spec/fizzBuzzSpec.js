describe ("Fizzbuzz", function() {
  it("returns fizz", function() {
    expect(Fizzbuzz(3)).toEqual("fizz");
  });

  it("returns buzz", function() {
    expect(Fizzbuzz(5)).toEqual("buzz");
  });
});
