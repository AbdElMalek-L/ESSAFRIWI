import Link from "next/link"
import Image from "next/image"

export default function VideoPage() {
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

        <Link
          href="/video"
          className="hidden px-5 py-2 text-sm font-medium text-white transition-all border border-sky-500/30 rounded-full md:block hover:bg-sky-500/10 hover:border-sky-500/50"
        >
          VIDÉO EXPLICATIVE
        </Link>

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
      </header>

      <div className="px-4 py-16 mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
          Vidéo Explicative
        </h1>

        <div className="p-8 gradient-card rounded-2xl shadow-xl">
          <div className="aspect-video bg-slate-800 rounded-xl mb-8 overflow-hidden shadow-lg border border-sky-500/20">
            {/* This would be replaced with an actual video player */}
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-sky-300">Vidéo explicative sur l'utilisation de mokhtari49</p>
            </div>
          </div>

          <h2 className="mb-6 text-2xl font-semibold text-sky-300">Comment utiliser mokhtari49</h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              Bienvenue sur mokhtari49, votre plateforme de confiance pour recharger vos comptes de paris sportifs.
              Cette vidéo vous explique comment utiliser notre service en quelques étapes simples.
            </p>

            <h3 className="text-xl font-medium text-sky-200 mt-6 mb-4">Étapes pour recharger votre compte</h3>

            <ol className="space-y-3 pl-6 text-gray-300">
              <li className="pl-2">Sélectionnez l'application que vous souhaitez recharger (1xBet, LineBet, etc.)</li>
              <li className="pl-2">Entrez votre ID ou numéro de téléphone associé à votre compte</li>
              <li className="pl-2">Indiquez le montant que vous souhaitez recharger</li>
              <li className="pl-2">Choisissez votre méthode de paiement préférée</li>
              <li className="pl-2">Confirmez et effectuez le paiement</li>
              <li className="pl-2">Recevez la confirmation de votre recharge</li>
            </ol>

            <p className="mt-6 text-gray-300">
              Si vous avez des questions ou besoin d'assistance, n'hésitez pas à nous contacter via la page
              <Link href="/contactez-nous" className="text-sky-400 hover:underline">
                {" "}
                Contactez Nous
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
