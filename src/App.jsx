import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext.jsx";
export default function App() {
  return (
    <ThemeContext value="dark">
      <Home />
    </ThemeContext>
  );
}
