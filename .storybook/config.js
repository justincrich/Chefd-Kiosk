import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
const req = require.context('../src/components',true,/\.stories\.js$/);
function loadStories() {
  // req.keys().forEach((filename)=>req(filename))
  require('../stories/index');
}
setOptions({
  name: "Chef'd Storybook",
  url: 'https://github.com/GetChefd/chefd-kiosk',
  showSearchBox: false,
});
configure(loadStories, module);
