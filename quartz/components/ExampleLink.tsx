import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative, FullSlug } from "../util/path"

function ExampleLink({ fileData, displayClass }: QuartzComponentProps) {
  const link = resolveRelative(fileData.slug!, "example" as FullSlug)

  return (
    <div class={classNames(displayClass, "example-link")} style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
      <a href={link} style={{ color: "var(--secondary)" }}>see example review and revision note</a>
    </div>
  )
}

export default (() => ExampleLink) satisfies QuartzComponentConstructor
