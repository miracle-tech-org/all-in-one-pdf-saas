import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProviders } from './context/AppProviders'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { ToolsPage } from './pages/ToolsPage'
import { ToolDetailPage } from './pages/ToolDetailPage'
import { StudioPage } from './pages/StudioPage'
import { TemplatesPage } from './pages/TemplatesPage'
import { TemplateDetailPage } from './pages/TemplateDetailPage'
import { WorkflowsPage } from './pages/WorkflowsPage'
import { WorkflowDetailPage } from './pages/WorkflowDetailPage'
import { BlogPage } from './pages/BlogPage'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { EstimatePage } from './pages/EstimatePage'
import { FavoritesPage } from './pages/FavoritesPage'
import { ComparePage } from './pages/ComparePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { DashboardPage } from './pages/DashboardPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tools" element={<ToolsPage />} />
            <Route path="tools/:slug" element={<ToolDetailPage />} />
            <Route path="studio" element={<StudioPage />} />
            <Route path="templates" element={<TemplatesPage />} />
            <Route path="templates/:id" element={<TemplateDetailPage />} />
            <Route path="workflows" element={<WorkflowsPage />} />
            <Route path="workflows/:slug" element={<WorkflowDetailPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogDetailPage />} />
            <Route path="estimate" element={<EstimatePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="compare" element={<ComparePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}
