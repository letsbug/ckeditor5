import * as engine from '@ckeditor/ckeditor5-engine';
import { model } from '../engine';

declare namespace utils {
  interface Utils {
	findOptimalInsertionPosition: (selection: engine.model.DocumentSelection, model: model.Model) => engine.model.Position;
  }
}
