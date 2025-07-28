import { useState, useEffect, type ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import type { UserInfo } from '../types/User'
import type { AuthContextType } from '../types/Auth'

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserInfo | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (userData: UserInfo) => {
    setUser(userData)
    localStorage.setItem('userInfo', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('userInfo')
  }

  const value: AuthContextType = { user, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
