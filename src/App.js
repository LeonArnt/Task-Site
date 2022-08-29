import "./App.css";
import AppLayout from "./layouts/AppLayout/AppLayout";
import ToDoPage from "./containers/ToDoPage/ToDoPage";

function App() {
  return (
    <AppLayout>
      <ToDoPage />
    </AppLayout>
  );
}

export default App;
