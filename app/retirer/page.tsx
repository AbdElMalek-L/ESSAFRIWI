import Link from "next/link"
import Image from "next/image"

export default function RetirerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#0a182b] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-slate-900/80 backdrop-blur-md border-b border-sky-500/10 md:px-8 sticky top-0 z-50">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="mokhtari49 Logo" width={36} height={36} className="object-contain" />
            <span className="text-xl font-bold text-sky-400">
              MOKHTARI<span className="text-white">49</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-white nav-link hover:text-sky-300">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/recharge" className="text-white nav-link hover:text-sky-300">
                RECHARGE
              </Link>
            </li>

            <li>
              <Link href="/retirer" className="text-sky-400 nav-link active hover:text-sky-300">
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
      </header>

      <div className="px-4 py-16 mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
          Retirer
        </h1>

        <div className="p-8 gradient-card rounded-2xl shadow-xl">
          <p className="mb-8 text-center text-gray-300">
            Retirez vos gains facilement et rapidement vers votre méthode de paiement préférée.
          </p>

          <form className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <label htmlFor="withdraw-app" className="block text-sm font-medium text-sky-300">
                Application
              </label>
              <select id="withdraw-app" className="form-select">
                <option value="">Sélectionnez une application</option>
                <option value="1xbet">1xBet</option>
                <option value="linebet">LineBet</option>
                <option value="betwinner">BetWinner</option>
                <option value="melbet">MelBet</option>
                <option value="888starz">888Starz</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="withdraw-id" className="block text-sm font-medium text-sky-300">
                ID ou Numéro de Téléphone
              </label>
              <input
                type="text"
                id="withdraw-id"
                className="form-input"
                placeholder="Entrez votre ID ou numéro de téléphone"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="withdraw-amount" className="block text-sm font-medium text-sky-300">
                Montant
              </label>
              <input
                type="number"
                id="withdraw-amount"
                className="form-input"
                placeholder="Entrez le montant"
                min="1"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="withdraw-payment" className="block text-sm font-medium text-sky-300">
                Méthode de Paiement
              </label>
              <select id="withdraw-payment" className="form-select">
                <option value="">Sélectionnez une méthode de paiement</option>
                <option value="moov">Moov Money</option>
                <option value="mtn">MTN Mobile Money</option>
                <option value="orange">Orange Money</option>
                <option value="wave">Wave</option>
                <option value="djamo">Djamo</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="withdraw-phone" className="block text-sm font-medium text-sky-300">
                Numéro de Téléphone pour Recevoir
              </label>
              <input
                type="tel"
                id="withdraw-phone"
                className="form-input"
                placeholder="Entrez le numéro de téléphone"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-4 text-white transition-all rounded-lg shadow-lg btn-primary hover:shadow-sky-500/20"
            >
              RETIRER MAINTENANT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
