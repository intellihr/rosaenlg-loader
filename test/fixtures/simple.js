// import 'crypto'
import rosaenlg from 'rosaenlg/dist/rollup/rosaenlg_tiny_en_US_3.0.0';
import simple from './simple.pug'

const text = simple.en_US({
  util: new rosaenlg.NlgLib({ language: 'en_US' })
})
__export__ = text;

export default {};
