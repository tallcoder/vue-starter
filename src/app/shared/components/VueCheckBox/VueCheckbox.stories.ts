import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueCheckBox   from './VueCheckBox.vue';

const story = (storiesOf('VueCheckBox', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Checkbox', () => ({
  components: { VueCheckBox },
  template:   `<vue-check-box label="checkbox" name="checkbox" id="checkbox" />`,
}));

story.add('Radio button', () => ({
  components: { VueCheckBox },
  template:   `<vue-check-box label="radio button" name="radio" id="radio" radio />`,
}));
