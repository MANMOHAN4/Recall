import { toast } from 'sonner'
import { useNavigate } from '@tanstack/react-router'
import { authClient } from '../lib/auth-client'

export const useSignOut = () => {
  const navigate = useNavigate()

  return async () => {
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
}
