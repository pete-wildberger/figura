import * as path from 'path';
import type { Request, Response, NextFunction } from 'express';

class SpellCheckController {
  private aff = null;
  private dic = null;
  constructor() {
    const base = path.join(__dirname, 'dictionary-la');
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
