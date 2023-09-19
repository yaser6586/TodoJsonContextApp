import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
const TaskContext = createContext(null);
const ThemeContext = createContext(null);
// i create two context for task and theme
function TaskProvider({ children }) {
  const [todo, setTodo] = useState([{}]);
  const [theme, setTheme] = useState("light");
  // this useEffect use async func to add state to json file for show in page
  useEffect(
    () => async () => {
      const resData = await fetch("http://localhost:5000/todo");
      const res = await resData.json();
      setTodo(res);
    },
    []
  );

  return (
    <TaskContext.Provider value={{ todo, setTodo }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          data-theme={theme}
          className="fixed h-screen w-screen overflow-y-auto"
          /* this class name make di full screen to cover all element for dark them*/
        >
          {children}
        </div>
      </ThemeContext.Provider>
    </TaskContext.Provider>
  );
}

export default TaskProvider;

TaskProvider.propTypes = {
  children: PropTypes.elementType,
};

export function useTodo() {
  return useContext(TaskContext);
}
export function useTheme() {
  return useContext(ThemeContext);
}
