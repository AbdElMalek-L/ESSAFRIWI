"use client"
import Image from "next/image"
import Link from "next/link"
import { PhoneIcon as WhatsappIcon } from "lucide-react"
import Hero from "@/components/hero/Hero"
import { useState } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 bg-slate-900/90 backdrop-blur-xl border-b border-sky-500/20 md:px-10 sticky top-0 z-50 shadow-lg shadow-sky-500/5">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl font-bold text-sky-400 tracking-wider">
              MOKHTARI<span className="text-white">49</span>
            </span>
          </Link>
        </div>

        <Link
          href="/video"
          className="hidden px-6 py-2.5 text-sm font-medium text-white transition-all border border-sky-500/30 rounded-full md:block hover:bg-sky-500/10 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10"
        >
          VIDÉO EXPLICATIVE
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-10">
            <li>
              <Link href="/" className="text-sky-400 nav-link active hover:text-sky-300">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/recharge" className="text-white nav-link hover:text-sky-300">
                RECHARGE
              </Link>
            </li>

            <li>
              <Link href="/retirer" className="text-white nav-link hover:text-sky-300">
                RETIRER
              </Link>
            </li>
            <li>
              <Link href="/contactez-nous" className="text-white nav-link hover:text-sky-300">
                CONTACTEZ NOUS
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          onClick={() => setIsMobileMenuOpen(true)} 
          className="block md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          <div className="fixed right-0 top-0 bottom-0 w-[75%] max-w-sm bg-slate-900 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-sky-400">
                  MOKHTARI<span className="text-white">49</span>
                </span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="space-y-4">
              <Link 
                href="/" 
                className="block py-2 text-sky-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/recharge" 
                className="block py-2 text-white hover:text-sky-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                RECHARGE
              </Link>
              <Link 
                href="/retirer" 
                className="block py-2 text-white hover:text-sky-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                RETIRER
              </Link>
              <Link 
                href="/contactez-nous" 
                className="block py-2 text-white hover:text-sky-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACTEZ NOUS
              </Link>
              <Link
                href="/video"
                className="block px-6 py-2.5 text-sm font-medium text-white transition-all border border-sky-500/30 rounded-full hover:bg-sky-500/10 hover:border-sky-500/50 text-center mt-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VIDÉO EXPLICATIVE
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            RECHARGEZ ET RETIREZ INSTANTANÉMENT AVEC ID
          </h1>
          <p className="text-xl text-sky-300 mb-12">
            SIMPLICITÉ ET SÉCURITÉ GARANTIES !
          </p>
          <Link
            href="/recharge"
            className="inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 hover:from-sky-600 hover:via-blue-600 hover:to-sky-600 relative overflow-hidden group"
          >
            <span className="relative z-10">RECHARGE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-sky-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://realt.by/uploads/pics/Stadion.jpg"
          alt="Stadium Background"
          fill
          className="object-cover brightness-[0.3] transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
      </div>

      {/* Payment/Apps Section */}
      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Payment Methods Section */}
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-500/30 transition-all duration-300">
            <h2 className="mb-8 text-2xl font-semibold text-center text-white">Méthodes De Paiement</h2>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex items-center justify-center p-1 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sky-500/20 h-20"
                >
                  <Image
                    src={method.logo || "/placeholder.svg"}
                    alt={method.name}
                    width={120}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Applications Section */}
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-500/30 transition-all duration-300">
            <h2 className="mb-8 text-2xl font-semibold text-center text-white">Applications</h2>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {applications.map((app) => (
                <div
                  key={app.name}
                  className="flex items-center justify-center p-1 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sky-500/20 h-20"
                >
                  <Image
                    src={app.logo || "/placeholder.svg"}
                    alt={app.name}
                    width={120}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recharge Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/recharge"
            className="px-12 py-5 text-lg font-bold text-white transition-all rounded-xl shadow-xl btn-primary hover:shadow-sky-500/30 hover:scale-105 duration-300"
          >
            RECHARGE
          </Link>
        </div>
      </div>

      {/* Promotional Messages Section */}
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-sky-300"> Les Avantages</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-500/30 transition-all duration-300">
            <p className="text-xl font-medium text-center text-white leading-relaxed" dir="rtl">
              نوفر لكم خدامات الشحن والسحب باحسن الاثمنة وخدمات اسرع
            </p>
          </div>
          
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-500/30 transition-all duration-300">
            <p className="text-xl font-medium text-center text-white leading-relaxed" dir="rtl">
              ادخل الرمز التروجي <span className="text-sky-400 font-bold">MOKHTARI49</span> للحصول على المكفأة تصل 200%
            </p>
          </div>
          
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-500/30 transition-all duration-300">
            <p className="text-xl font-medium text-center text-white leading-relaxed" dir="rtl">
              يمكنك الان شحن حسابك بسرعة وضمان ووفر وقت اكثر
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        className="fixed p-4 text-white transition-all bg-green-500 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-600 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsappIcon size={28} />
      </a>
    </div>
  )
}

const paymentMethods = [
  { name: "CIH", logo: "https://i.ibb.co/Kx8ydnrM/image.png" },
  { name: "CashPlus", logo: "https://i.ibb.co/DHH7d06f/image.png" },
  { name: "Barid Bank", logo: "https://i.ibb.co/kNQWLtz/image.png" },
  { name: "Orange", logo: "https://i.ibb.co/cXCz47CP/image.png" },
  { name: "Inwi", logo: "https://i.ibb.co/svhKsQMV/image.png" },
  { name: "Attijariwafa bank", logo: "https://i.ibb.co/b5KvZbSJ/image.png" },
]

const applications = [
  { name: "1xBet", logo: "https://i.ibb.co/gMYRsJtY/image.png" },
  { name: "LineBet", logo: "https://i.ibb.co/TxsNrpsf/image.png" },
  { name: "BetWinner", logo: "https://i.ibb.co/mrd51H81/image.png" },
  { name: "Paripulse", logo: "https://i.ibb.co/BVmQyG80/image.png" },
]

const topApplications = [
  { name: "1xBet", logo: "https://i.ibb.co/svxRXqrN/image.png", url: "https://1xbet.com" },
  { name: "BetWinner", logo: "https://i.ibb.co/mrd51H81/image.png", url: "https://betwinner.com" },
  { name: "LineBet", logo: "https://i.ibb.co/TxsNrpsf/image.png", url: "https://linebet.com" },
]
