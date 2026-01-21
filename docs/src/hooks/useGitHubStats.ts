import { useState, useEffect } from "react";

interface GitHubStats {
  stars: number;
  forks: number;
  contributors: number;
  loading: boolean;
  error: string | null;
}

const REPO_OWNER = "Rudii-25";
const REPO_NAME = "BloodHound_VENOM";
const CACHE_KEY = "github_stats_cache";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface CachedData {
  stats: Omit<GitHubStats, "loading" | "error">;
  timestamp: number;
}

export function useGitHubStats(): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 0,
    forks: 0,
    contributors: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      // Check cache first
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsedCache: CachedData = JSON.parse(cached);
          if (Date.now() - parsedCache.timestamp < CACHE_DURATION) {
            setStats({
              ...parsedCache.stats,
              loading: false,
              error: null,
            });
            return;
          }
        }
      } catch {
        // Cache read failed, continue with fetch
      }

      try {
        // Fetch repo data for stars and forks
        const repoResponse = await fetch(
          `https://api.github.com/repos/Rudii-25/BloodHound_VENOM`
        );

        if (!repoResponse.ok) {
          throw new Error("Failed to fetch repository data");
        }

        const repoData = await repoResponse.json();

        // Fetch contributors count
        const contributorsResponse = await fetch(
          `https://api.github.com/repos/Rudii-25/BloodHound_VENOM/contributors?per_page=1`
        );

        let contributorsCount = 1;
        if (contributorsResponse.ok) {
          // Get count from Link header if available
          const linkHeader = contributorsResponse.headers.get("Link");
          if (linkHeader) {
            const match = linkHeader.match(/page=(\d+)>; rel="last"/);
            if (match) {
              contributorsCount = parseInt(match[1], 10);
            }
          } else {
            const contributorsData = await contributorsResponse.json();
            contributorsCount = contributorsData.length;
          }
        }

        const newStats = {
          stars: repoData.stargazers_count || 0,
          forks: repoData.forks_count || 0,
          contributors: contributorsCount,
        };

        // Cache the results
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              stats: newStats,
              timestamp: Date.now(),
            })
          );
        } catch {
          // Cache write failed, continue without caching
        }

        setStats({
          ...newStats,
          loading: false,
          error: null,
        });
      } catch (error) {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : "Unknown error",
        }));
      }
    };

    fetchStats();
  }, []);

  return stats;
}

export const GITHUB_REPO_URL = `https://github.com/Rudii-25/BloodHound_VENOM`;
