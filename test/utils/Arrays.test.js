const { ethers } = require('hardhat');
const { expect } = require('chai');
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');

const { generators } = require('../helpers/random');
const { capitalize } = require('../../scripts/helpers');
const { TYPES } = require('../../scripts/generate/templates/Arrays.opts');

// See https://en.cppreference.com/w/cpp/algorithm/lower_bound
const lowerBound = (array, value) => {
  const i = array.findIndex(element => value <= element);
  return i == -1 ? array.length : i;
};

// See https://en.cppreference.com/w/cpp/algorithm/upper_bound
const upperBound = (array, value) => {
  const i = array.findIndex(element => value < element);
  return i == -1 ? array.length : i;
};

const bigintSign = x => (x > 0n ? 1 : x < 0n ? -1 : 0);
const comparator = (a, b) => bigintSign(ethers.toBigInt(a) - ethers.toBigInt(b));
const hasDuplicates = array => array.some((v, i) => array.indexOf(v) != i);

describe('Arrays', function () {
  const fixture = async () => {
    return { mock: await ethers.deployContract('$Arrays') };
  };

  beforeEach(async function () {
    Object.assign(this, await fixture());
  });

  for (const type of TYPES) {
    const elements = Array.from({ length: 10 }, generators[type]);

    describe(type, function () {
      const fixture = async () => {
        return { instance: await ethers.deployContract(`${capitalize(type)}ArraysMock`, [elements]) };
      };

      beforeEach(async function () {
        Object.assign(this, await fixture());
      });

      describe('sort', function () {
        for (const length of [0, 1, 2, 8, 32, 128]) {
          describe(`${type}[] of length ${length}`, function () {
            beforeEach(async function () {
              this.array = Array.from({ length }, generators[type]);
            });

            afterEach(async function () {
              const expected = Array.from(this.array).sort(comparator);
              const reversed = Array.from(expected).reverse();
              expect(await this.instance.sort(this.array)).to.deep.equal(expected);
              expect(await this.instance.sortReverse(this.array)).to.deep.equal(reversed);
            });

            it('sort array', async function () {
              // nothing to do here, beforeEach and afterEach already take care of everything.
            });

            if (length > 1) {
              it('sort array for identical elements', async function () {
                // duplicate the first value to all elements
                this.array.fill(this.array.at(0));
              });

              it('sort already sorted array', async function () {
                // pre-sort the elements
                this.array.sort(comparator);
              });

              it('sort reversed array', async function () {
                // pre-sort in reverse order
                this.array.sort(comparator).reverse();
              });

              it('sort almost sorted array', async function () {
                // pre-sort + rotate (move the last element to the front) for an almost sorted effect
                this.array.sort(comparator);
                this.array.unshift(this.array.pop());
              });
            }
          });
        }
      });


    });
  }
});
