import * as path from 'path';
import type { Request, Response, NextFunction } from 'express';

class SpellCheckController {
  public aff = null;
  public dic = null;
  constructor() {
    const base = path.dirname(require.resolve('dictionary-la/package.json'));
    this.dic = path.join(base, 'index.dic');
    this.aff = path.join(base, 'index.aff');
  }

  getDic(req: Request, res: Response) {
    res.sendFile(this.dic);
  }

  getAff(req: Request, res: Response) {
    res.sendFile(this.aff);
  }
}

const controller = new SpellCheckController();

export { controller as SpellCheckController };
