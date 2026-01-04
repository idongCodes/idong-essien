import { verifySession } from '@/lib/session'
import AdminLoginClient from './AdminLoginClient'
import AdminDashboard from '@/components/AdminDashboard' // <--- Import the new component
import { logoutAction } from './actions' // <--- Import the logout action

export default async function AdminPage() {
  // 1. Check if user is already logged in
  const session = await verifySession()

  // 2. If valid session, show Dashboard (Client Component)
  if (session) {
    return <AdminDashboard logoutAction={logoutAction} />
  }

  // 3. If NOT logged in, show the Login Form
  return <AdminLoginClient />
}