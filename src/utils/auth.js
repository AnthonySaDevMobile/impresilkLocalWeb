import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { auth } from '@/services/firebaseConnection'

export const useAuth = () => {
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/authentication') // Redirecionar para a página home
      }
    })

    return () => unsubscribe()
  }, [router])
}
