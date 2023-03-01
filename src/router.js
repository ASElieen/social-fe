import { AuthTabs, ForgotPassword, ResetPassword } from "@pages/auth/AuthIndex"
import Stream from "@pages/social/streams/Stream"
import { useRoutes } from "react-router-dom"

export const AppRouter = () => {
    const elements = useRoutes([
        {
            path: '/',
            element: <AuthTabs />
        },
        {
            path: '/forgot-password',
            element: <ForgotPassword />
        },
        {
            path: '/reset-password',
            element: <ResetPassword />
        },
        {
            path: '/app/social/streams',
            element: <Stream />
        }
    ])
    return elements
}