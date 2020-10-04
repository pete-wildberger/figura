import * as cp from 'child_process';
import { promisify } from 'util';
const exec = promisify(cp.exec);

export const parseImage = async (image_path: string): Promise<string> => {
  try {
    const { stdout, stderr } = await exec(`tesseract ${image_path} ${image_path} -l lat`);
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
    return stdout;
  } catch (e) {
    console.log('Parse failure ', e);
    throw e;
  }
};
