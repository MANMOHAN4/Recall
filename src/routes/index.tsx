import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/web/navbar'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <Navbar />
}
