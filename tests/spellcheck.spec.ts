import * as chai from 'chai';
import { SpellCheckController } from '../server/controllers';
const expect = chai.expect;

describe('SpellCheckController', () => {
  const controller = SpellCheckController;
  it('should have aff and dic properties that are not null', async () => {
    expect(controller.aff).to.be.a('string');
    expect(controller.dic).to.be.a('string');
  });
  it('should link aff and dic property values to node_module files', async () => {
    expect(controller.aff.includes('node_modules')).to.be.true;
    expect(controller.dic.includes('node_modules')).to.be.true;
  });
});
