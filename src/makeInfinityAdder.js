'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let counter = 0;

  const add = (number) => {
    if (number === undefined) {
      const reuslt = counter;

      counter = 0;

      return reuslt;
    } else {
      counter += number;

      return add;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
