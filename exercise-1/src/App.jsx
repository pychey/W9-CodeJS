import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS } from "./data";
import { HTML_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName = "PNC batch 2024"/>

      <main className="scores-container">
        <Scores courseName ="Java" courseResult={ JAVA_RESULTS }/>
        <Scores courseName ="HTML" courseResult={ HTML_RESULTS }/>
        <Scores courseName ="Python" courseResult={ PYTHON_RESULTS }/>
        <Scores courseName ="English" courseResult={ ENGLISH_RESULTS }/>
      </main>
    </>
  );
}

export default App;
