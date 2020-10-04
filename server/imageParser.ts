import * as cp from 'child_process';
import { parse as parsePath } from 'path';
import { promisify } from 'util';
const exec = promisify(cp.exec);

export const parseImage = async (image_path: string): Promise<string> => {
  try {
    const { dir, name } = parsePath(image_path);
    const { stdout, stderr } = await exec(`tesseract ${image_path} ${dir}/${name}.txt -l lat`);
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
    return stdout;
  } catch (e) {
    console.log('Parse failure ', e);
    throw e;
  }
};
