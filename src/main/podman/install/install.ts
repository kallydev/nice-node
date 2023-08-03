import logger from '../../logger';
import * as platform from '../../platform';
import installOnMac from './installOnMac';
import installOnWindows from './installOnWindows';
import installOnLinux from './installOnLinux';

export const VERSION = '4.6.0';

// eslint-disable-next-line
const installPodman = async (): Promise<any> => {
  logger.info(`Starting podman install...`);

  let result;
  if (platform.isMac()) {
    result = await installOnMac(VERSION);
  } else if (platform.isWindows()) {
    result = await installOnWindows(VERSION);
  } else if (platform.isLinux()) {
    result = await installOnLinux();
  } else {
    result = { error: 'Unable to install Podman on this operating system.' };
  }
  logger.info(`Finished podman install. Result: ${result}`);
  return result;
};

export default installPodman;