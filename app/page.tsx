"use client"
import Image from "next/image"
import Link from "next/link"
import { PhoneIcon as WhatsappIcon } from "lucide-react"
import { Instagram, Facebook } from "lucide-react"
import Hero from "@/components/hero/Hero"
import FallingDollars from "@/components/hero/FallingDollars"
import { useState } from "react"
import { applications, paymentMethods, headerLogoUrl, contactInfo } from "@/lib/data"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedApp, setSelectedApp] = useState("")
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 bg-black/90 backdrop-blur-xl border-b border-yellow-500/20 md:px-10 sticky top-0 z-50 shadow-lg shadow-yellow-500/5">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={headerLogoUrl}
              alt="ESSAFRIWI Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        <Link
          href="/video"
          className="hidden px-6 py-2.5 text-sm font-medium text-white transition-all border border-yellow-500/30 rounded-full md:block hover:bg-yellow-500/10 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10"
        >
          VIDÉO EXPLICATIVE
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-10">
            <li>
              <Link href="/" className="text-yellow-500 nav-link active hover:text-yellow-400">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/recharge" className="text-white nav-link hover:text-yellow-400">
                RECHARGE
              </Link>
            </li>

            <li>
              <Link href="/retirer" className="text-white nav-link hover:text-yellow-400">
                RETIRER
              </Link>
            </li>
            <li>
              <Link href="/contactez-nous" className="text-white nav-link hover:text-yellow-400">
                CONTACTEZ NOUS
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          onClick={() => setIsMobileMenuOpen(true)} 
          className="block md:hidden px-4 py-2 text-sm font-medium text-white transition-all border border-yellow-500/30 rounded-full hover:bg-yellow-500/10 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10"
          aria-label="Open menu"
        >
          خدمات
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          <div className="fixed right-0 top-0 bottom-0 w-[75%] max-w-sm bg-black p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={headerLogoUrl}
                  alt="ESSAFRIWI Logo"
                  width={120}
                  height={32}
                  className="object-contain"
                />
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
                className="block py-2 text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/recharge" 
                className="block py-2 text-white hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                RECHARGE
              </Link>
              <Link 
                href="/retirer" 
                className="block py-2 text-white hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                RETIRER
              </Link>
              <Link 
                href="/contactez-nous" 
                className="block py-2 text-white hover:text-yellow-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACTEZ NOUS
              </Link>
              <Link
                href="/video"
                className="block px-6 py-2.5 text-sm font-medium text-white transition-all border border-yellow-500/30 rounded-full hover:bg-yellow-500/10 hover:border-yellow-500/50 text-center mt-6"
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

        <div className="text-center relative">
          {/* Falling Dollars specific to hero section */}
          <div className="absolute inset-0 overflow-hidden h-screen w-full" style={{ zIndex: 15, top: '-20%', left: 0, right: 0, bottom: 0 }}>
            <FallingDollars />
          </div>
          
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-2 h-2 bg-yellow-500/20 rounded-full animate-float" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
            <div className="absolute w-3 h-3 bg-yellow-500/30 rounded-full animate-float" style={{ left: '30%', top: '40%', animationDelay: '1s' }}></div>
            <div className="absolute w-2 h-2 bg-yellow-500/20 rounded-full animate-float" style={{ left: '50%', top: '30%', animationDelay: '2s' }}></div>
            <div className="absolute w-3 h-3 bg-yellow-500/30 rounded-full animate-float" style={{ left: '70%', top: '20%', animationDelay: '3s' }}></div>
            <div className="absolute w-2 h-2 bg-yellow-500/20 rounded-full animate-float" style={{ left: '90%', top: '40%', animationDelay: '4s' }}></div>
          </div>

          {/* Glowing text effect */}
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl animate-glow z-20 relative" dir="rtl">
            نوفر لكم خدمات الشحن والسحب عن طريق ID
          </h1>
          
          {/* Animated subtitle with gradient text */}
          <p className="text-xl text-yellow-500 mb-12 animate-pulse z-20 relative" dir="rtl">
            ضمان البساطة والأمان!
          </p>

          {/* Enhanced button with hover effects */}
          <Link
            href="/recharge"
            className="inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-black transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 relative overflow-hidden group z-20"
          >
            <span className="relative z-10">شحن</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-300/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Button shine effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
            </div>
          </Link>

          {/* Decorative elements */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      {/* Payment/Apps Section */}
      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Payment Methods Section */}
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-black/60 border border-yellow-500/20 hover:border-yellow-500/30 transition-all duration-300">
            <h2 className="mb-8 text-2xl font-semibold text-center text-white">Méthodes De Paiement</h2>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className={`flex items-center justify-center p-1 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/20 h-20 cursor-pointer ${
                    selectedPaymentMethod === method.name ? "ring-2 ring-yellow-500 scale-105" : ""
                  }`}
                  onClick={() => setSelectedPaymentMethod(method.name)}
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
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-black/60 border border-yellow-500/20 hover:border-yellow-500/30 transition-all duration-300">
            <h2 className="mb-8 text-2xl font-semibold text-center text-white">Applications</h2>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {applications.map((app) => (
                <div
                  key={app.name}
                  onClick={() => setSelectedApp(app.name)}
                  className={`flex flex-col items-center justify-start p-1 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/20 cursor-pointer ${
                    selectedApp === app.name ? "ring-2 ring-yellow-500 scale-105" : ""
                  }`}
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={app.logo || "/placeholder.svg"}
                      alt={app.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  {app.promoCode && (
                    <div className="w-full bg-yellow-500 text-black text-xs font-bold p-1 text-center rounded-b-lg mt-auto">
                      code promo: {app.promoCode}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recharge Button */}
        <div className="flex justify-center gap-4 mt-16">
          <Link
            href={`/recharge${selectedApp || selectedPaymentMethod ? `?app=${selectedApp}&method=${selectedPaymentMethod}` : ""}`}
            className="px-4 py-5 text-lg font-bold text-black transition-all rounded-xl shadow-xl btn-primary hover:shadow-yellow-500/30 hover:scale-105 duration-300"
          >
            RECHARGE
          </Link>
          <Link
            href={`/retirer${selectedApp || selectedPaymentMethod ? `?app=${selectedApp}&method=${selectedPaymentMethod}` : ""}`}
            className="px-4 py-5 text-lg font-bold text-black transition-all rounded-xl shadow-xl btn-primary hover:shadow-yellow-500/30 hover:scale-105 duration-300"
          >
            RETIRER
          </Link>
        </div>
        
        {(selectedApp || selectedPaymentMethod) && (
          <div className="mt-4 text-center text-yellow-500">
            {selectedApp && <span className="mr-3">Application: {selectedApp}</span>}
            {selectedPaymentMethod && <span>Méthode: {selectedPaymentMethod}</span>}
          </div>
        )}
      </div>

      {/* Linebet Registration Section */}
      <div className="px-4 py-10 mx-auto max-w-3xl">
  <a 
    href="https://lb-aff.com/L?tag=d_4295065m_66803c_apk1&site=4295065&ad=66803" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block p-8 bg-white rounded-3xl"
  >
    <div className="flex flex-col items-center justify-center text-center">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Linebet.logo.jpg"
        alt="Linebet Logo"
        width={200}
        height={80}
        className="object-contain mb-6"
      />
      <p className="text-2xl font-bold text-yellow-500 animate-pulse" dir="rtl">
        اضغط هنا للتسجيل في لاينبـــيت
      </p>
    </div>
  </a>
</div>

      {/* Promotional Messages Section */}
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-yellow-500"> Les Avantages</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-black/60 border border-yellow-500/20 hover:border-yellow-500/30 transition-all duration-300">
            <p className="text-xl font-medium text-center text-white leading-relaxed" dir="rtl">
              نوفر لكم خدامات الشحن والسحب باحسن الاثمنة وخدمات اسرع
            </p>
          </div>
          
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-black/60 border border-yellow-500/20 hover:border-yellow-500/30 transition-all duration-300">
            <p className="text-xl font-medium text-center text-white leading-relaxed" dir="rtl">
              ادخل الرمز التروجي <span className="text-yellow-500 font-bold">ESSAFRIWI</span> للحصول على المكفأة تصل 200%
            </p>
          </div>
          
          <div className="p-8 gradient-card rounded-3xl shadow-2xl backdrop-blur-xl bg-black/60 border border-yellow-500/20 hover:border-yellow-500/30 transition-all duration-300">
            <p className="text-xl font-medium text-center text-white leading-relaxed" dir="rtl">
              يمكنك الان شحن حسابك بسرعة وضمان ووفر وقت اكثر
            </p>
          </div>
        </div>
      </div>

      

      {/* Social Media Buttons */}
      <div className="fixed bottom-6 right-6 flex gap-2 z-[9999]">
        <a
          href={contactInfo.instagram || "#"}
          className="p-4 text-white transition-all bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href={contactInfo.facebook || "#"}
          className="p-4 text-white transition-all bg-blue-600 rounded-full shadow-lg hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href={contactInfo.telegram || "#"}
          className="p-4 text-white transition-all bg-blue-500 rounded-full shadow-lg hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join us on Telegram"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.95 1.24-5.5 3.65-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.88.03-.24.37-.49 1.02-.75 3.95-1.71 6.58-2.84 7.9-3.38 3.8-1.61 4.59-1.89 5.11-1.89.11 0 .36.03.52.18.14.13.18.31.2.51-.01.17-.01.5-.01.5z"/>
          </svg>
        </a>
        <a
          href={contactInfo.whatsapp || "#"}
          className="p-4 text-white transition-all bg-green-500 rounded-full shadow-lg hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-md border-t border-yellow-500/20 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and description */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-yellow-500">
                  ESSAFRIWI
                </span>
              </Link>
              <p className="text-gray-400 mb-6" dir="rtl">
                نوفر لكم خدمات الشحن والسحب بأفضل الأسعار وخدمة سريعة وآمنة
              </p>
              <div className="flex space-x-4">
                <a
                  href={contactInfo.instagram || "#"}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.facebook || "#"}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.telegram || "#"}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.95 1.24-5.5 3.65-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.88.03-.24.37-.49 1.02-.75 3.95-1.71 6.58-2.84 7.9-3.38 3.8-1.61 4.59-1.89 5.11-1.89.11 0 .36.03.52.18.14.13.18.31.2.51-.01.17-.01.5-.01.5z"/>
                  </svg>
                </a>
                <a
                  href={contactInfo.whatsapp || "#"}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/recharge" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Recharge
                  </Link>
                </li>
                <li>
                  <Link href="/retirer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Retirer
                  </Link>
                </li>
                <li>
                  <Link href="/video" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Vidéo Explicative
                  </Link>
                </li>
                <li>
                  <Link href="/contactez-nous" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Contactez Nous
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <WhatsappIcon className="w-5 h-5 mr-2 text-yellow-500" />
                  <a 
                    href={contactInfo.whatsapp || "#"}
                    className="hover:text-yellow-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.95 1.24-5.5 3.65-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.88.03-.24.37-.49 1.02-.75 3.95-1.71 6.58-2.84 7.9-3.38 3.8-1.61 4.59-1.89 5.11-1.89.11 0 .36.03.52.18.14.13.18.31.2.51-.01.17-.01.5-.01.5z"/>
                  </svg>
                  <a 
                    href={contactInfo.telegram || "#"}
                    className="hover:text-yellow-500 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yellow-500/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} ESSAFRIWI. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


