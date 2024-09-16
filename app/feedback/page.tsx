'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Component() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedbackType, setFeedbackType] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulating an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      // If the API call is successful:
      setSubmitStatus('success')
      // Reset form
      setName('')
      setEmail('')
      setFeedbackType('')
      setFeedback('')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">CallOnce Feedback</CardTitle>
        <CardDescription className="text-center">We value your input. Please share your thoughts with us.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedbackType">Feedback Type</Label>
            <Select value={feedbackType} onValueChange={setFeedbackType} required>
              <SelectTrigger>
                <SelectValue placeholder="Select feedback type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Feedback</SelectItem>
                <SelectItem value="suggestion">Suggestion</SelectItem>
                <SelectItem value="complaint">Complaint</SelectItem>
                <SelectItem value="praise">Praise</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Your Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Please share your thoughts..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="min-h-[100px]"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2">
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </Button>
        {submitStatus === 'success' && (
          <p className="text-green-600 text-sm">Thank you for your feedback!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-sm">An error occurred. Please try again.</p>
        )}
      </CardFooter>
    </Card>
  )
}