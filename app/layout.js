import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | Connect Four game",
  description:
    "Connect Four is a classic two-player strategy game where the objective is to be the first to form a line of four of your colored discs in a vertical, horizontal, or diagonal row on a grid. The game is played on a 6x7 grid, with players taking turns dropping colored discs from the top into any of the seven columns. The discs fall to the lowest available position within the chosen column. The game continues until one player successfully connects four discs in a row, or the grid is filled without a winner, resulting in a draw. Connect Four is easy to learn yet offers deep strategic gameplay, making it enjoyable for players of all ages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-dark-purple">{children}</body>
    </html>
  );
}
