function asmModule(stdlib, foreign, heap) {
  "use asm";

  // shared variables
  var sin = stdlib.Math.sin;
  var heap32 = new stdlib.Float32Array(heap);
  var size = 0;

  // function declarations
  function complexCalculation(size, factor) {
    size = size|0;
    factor = +factor
    ...
  }

  // export function
  return { complexCalculation: complexCalculation }
}
