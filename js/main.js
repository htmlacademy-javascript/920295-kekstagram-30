import {getPictures} from './data.js';
import {renderThumbnails} from './thumbnail';

const pictures = getPictures();
renderThumbnails(pictures);

