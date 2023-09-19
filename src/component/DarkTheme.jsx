import { useTheme } from "./Taskprovider";

function DarkTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="text-center">
      <div>{theme === "light" ? "light" : "dark"}</div>
      <input
        type="checkbox"
        className="toggle toggle-lg"
        onChange={(e) => {
          if (e.target.checked) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      />
    </div>
  );
}

export default DarkTheme;
