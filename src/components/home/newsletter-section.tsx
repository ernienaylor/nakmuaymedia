"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface NewsletterSectionProps {
  className?: string
}

export function NewsletterSection({ className }: NewsletterSectionProps) {
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    // Simulate API call
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setEmail("")
    } catch (err: unknown) {
      setError("Something went wrong. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={cn("py-16 md:py-24 relative overflow-hidden", className)}>
      {/* Background pattern */}
      <div className="absolute inset-0" style={{ opacity: 0.05 }}>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/muay-thai-pattern.png')] bg-repeat" style={{ opacity: 0.1 }}></div>
      </div>
      
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="shadow-xl rounded-2xl overflow-hidden"
            style={{ backgroundColor: 'hsl(var(--card))' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left column with accent background */}
              <div className="md:col-span-2 bg-accent p-8 md:p-10 text-white flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-2">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tight">
                    Join the Nak Muay Community
                  </h2>
                  
                  <p className="text-white/90">
                    Get exclusive content, early access to videos, fighter interviews, and training tips delivered straight to your inbox.
                  </p>
                  
                  <div className="pt-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-white/90" />
                      <span className="text-white/90">Weekly fight breakdowns</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <CheckCircle2 className="h-5 w-5 text-white/90" />
                      <span className="text-white/90">Exclusive technique videos</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <CheckCircle2 className="h-5 w-5 text-white/90" />
                      <span className="text-white/90">Event previews and recaps</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column with form */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                {!isSuccess ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Subscribe to our newsletter
                      </h3>
                      <p className="text-muted-foreground">
                        Join over 10,000 Muay Thai enthusiasts who receive our weekly updates.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-6"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <span className="mr-2">Subscribing</span>
                            <span className="animate-pulse">...</span>
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <span className="mr-2">Subscribe Now</span>
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        )}
                      </Button>
                      
                      {error && (
                        <p className="text-sm text-destructive mt-2">{error}</p>
                      )}
                      
                      <p className="text-xs text-muted-foreground mt-4">
                        By subscribing, you agree to our <a href="/privacy-policy" className="underline hover:text-accent">Privacy Policy</a> and consent to receive updates from Nak Muay Media.
                      </p>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Thank you for subscribing!
                    </h3>
                    <p className="text-muted-foreground">
                      You&apos;ve successfully joined the Nak Muay community. Check your inbox soon for exclusive content and updates.
                    </p>
                    <Button 
                      variant="ghost" 
                      className="mt-6"
                      onClick={() => setIsSuccess(false)}
                    >
                      Subscribe another email
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 