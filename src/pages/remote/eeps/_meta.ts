import { createCatchAllMeta } from 'nextra/catch-all'
import json from '../../../nextra-remote-filepaths/eeps.json' assert { type: 'json' }

export default () => createCatchAllMeta(json.filePaths, json.nestedMeta)
