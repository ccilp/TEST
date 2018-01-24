describe("arrangement", function() {
  var testCases = [
    {
      n : 0,
      r :
      arrangement :
    },
    {
      n : 1,
      r : ,
      arrangement :
    },
    {
      n : 2,
      r : ,
      arrangement :
    },
    {
      n : 3,
      r : ,
      arrangement :
    },
    {
      n : 4,
      r : ,
      factorial : 
    }
  ];
testCases.forEach(function(testCases){
it("should returns " + testCases.factorial + "when n = "+ testCases.n, function() {
var result = Util.factorial(testCases.n);
expect(result).toEqual(testCases.factorial);
})
})


});
