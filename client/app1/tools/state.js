import settings from '../settings';

function status () {

  console.info(`Starting ${settings.name} version ${settings.version}!`);

  for (let i = 0; i <= 10; i++) {
    setTimeout(() => console.log(`Working ${i}...`), i * 150);
  }

  setTimeout(() => console.info('Done'), 1600);
}

export { status };
