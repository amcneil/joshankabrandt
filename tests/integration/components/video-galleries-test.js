import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('video-galleries', 'Integration | Component | video galleries', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{video-galleries}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#video-galleries}}
      template block text
    {{/video-galleries}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
