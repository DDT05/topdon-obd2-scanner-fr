'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setMessage('Veuillez entrer votre adresse email')
      setIsError(true)
      return
    }

    setIsLoading(true)
    setMessage('')
    setIsError(false)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue')
      }

      setMessage('Merci ! Vous êtes maintenant abonné à notre newsletter.')
      setIsError(false)
      setEmail('') // Clear the form

    } catch (error) {
      console.error('Subscription error:', error)
      setMessage(error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'abonnement')
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Adresse Email
        </label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Entrez votre adresse email"
          className="w-full text-black"
          required
          disabled={isLoading}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white"
        disabled={isLoading}
      >
        {isLoading ? 'Abonnement en cours...' : 'S\'abonner Maintenant'}
      </Button>

      {message && (
        <div className={`text-center text-sm mt-2 p-2 rounded ${
          isError
            ? 'bg-red-100 text-red-800 border border-red-200'
            : 'bg-green-100 text-green-800 border border-green-200'
        }`}>
          {message}
        </div>
      )}
    </form>
  )
}