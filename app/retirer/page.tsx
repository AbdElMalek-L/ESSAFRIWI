import Link from "next/link"
import Image from "next/image"

export default function RetirerPage() {
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
              <Link href="/retirer" className="text-yellow-500 nav-link active hover:text-yellow-400">
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
      </header>

      <div className="px-4 py-16 mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
          Retirer
        </h1>

        <div className="p-8 gradient-card rounded-2xl shadow-xl">
          <p className="mb-8 text-center text-gray-300">
            Retirez vos gains facilement et rapidement vers votre méthode de paiement préférée.
          </p>

          <form className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <label htmlFor="withdraw-app" className="block text-sm font-medium text-yellow-400">
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
              <label htmlFor="withdraw-id" className="block text-sm font-medium text-yellow-400">
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
              <label htmlFor="withdraw-amount" className="block text-sm font-medium text-yellow-400">
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
              <label htmlFor="withdraw-payment" className="block text-sm font-medium text-yellow-400">
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
              <label htmlFor="withdraw-phone" className="block text-sm font-medium text-yellow-400">
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
              className="w-full px-4 py-4 text-black transition-all rounded-lg shadow-lg btn-primary hover:shadow-yellow-500/20"
            >
              RETIRER MAINTENANT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
