import Link from "next/link"
import Image from "next/image"

export default function RechargePage() {
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
              <Link href="/recharge" className="text-yellow-500 nav-link active hover:text-yellow-400">
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
      </header>

      <div className="px-4 py-16 mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
          Recharge
        </h1>

        <div className="p-8 gradient-card rounded-2xl shadow-xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="app" className="block text-sm font-medium text-yellow-400">
                Application
              </label>
              <select id="app" className="form-select">
                <option value="">Sélectionnez une application</option>
                <option value="cih">CIH</option>
                <option value="cashplus">CashPlus</option>
                <option value="barid">Barid Bank</option>
                <option value="orange">Orange Money</option>
                <option value="inwi">Inwi</option>
                <option value="attijariwafa">Attijariwafa bank</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="id" className="block text-sm font-medium text-yellow-400">
                ID ou Numéro de Téléphone
              </label>
              <input type="text" id="id" className="form-input" placeholder="Entrez votre ID ou numéro de téléphone" />
            </div>

            <div className="space-y-2">
              <label htmlFor="amount" className="block text-sm font-medium text-yellow-400">
                Montant
              </label>
              <input type="number" id="amount" className="form-input" placeholder="Entrez le montant" min="1" />
            </div>

            <div className="space-y-2">
              <label htmlFor="payment" className="block text-sm font-medium text-yellow-400">
                Méthode de Paiement
              </label>
              <select id="payment" className="form-select">
                <option value="">Sélectionnez une méthode de paiement</option>
                <option value="moov">Moov Money</option>
                <option value="mtn">MTN Mobile Money</option>
                <option value="orange">Orange Money</option>
                <option value="wave">Wave</option>
                <option value="djamo">Djamo</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-4 text-black transition-all rounded-lg shadow-lg btn-primary hover:shadow-yellow-500/20"
            >
              RECHARGER MAINTENANT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
