import { QUARTZ, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import fs from "fs"
import path from "path"

export const StaticMeta: QuartzEmitterPlugin = () => ({
  name: "StaticMeta",
  async *emit({ argv }) {
    const metaPath = path.join(QUARTZ, "..", "meta.json")
    if (fs.existsSync(metaPath)) {
      const dest = joinSegments(argv.output, "meta.json")
      await fs.promises.mkdir(path.dirname(dest), { recursive: true })
      await fs.promises.copyFile(metaPath, dest)
      yield dest
    }
  },
  async *partialEmit() {},
})
