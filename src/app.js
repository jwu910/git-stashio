import 'babel-polyfill';

import updateNotifier from 'update-notifier';

import * as pkg from '../package.json';

const notifier = updateNotifier({ pkg });

if (notifier.update) {
    notifer.notify();
}

export const start = args => {
  if (args[0] === '-v' || args[0] === '--version') {
    process.stdout.write(pkg.version);

    process.exit(0);
  }

  console.log('Start app!');
}
