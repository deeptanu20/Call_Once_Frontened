"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Confetti from 'react-confetti'

export default function Component() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleShowSuccess = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000) 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Payment {showSuccess ? 'Successful' : 'Demo'}</CardTitle>
          <CardDescription className="text-center">
            {showSuccess ? 'Your transaction has been processed.' : 'Click the button to simulate a successful payment.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {showSuccess ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              <div className="text-center space-y-2">
                <p className="font-semibold">Amount Paid</p>
                <p className="text-3xl font-bold">$99.99</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Transaction ID: 1234567890</p>
                <p className="text-sm text-gray-500">Date: {new Date().toLocaleString()}</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>Click the button.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          {showSuccess ? (
            <Button className="w-full">
              View Receipt
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleShowSuccess} className="w-full">
              Simulate Successful Payment
            </Button>
          )}
        </CardFooter>
      </Card>
      {showSuccess && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </div>
  )
}