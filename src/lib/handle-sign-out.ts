import { toast } from 'sonner'
import { authClient } from './auth-client'
import { useNavigate } from '@tanstack/react-router'

export const handleSignOut = async () => {
  const navigate = useNavigate()

  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        navigate({
          to: '/',
        })
        toast.success('Signed out successfully')
      },
      onError: ({ error }) => {
        toast.error(error.message)
      },
    },
  })
}
