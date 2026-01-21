import { motion } from "framer-motion";
import { Star, GitFork, Users } from "lucide-react";
import { useGitHubStats, GITHUB_REPO_URL } from "@/hooks/useGitHubStats";

export function GitHubStats() {
  const { stars, forks, contributors, loading } = useGitHubStats();

  const stats = [
    { icon: Star, label: "Stars", value: stars, color: "text-yellow-400" },
    { icon: GitFork, label: "Forks", value: forks, color: "text-secondary" },
    { icon: Users, label: "Contributors", value: contributors, color: "text-primary" },
  ];

  return (
    <motion.a
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="inline-flex items-center gap-6 px-6 py-3 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 transition-colors mt-8"
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex items-center gap-2">
          <stat.icon className={`w-4 h-4 ${stat.color}`} />
          <span className="text-sm text-muted-foreground">{stat.label}:</span>
          {loading ? (
            <span className="w-6 h-4 bg-muted-foreground/20 rounded animate-pulse" />
          ) : (
            <span className="font-semibold text-foreground">{stat.value}</span>
          )}
          {index < stats.length - 1 && (
            <span className="ml-4 w-px h-4 bg-border" />
          )}
        </div>
      ))}
    </motion.a>
  );
}
