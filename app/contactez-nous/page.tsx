import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageSquare } from "lucide-react"
import { contactInfo, headerLogoUrl } from "@/lib/data"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-black/80 backdrop-blur-md border-b border-yellow-500/10 md:px-8 sticky top-0 z-50">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={headerLogoUrl}
              alt="ESSAFRIWI Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-white nav-link hover:text-yellow-400">
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
              <Link href="/contactez-nous" className="text-yellow-500 nav-link active hover:text-yellow-400">
                CONTACTEZ NOUS
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="px-4 py-16 mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
          Contactez Nous
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* WhatsApp Card */}
          <div className="p-8 gradient-card rounded-2xl shadow-xl bg-black/60 border border-yellow-500/20 hover:border-yellow-500/30 transition-all duration-300">
            <h2 className="mb-6 text-xl font-semibold text-yellow-400">Contactez-nous par WhatsApp</h2>
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20">
                <MessageSquare className="w-10 h-10 text-green-400" />
              </div>
              <p className="text-center text-gray-300">
                Contactez-nous directement sur WhatsApp pour une assistance rapide
              </p>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-all bg-green-600 rounded-lg hover:bg-green-700"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contactez-nous sur WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Social Media Section */}
        <div className="mt-12">
          <h2 className="mb-8 text-2xl font-bold text-center text-yellow-400">
            Suivez-nous sur les réseaux sociaux
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Instagram */}
            <a 
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 text-center gradient-card rounded-2xl shadow-xl bg-black/60 border border-pink-500/20 hover:border-pink-500/50 hover:shadow-pink-500/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-pink-400">Instagram</h3>
              <p className="text-gray-300">Suivez-nous pour des mises à jour et des promotions</p>
            </a>

            {/* Facebook */}
            <a 
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 text-center gradient-card rounded-2xl shadow-xl bg-black/60 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-blue-400">Facebook</h3>
              <p className="text-gray-300">Rejoignez notre communauté sur Facebook</p>
            </a>

            {/* Telegram */}
            <a 
              href={contactInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 text-center gradient-card rounded-2xl shadow-xl bg-black/60 border border-blue-400/20 hover:border-blue-400/50 hover:shadow-blue-400/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.95 1.24-5.5 3.65-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.88.03-.24.37-.49 1.02-.75 3.95-1.71 6.58-2.84 7.9-3.38 3.8-1.61 4.59-1.89 5.11-1.89.11 0 .36.03.52.18.14.13.18.31.2.51-.01.17-.01.5-.01.5z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-medium text-blue-300">Telegram</h3>
              <p className="text-gray-300">Rejoignez notre canal Telegram</p>
            </a>
          </div>
        </div>


      </div>
    </div>
  )
}
