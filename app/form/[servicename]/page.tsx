'use client';

import { useParams } from 'next/navigation';
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, UploadIcon } from "lucide-react"

const BookService: React.FC = () => {
  const { servicename } = useParams(); 
  const [service, setService] = useState<string>(''); 
  const [timing, setTiming] = useState<string>('');
  const [files, setFiles] = useState<File[]>([])
  const router = useRouter()

  useEffect(() => {
    if (servicename) {
      const service =
        Array.isArray(servicename) ? servicename[0] : servicename;
      setService(decodeURIComponent(service));
    }
  }, [servicename]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/payment')
  }


  return (



    <Card className="w-full max-w-2xl mx-auto">
    <CardHeader>
      <CardTitle>Book {service}</CardTitle>
      <CardDescription>Fill out the form below to schedule your {service}</CardDescription>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="(+91)9765436512"/>
          </div>
        </div>

        <div className="space-y-2">
        <Label className="block">
          <span className="text-gray-700">Service Name</span>
          <Input
            type="text"
            value={service}
            readOnly
            className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md"
          />
        </Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" placeholder="Enter your full address"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <div className="relative">
              <Input id="date" type="date" />
              <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Input id="time" type="time" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="photos">Upload Photos (optional)</Label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="photos" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/70">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadIcon className="w-8 h-8 mb-3 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
              </div>
              <Input id="photos" type="file" className="hidden" multiple accept="image/*" onChange={handleFileChange} />
            </label>
          </div>
          {files.length > 0 && (
            <div className="text-sm text-muted-foreground">
              {files.length} file(s) selected
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="details">Additional Details</Label>
          <Textarea id="details" placeholder="Any specific instructions or details about the service needed?" />
        </div>

        <Button type="submit" className="w-full">Schedule Service</Button>
      </form>
    </CardContent>
  </Card>
  );
};

export default BookService;
