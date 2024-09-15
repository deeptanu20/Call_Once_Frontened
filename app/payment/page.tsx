'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <Card className="w-full max-w-md mx-auto xl:max-w-lg xl:h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>Choose your payment method and enter your details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="payment-method">Payment Method</Label>
          <Select onValueChange={setPaymentMethod} defaultValue={paymentMethod}>
            <SelectTrigger id="payment-method">
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24Z" fill="#FF5F00"/>
                    <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="#EB001B"/>
                    <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="#F79E1B"/>
                  </svg>
                  Card
                </div>
              </SelectItem>
              <SelectItem value="google-pay">
                <div className="flex items-center">
                  <svg className="w-16 h-6 mr-2" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.79 8.62C6.97 8.62 9.54 11.15 9.54 14.31C9.54 17.47 6.97 20 3.79 20C0.61 20 -1.96 17.47 -1.96 14.31C-1.96 11.15 0.61 8.62 3.79 8.62ZM3.79 17.47C5.45 17.47 6.82 16.12 6.82 14.31C6.82 12.5 5.45 11.15 3.79 11.15C2.13 11.15 0.76 12.5 0.76 14.31C0.76 16.12 2.13 17.47 3.79 17.47Z" fill="#5F6368"/>
                    <path d="M13.54 8.62C16.72 8.62 19.29 11.15 19.29 14.31C19.29 17.47 16.72 20 13.54 20C10.36 20 7.79 17.47 7.79 14.31C7.79 11.15 10.36 8.62 13.54 8.62ZM13.54 17.47C15.2 17.47 16.57 16.12 16.57 14.31C16.57 12.5 15.2 11.15 13.54 11.15C11.88 11.15 10.51 12.5 10.51 14.31C10.51 16.12 11.88 17.47 13.54 17.47Z" fill="#5F6368"/>
                    <path d="M28.54 9.23V19.39H25.82V18.16C25.14 19 24.11 19.62 22.72 19.62C20.13 19.62 18 17.47 18 14.31C18 11.15 20.13 9 22.72 9C24.11 9 25.14 9.62 25.82 10.46V9.23H28.54ZM25.82 14.31C25.82 12.58 24.61 11.31 23.03 11.31C21.45 11.31 20.24 12.58 20.24 14.31C20.24 16.04 21.45 17.31 23.03 17.31C24.61 17.31 25.82 16.04 25.82 14.31Z" fill="#5F6368"/>
                    <path d="M34.56 8.62C37.37 8.62 39.58 10.69 39.58 14.08V19.39H36.86V14.31C36.86 12.35 35.73 11.31 34.1 11.31C32.47 11.31 31.11 12.35 31.11 14.54V19.39H28.39V9.23H31.11V10.46C31.87 9.54 33.06 8.62 34.56 8.62Z" fill="#5F6368"/>
                    <path d="M52.94 9.23L47.96 20.85C46.85 23.31 45.51 24.23 43.58 24.23C42.47 24.23 41.44 23.92 40.64 23.23L41.82 21.08C42.32 21.54 42.93 21.77 43.58 21.77C44.38 21.77 44.99 21.46 45.43 20.62L45.66 20.08L41.06 9.23H43.93L47.03 17.31L50.13 9.23H52.94Z" fill="#5F6368"/>
                    <path d="M53.1 14.31C53.1 11.15 55.69 8.62 59.1 8.62C61.92 8.62 64.13 10.46 64.66 13.16H61.84C61.46 11.85 60.44 11.08 59.1 11.08C57.36 11.08 55.91 12.5 55.91 14.31C55.91 16.12 57.36 17.54 59.1 17.54C60.44 17.54 61.46 16.77 61.84 15.46H64.66C64.13 18.16 61.92 20 59.1 20C55.69 20 53.1 17.47 53.1 14.31Z" fill="#5F6368"/>
                    <path d="M73.52 9.23V11.62H72.57C70.87 11.62 70.1 12.35 70.1 14.08V19.39H67.38V9.23H70.1V10.69C70.72 9.62 71.82 9.23 73.52 9.23Z" fill="#5F6368"/>
                    <path d="M81.94 16.85H75.1C75.4 17.93 76.35 18.62 77.76 18.62C78.79 18.62 79.59 18.23 80.06 17.54H81.94C81.17 19.23 79.59 20.23 77.76 20.23C75.1 20.23 73.06 18.23 73.06 15.62C73.06 13.01 75.1 11.01 77.76 11.01C80.42 11.01 82.46 13.01 82.46 15.62C82.46 16.04 82.38 16.46 81.94 16.85ZM75.1 15.23H80.42C80.12 14.15 79.17 13.46 77.76 13.46C76.35 13.46 75.4 14.15 75.1 15.23Z" fill="#5F6368"/>
                  </svg>
                  Google Pay
                </div>
              </SelectItem>
              <SelectItem value="cash">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7Z" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 14C16 15.1046 15.1046 16 14 16H10C8.89543 16 8 15.1046 8 14V10C8 8.89543 8.89543 8 10 8H14C15.1046 8 16 8.89543 16 10V14Z" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 5V19" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 5V19" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cash on Delivery
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {paymentMethod === "card" && (
          <>
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="Enter your card number" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="CVC" />
              </div>
            </div>
            <div className="flex justify-start space-x-4">
              <svg className="w-12 h-8" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="#1A1F71"/>
                <path d="M18.2308 21.8462H14.5385L12 10.1538H15.6923L18.2308 21.8462Z" fill="white"/>
                <path d="M28.6154 10.4615C27.9231 10.1538 26.8462 10 25.6154 10C22.4615 10 20.1538 11.6923 20.1538 14.1538C20.1538 16 21.8462 17.0769 23.0769 17.7692C24.3077 18.4615 24.7692 18.9231 24.7692 19.5385C24.7692 20.4615 23.6923 20.9231 22.6154 20.9231C21.2308 20.9231 20.4615 20.7692 19.2308 20.3077L18.7692 20.1538L18.3077 23.2308C19.1538 23.5385 20.6154 23.8462 22.1538 23.8462C25.4615 23.8462 27.6923 22.1538 27.6923 19.5385C27.6923 18 26.7692 16.9231 24.9231 15.9231C23.8462 15.2308 23.2308 14.7692 23.2308 14.1538C23.2308 13.5385 23.8462 13 25.1538 13C26.2308 13 27.0769 13.2308 27.6923 13.4615L28 13.6154L28.6154 10.4615Z" fill="white"/>
                <path d="M33.5385 10.1538H36.4615L40 21.8462H36.4615L35.8462 20H32.1538L31.6923 21.8462H28L32.3077 11.0769L33.5385 10.1538ZM34.6154 15.3846L33.5385 17.7692H35.5385L34.6154 15.3846Z" fill="white"/>
              </svg>
              <svg className="w-12 h-8" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="32" rx="4" fill="#FF5F00"/>
                <circle cx="18" cy="16" r="10" fill="#EB001B"/>
                <circle cx="30" cy="16" r="10" fill="#F79E1B"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24 23.1679C26.0023 21.4851 27.2727 18.9155 27.2727 16C27.2727 13.0845 26.0023 10.5149 24 8.83209C21.9977 10.5149 20.7273 13.0845 20.7273 16C20.7273 18.9155 21.9977 21.4851 24 23.1679Z" fill="#FF5F00"/>
              </svg>
            </div>
          </>
        )}
        {paymentMethod === "google-pay" && (
          <div className="bg-gray-100 p-4 rounded-md text-center">
            <svg className="w-24 h-10 mx-auto mb-2" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.79 8.62C6.97 8.62 9.54 11.15 9.54 14.31C9.54 17.47 6.97 20 3.79 20C0.61 20 -1.96 17.47 -1.96 14.31C-1.96 11.15 0.61 8.62 3.79 8.62ZM3.79 17.47C5.45 17.47 6.82 16.12 6.82 14.31C6.82 12.5 5.45 11.15 3.79 11.15C2.13 11.15 0.76 12.5 0.76 14.31C0.76 16.12 2.13 17.47 3.79 17.47Z" fill="#5F6368"/>
              <path d="M13.54 8.62C16.72 8.62 19.29 11.15 19.29 14.31C19.29 17.47 16.72 20 13.54 20C10.36 20 7.79 17.47 7.79 14.31C7.79 11.15 10.36 8.62 13.54 8.62ZM13.54 17.47C15.2 17.47 16.57 16.12 16.57 14.31C16.57 12.5 15.2 11.15 13.54 11.15C11.88 11.15 10.51 12.5 10.51 14.31C10.51 16.12 11.88 17.47 13.54 17.47Z" fill="#5F6368"/>
              <path d="M28.54 9.23V19.39H25.82V18.16C25.14 19 24.11 19.62 22.72 19.62C20.13 19.62 18 17.47 18 14.31C18 11.15 20.13 9 22.72 9C24.11 9 25.14 9.62 25.82 10.46V9.23H28.54ZM25.82 14.31C25.82 12.58 24.61 11.31 23.03 11.31C21.45 11.31 20.24 12.58 20.24 14.31C20.24 16.04 21.45 17.31 23.03 17.31C24.61 17.31 25.82 16.04 25.82 14.31Z" fill="#5F6368"/>
              <path d="M34.56 8.62C37.37 8.62 39.58 10.69 39.58 14.08V19.39H36.86V14.31C36.86 12.35 35.73 11.31 34.1 11.31C32.47 11.31 31.11 12.35 31.11 14.54V19.39H28.39V9.23H31.11V10.46C31.87 9.54 33.06 8.62 34.56 8.62Z" fill="#5F6368"/>
              <path d="M52.94 9.23L47.96 20.85C46.85 23.31 45.51 24.23 43.58 24.23C42.47 24.23 41.44 23.92 40.64 23.23L41.82 21.08C42.32 21.54 42.93 21.77 43.58 21.77C44.38 21.77 44.99 21.46 45.43 20.62L45.66 20.08L41.06 9.23H43.93L47.03 17.31L50.13 9.23H52.94Z" fill="#5F6368"/>
              <path d="M53.1 14.31C53.1 11.15 55.69 8.62 59.1 8.62C61.92 8.62 64.13 10.46 64.66 13.16H61.84C61.46 11.85 60.44 11.08 59.1 11.08C57.36 11.08 55.91 12.5 55.91 14.31C55.91 16.12 57.36 17.54 59.1 17.54C60.44 17.54 61.46 16.77 61.84 15.46H64.66C64.13 18.16 61.92 20 59.1 20C55.69 20 53.1 17.47 53.1 14.31Z" fill="#5F6368"/>
              <path d="M73.52 9.23V11.62H72.57C70.87 11.62 70.1 12.35 70.1 14.08V19.39H67.38V9.23H70.1V10.69C70.72 9.62 71.82 9.23 73.52 9.23Z" fill="#5F6368"/>
              <path d="M81.94 16.85H75.1C75.4 17.93 76.35 18.62 77.76 18.62C78.79 18.62 79.59 18.23 80.06 17.54H81.94C81.17 19.23 79.59 20.23 77.76 20.23C75.1 20.23 73.06 18.23 73.06 15.62C73.06 13.01 75.1 11.01 77.76 11.01C80.42 11.01 82.46 13.01 82.46 15.62C82.46 16.04 82.38 16.46 81.94 16.85ZM75.1 15.23H80.42C80.12 14.15 79.17 13.46 77.76 13.46C76.35 13.46 75.4 14.15 75.1 15.23Z" fill="#5F6368"/>
            </svg>
            <p>Google Pay integration will be handled here.</p>
          </div>
        )}
        {paymentMethod === "cash" && (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md flex items-center justify-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7Z" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 14C16 15.1046 15.1046 16 14 16H10C8.89543 16 8 15.1046 8 14V10C8 8.89543 8.89543 8 10 8H14C15.1046 8 16 8.89543 16 10V14Z" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 5V19" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 5V19" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Cash on Delivery: Pay when you receive your order.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address</Label>
              <div className="relative">
                <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="address" placeholder="Enter your delivery address" className="pl-8" />
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Link href='/payment/successful'>

          Complete Payment
          </Link>
         </Button>
      </CardFooter>
    </Card>
  )
}