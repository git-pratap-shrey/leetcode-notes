import { QuartzComponent, QuartzComponentProps } from "../types"
import path from "path"
import fs from "fs"
import style from "./ProfileSummary.scss"

interface MetaEntry {
  date: string | null
}

interface MetaJson {
  [user: string]: { questions: { [slug: string]: MetaEntry } }
}

function computeStreak(dates: string[]): number {
  if (dates.length === 0) return 0
  const uniqueSorted = [...new Set(dates)].sort().reverse()
  let streak = 1
  let current = new Date(uniqueSorted[0])
  for (let i = 1; i < uniqueSorted.length; i++) {
    const prev = new Date(uniqueSorted[i])
    const diff = Math.floor(
      (current.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24)
    )
    if (diff === 1) {
      streak++
      current = prev
    } else if (diff > 1) {
      break
    }
  }
  return streak
}

function formatDate(d: string): string {
  try {
    return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  } catch {
    return d
  }
}

function loadMeta(): MetaJson | null {
  try {
    const metaPath = path.join(process.cwd(), "meta.json")
    const raw = fs.readFileSync(metaPath, "utf-8")
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export default (() => {
  const ProfileSummary: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = fileData.slug
    if (!slug) return null

    const parts = slug.split("/")
    if (parts.length !== 2 || parts[1] !== "index") return null
    const username = parts[0]

    const meta = loadMeta()
    if (!meta) return null

    const userData = meta[username]
    if (!userData) return null

    const dates = Object.values(userData.questions)
      .map((q) => q.date)
      .filter((d): d is string => !!d)

    if (dates.length === 0) {
      return (
        <div class="profile-summary">
          <p class="profile-summary-placeholder">
            Question dates not yet available — summary will appear once LeetCode
            submissions are processed.
          </p>
        </div>
      )
    }

    const sorted = [...dates].sort()
    const totalQuestions = dates.length
    const firstSolved = sorted[0]
    const lastSolved = sorted[sorted.length - 1]
    const streak = computeStreak(dates)

    return (
      <div class="profile-summary">
        <div class="profile-summary-header">
          <h3 class="profile-summary-username">{username}</h3>
          <span class="profile-summary-badge">{totalQuestions} solved</span>
        </div>
        <div class="profile-summary-stats">
          <div class="stat">
            <span class="stat-value">{formatDate(firstSolved)}</span>
            <span class="stat-label">First solved</span>
          </div>
          <div class="stat">
            <span class="stat-value">{formatDate(lastSolved)}</span>
            <span class="stat-label">Recent</span>
          </div>
          <div class="stat">
            <span class="stat-value">{streak}d</span>
            <span class="stat-label">Current streak</span>
          </div>
        </div>
      </div>
    )
  }

  ProfileSummary.css = style
  return ProfileSummary
})() satisfies QuartzComponent
