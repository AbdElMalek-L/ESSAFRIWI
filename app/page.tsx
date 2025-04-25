"use client"
import Image from "next/image"
import Link from "next/link"
import { PhoneIcon as WhatsappIcon } from "lucide-react"
import { Instagram, Facebook } from "lucide-react"
import Hero from "@/components/hero/Hero"
import FallingDollars from "@/components/hero/FallingDollars"
import { useState } from "react"
import { applications, paymentMethods } from "@/lib/data"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedApp, setSelectedApp] = useState("")
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")

  return (
    <div className="min-h-screen bg-red text-white">


      {/* Footer */}
     
        <div className="max-w-7xl mx-auto px-4">

          
          <div className="border-t mt-8 pt-8 text-center text-red-900 text-m">
            <p> This website is suspended cuz of no payment, please contact the developer for more information.</p>
          </div>
        </div>
    </div>
  )
}


