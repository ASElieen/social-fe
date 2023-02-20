import { AuthTabs } from "./pages/auth/AuthIndex"
import { useRoutes } from "react-router-dom"

export const AppRouter = () => {
    const elements = useRoutes([
        {
            path: '/',
            element: <AuthTabs />
        }
    ])
    return elements
}