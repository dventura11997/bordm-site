export interface ChartEntry {
  rank: number;
  title: string;
  episodes: string;
  weeksInTop10: string;
  medal?: string;
  studio: string;
  creator: string;
  score: number;
  trend: 'up' | 'down' | 'same';
  color: string;
}

export const weeklyCharts: ChartEntry[] = [
  { rank: 1, title: "Sousou No Frieren", episodes: "28", weeksInTop10: "01", medal: "🥇", studio: "MAPPA", creator: "Hajime Isayama", score: 91, trend: "up", color: "#5b5ea6" },
  { rank: 2, title: "Jujutsu Kaisen S2", episodes: "23", weeksInTop10: "02", medal: "🥈", studio: "MAPPA", creator: "Gege Akutami", score: 89, trend: "up", color: "#1a1a2e" },
  { rank: 3, title: "Tian Guan Cifu Er", episodes: "23", weeksInTop10: "04", medal: "🥉", studio: "Bilibili", creator: "Mo Xiang Tong...", score: 87, trend: "same", color: "#2d1b69" },
  { rank: 4, title: "The Apothecary Diaries", episodes: "24", weeksInTop10: "00", medal: "", studio: "Toho Animation", creator: "-", score: 87, trend: "same", color: "#1a3a2a" },
  { rank: 5, title: "One Piece", episodes: "1079", weeksInTop10: "00", medal: "", studio: "Toei Animation", creator: "Eiichiro Oda", score: 87, trend: "same", color: "#1a3000" },
  { rank: 6, title: "The Eminence In Shadows", episodes: "24", weeksInTop10: "00", medal: "", studio: "NEXUS", creator: "-", score: 85, trend: "down", color: "#0a0a0a" },
  { rank: 7, title: "Dr Stone New World P2", episodes: "-", weeksInTop10: "00", medal: "", studio: "TMS", creator: "Riichiro Inagaki", score: 84, trend: "same", color: "#1a3a1a" },
  { rank: 8, title: "Holo No Graffiti", episodes: "-", weeksInTop10: "00", medal: "", studio: "Wit Studio", creator: "Tatsuya Endo", score: 82, trend: "down", color: "#1a2a3a" },
  { rank: 9, title: "Spy Family S2", episodes: "12", weeksInTop10: "00", medal: "", studio: "Holoive Production", creator: "-", score: 82, trend: "same", color: "#003333" },
  { rank: 10, title: "Kimi No Koto", episodes: "-", weeksInTop10: "00", medal: "", studio: "Bibury", creator: "Rikito Nakamura", score: 80, trend: "same", color: "#2a0a2a" },
];
