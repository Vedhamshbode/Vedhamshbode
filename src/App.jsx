import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ScrollToTop from "./components/routing/ScrollToTop";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CompetitionsPage from "./pages/CompetitionsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPostPage from "./pages/BlogPostPage";

export default function App() {
  return (
    <div className="font-body">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:postId" element={<BlogPostPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
