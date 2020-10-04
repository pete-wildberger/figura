import type { Request, Response, NextFunction } from 'express';
import { parseImage } from '../imageParser';

interface RequestFileBody extends Request {
  file: {
    path: string;
  };
}

class UploadController {
  async postImage(req: RequestFileBody, res: Response) {
    const file = req.file.path;
    const text = await parseImage(file);
    const data = { text };
    res.send({ data });
  }
}

const controller = new UploadController();

export { controller as UploadController };
