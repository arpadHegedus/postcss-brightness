const plugin = require('./')
const postcss = require('postcss')
function testCode(code, expected, options = {}, plugins = []) {
  return () => {
    if (plugins.length === 0) plugins.push(plugin(options));
    return postcss(plugins)
      .process(code, { from: undefined })
      .then(result => {
        expect(result.css.replace(/[\n]/ig, '')).toEqual(expected);
      })
  }
}

it('can set brightness', testCode(
  'div { color: brightness(#34bbed, 80) }',
  'div { color: #a1dff7 }'
))
it('can add to brightness levels', testCode(
  'div { color: brightness(#34bbed, +10) }',
  'div { color: #63caf1 }'
))
it('can retract from brightness levels', testCode(
  'div { color: brightness(#34bbed, -10) }',
  'div { color: #13a4db }'
))
