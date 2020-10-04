import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';
import { UploadController } from './controllers/';

// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage });

class Router {
  public api: express.Router;
  constructor() {
    this.api = express.Router();
    this.middleware();
    this.routes();
  }
  private middleware() {
    this.api.use(bodyParser.json());
  }
  private routes() {
    this.api.route('/upload').post(upload.single('myFile'), UploadController.postImage);
  }
}

const { api } = new Router();
export { api as Api };
