import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-black/80 backdrop-blur-md border-b border-yellow-500/10 md:px-8 sticky top-0 z-50">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-yellow-500">
              MOKHTARI<span className="text-white">49</span>
            </span>
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
          <div className="p-8 gradient-card rounded-2xl shadow-xl">
            <h2 className="mb-6 text-xl font-semibold text-yellow-400">Envoyez-nous un message</h2>

            <form className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-yellow-400">
                  Nom
                </label>
                <input type="text" id="name" className="form-input" placeholder="Entrez votre nom" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-yellow-400">
                  Email
                </label>
                <input type="email" id="email" className="form-input" placeholder="Entrez votre email" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-yellow-400">
                  Message
                </label>
                <textarea id="message" rows={4} className="form-input" placeholder="Entrez votre message"></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 text-black transition-all rounded-lg shadow-lg btn-primary hover:shadow-yellow-500/20"
              >
                ENVOYER
              </button>
            </form>
          </div>

          <div className="p-8 gradient-card rounded-2xl shadow-xl">
            <h2 className="mb-6 text-xl font-semibold text-yellow-400">Nos Coordonnées</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/20">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-medium text-yellow-300">Téléphone</h3>
                  <p className="text-gray-300">+123 456 7890</p>
                  <p className="text-gray-300">+123 456 7891</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/20">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-medium text-yellow-300">Email</h3>
                  <p className="text-gray-300">contact@mokhtari49.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/20">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-medium text-yellow-300">Adresse</h3>
                  <p className="text-gray-300">123 Rue Example, Ville</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/20">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-medium text-yellow-300">Horaires</h3>
                  <p className="text-gray-300">Lundi - Vendredi: 9h - 18h</p>
                  <p className="text-gray-300">Samedi: 10h - 16h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
