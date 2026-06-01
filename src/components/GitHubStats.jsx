
import { GitHubCalendar } from "react-github-calendar"
import SectionTitle from "./SectionTitle"

function GitHubStats() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          subtitle="Open Source"
          title="GitHub Contributions"
        />

        <div
          className="
            p-6
            rounded-2xl
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            overflow-x-auto
          "
        >
          <GitHubCalendar
            username="PalorkJork"
            colorScheme="dark"
          />
        </div>
      </div>
    </section>
  )
}

export default GitHubStats