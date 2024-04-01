import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Joke from "./components/pages/Joke";
import MainLayout from "./components/Layout/MainLayout";
function App() {
    let Layout = MainLayout;
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Joke />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
