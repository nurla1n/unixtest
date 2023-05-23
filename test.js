const chai = require('chai');
const expect = chai.expect;
describe('Array', function() {
    describe('#includes()', function() {
      it('should return false when the value is not present', function() {
        expect(['Mercedes','BMW','Opel'].includes('Audi')).to.equal(false);
      });
    });
  });
