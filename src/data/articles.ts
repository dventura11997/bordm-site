export interface Article {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  readTime: string;
  date: string;
  bgColor: string;
  bgColor2: string;
}

export const trendingArticles: Article[] = [
  { id: 1, title: "When Is Solo Leveling Releasing On Crunchyroll?", category: "Solo Leveling", categoryColor: "#7c3aed", readTime: "2m Read", date: "Dec 11, 2023", bgColor: "#1a0533", bgColor2: "#2d0055" },
  { id: 2, title: "Dragon Ball Sparking Zero Reveals Brand New Trailer", category: "Dragon Ball", categoryColor: "#f59e0b", readTime: "4.5m Read", date: "Dec 9, 2023", bgColor: "#1a0800", bgColor2: "#331500" },
  { id: 3, title: "Yuta Okkotsu Is The Strongest Sorcerer in JJK", category: "JJK", categoryColor: "#6366f1", readTime: "5m Read", date: "Dec 8, 2023", bgColor: "#0a0a1a", bgColor2: "#151530" },
  { id: 4, title: "Unveiling the Mysteries of the Blue Exorcist", category: "Blue Exorcist", categoryColor: "#3b82f6", readTime: "4m Read", date: "Dec 7, 2023", bgColor: "#001a33", bgColor2: "#002a4d" },
  { id: 5, title: "One Piece Unveils The Cross Guild's True Power", category: "One Piece", categoryColor: "#f59e0b", readTime: "6m Read", date: "Dec 6, 2023", bgColor: "#001800", bgColor2: "#002800" },
];

export const latestArticles: Article[] = [
  { id: 10, title: '"The Boy And The Heron" Makes Waves at the Box Office', category: "TB&TH", categoryColor: "#ef4444", readTime: "5m Read", date: "Dec 10, 2023", bgColor: "#1a0800", bgColor2: "#2d1200" },
  { id: 11, title: "What makes Nezuko impervious to sunlight in Demon Slayer?", category: "Demon Slayer", categoryColor: "#e11d48", readTime: "4m Read", date: "Dec 8, 2023", bgColor: "#330010", bgColor2: "#4d0018" },
  { id: 12, title: "How Muzan, the First Demon in Demon Slayer Was Created", category: "Demon Slayer", categoryColor: "#e11d48", readTime: "3.5m Read", date: "Dec 8, 2023", bgColor: "#1a000a", bgColor2: "#2d0010" },
  { id: 13, title: "Anime You Should Watch If You Liked Cowboy Bebop", category: "Cowboy Bebop", categoryColor: "#d97706", readTime: "6m Read", date: "Dec 7, 2023", bgColor: "#1a0800", bgColor2: "#2a1200" },
  { id: 14, title: "Top 5 Most Perverted Characters From General Anime", category: "General Anime", categoryColor: "#8b5cf6", readTime: "2m Read", date: "Dec 7, 2023", bgColor: "#0a0a2a", bgColor2: "#151540" },
  { id: 15, title: "Inosuke Hashibira Is Actually Much Much Stronger Than We Think", category: "Demon Slayer", categoryColor: "#e11d48", readTime: "8m Read", date: "Dec 6, 2023", bgColor: "#1a000a", bgColor2: "#2a0010" },
  { id: 16, title: "Is One Punch Man The Strongest Anime Character of All Time?", category: "One Punch Man", categoryColor: "#f59e0b", readTime: "9m Read", date: "Dec 5, 2023", bgColor: "#1a1400", bgColor2: "#2a2000" },
  { id: 17, title: "Future Trunks Has The Best Character Introduction in Anime", category: "Dragon Ball Z", categoryColor: "#3b82f6", readTime: "5m Read", date: "Dec 5, 2023", bgColor: "#001a33", bgColor2: "#002a4d" },
  { id: 18, title: "One Piece Egghead Island Arc: What To Expect", category: "One Piece", categoryColor: "#f59e0b", readTime: "3m Read", date: "Dec 4, 2023", bgColor: "#001800", bgColor2: "#002800" },
  { id: 19, title: "Blue Samurai Is Officially The Best Animated Series of 2023", category: "Blue Samurai", categoryColor: "#06b6d4", readTime: "7m Read", date: "Dec 3, 2023", bgColor: "#001a1a", bgColor2: "#002a2a" },
  { id: 20, title: "Goku Vs Vegeta: Who Would Win In A Fair Fight?", category: "Dragon Ball", categoryColor: "#f59e0b", readTime: "4m Read", date: "Dec 2, 2023", bgColor: "#1a0800", bgColor2: "#2d1200" },
  { id: 21, title: "Monster - The Most Underrated Anime You Should Watch", category: "Monsters", categoryColor: "#dc2626", readTime: "6m Read", date: "Dec 1, 2023", bgColor: "#1a0000", bgColor2: "#2d0000" },
];

export const categoryPills = [
  { label: "One Piece", icon: "⛵", color: "#f59e0b" },
  { label: "Jujutsu Kaisen", icon: "🔥", color: "#6366f1" },
  { label: "Dragon Ball", icon: "🐉", color: "#f59e0b" },
  { label: "My Hero", icon: "💥", color: "#3b82f6" },
  { label: "Castelvania", icon: "🏰", color: "#8b5cf6" },
  { label: "Haiykuu", icon: "🏐", color: "#f97316" },
  { label: "Demon Slayer", icon: "⚔️", color: "#e11d48" },
  { label: "Bleach", icon: "🌙", color: "#94a3b8" },
  { label: "AOT", icon: "⚡", color: "#84cc16" },
  { label: "Naruto", icon: "🍥", color: "#f97316" },
  { label: "Black Clover", icon: "🍀", color: "#22c55e" },
  { label: "Solo Leveling", icon: "⚡", color: "#7c3aed" },
  { label: "Spy Family", icon: "🕵️", color: "#06b6d4" },
];
