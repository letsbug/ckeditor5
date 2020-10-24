import ClassicBuild from './classic';
import InlineBuild from './inline';
import BalloonBuild from './balloon';
import BalloonBlockBuild from './balloon-block';
import DocumentBuild from './decoupled-document';
import { findOptimalInsertionPosition } from '@ckeditor/ckeditor5-widget/src/utils';

const CKEditor = {
  ClassicBuild,
  InlineBuild,
  BalloonBuild,
  BalloonBlockBuild,
  DocumentBuild,
  utils: { findOptimalInsertionPosition },
}

export default CKEditor;
