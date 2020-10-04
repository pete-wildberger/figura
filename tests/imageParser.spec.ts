import * as chai from 'chai';
import { parseImage } from '../server/imageParser';
const expect = chai.expect;

const image_path = '/Users/peter/figura/tests/data/winnie_ille_pooh.jpg';

describe('parseImage', () => {
  describe('winnie_ille_pooh.jpg', () => {
    it('should parse the image without erroring', async () => {
      return parseImage(image_path)
        .then(function (res) {
          expect(res).to.be.a('string');
          console.log(res);
        })
        .catch(function (m) {
          throw new Error('was not supposed to fail');
        });
    }).timeout(60000);
  });
});
