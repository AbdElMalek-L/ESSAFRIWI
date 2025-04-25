import Link from "next/link"
import Image from "next/image"

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-black/90 backdrop-blur-xl border-b border-yellow-500/20 md:px-8 sticky top-0 z-50 shadow-lg shadow-yellow-500/5">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-yellow-500">
              MOKHTARI<span className="text-white">49</span>
            </span>
          </Link>
        </div>

        <Link
          href="/video"
          className="hidden px-5 py-2 text-sm font-medium text-white transition-all border border-yellow-500/30 rounded-full md:block hover:bg-yellow-500/10 hover:border-yellow-500/50"
        >
          VIDÉO EXPLICATIVE
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-white nav-link hover:text-yellow-300">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/recharge" className="text-white nav-link hover:text-yellow-300">
                RECHARGE
              </Link>
            </li>

            <li>
              <Link href="/retirer" className="text-white nav-link hover:text-yellow-300">
                RETIRER
              </Link>
            </li>
            <li>
              <Link href="/contactez-nous" className="text-white nav-link hover:text-yellow-300">
                CONTACTEZ NOUS
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="px-4 py-16 mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
          Vidéo Explicative
        </h1>

        <div className="p-8 gradient-card rounded-2xl shadow-xl bg-black/60 border border-yellow-500/20 hover:border-yellow-500/30">
          <div className="aspect-video bg-black rounded-xl mb-8 overflow-hidden shadow-lg border border-yellow-500/20">
            {/* This would be replaced with an actual video player */}
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-yellow-300">Vidéo explicative sur l'utilisation de mokhtari49</p>
            </div>
          </div>

          <h2 className="mb-6 text-2xl font-semibold text-yellow-300">Comment utiliser mokhtari49</h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              Bienvenue sur mokhtari49, votre plateforme de confiance pour recharger vos comptes de paris sportifs.
              Cette vidéo vous explique comment utiliser notre service en quelques étapes simples.
            </p>

            {/* Recharge Section */}
            <h3 className="text-xl font-medium text-yellow-200 mt-8 mb-4">شحن الحساب - Recharge</h3>

            <p className="mb-4 text-gray-300">
              شحن حسابك بسهولة وسرعة مع أفضل الأسعار وخدمة ممتازة.
            </p>

            <ol className="space-y-3 pl-6 text-gray-300">
              <li className="pl-2">اختر التطبيق الذي تريد شحنه (1xBet, LineBet, Melbet, Paripulse)</li>
              <li className="pl-2">أدخل المعرف الخاص بك (ID)</li>
              <li className="pl-2">أدخل المبلغ الذي ترغب في شحنه</li>
              <li className="pl-2">اختر طريقة الدفع المفضلة لديك</li>
              <li className="pl-2">قم بتأكيد وإتمام الدفع</li>
              <li className="pl-2">استلم تأكيد الشحن</li>
            </ol>

            {/* Withdraw Section */}
            <h3 className="text-xl font-medium text-yellow-200 mt-8 mb-4">سحب الأموال - Retirer</h3>

            <p className="mb-4 text-gray-300">
              اسحب أرباحك بسهولة وسرعة إلى طريقة الدفع المفضلة لديك.
            </p>

            <ol className="space-y-3 pl-6 text-gray-300">
              <li className="pl-2">اختر التطبيق المراد سحب الأموال منه</li>
              <li className="pl-2">أدخل رقم حسابك (ID)</li>
              <li className="pl-2">أدخل كود السحب</li>
              <li className="pl-2">أدخل رقم الحساب البنكي والاسم الكامل</li>
              <li className="pl-2">اختر طريقة الدفع للاستلام</li>
              <li className="pl-2">قم بتأكيد وإتمام عملية السحب</li>
            </ol>

            <p className="mt-6 text-gray-300">
              Si vous avez des questions ou besoin d'assistance, n'hésitez pas à nous contacter via la page
              <Link href="/contactez-nous" className="text-yellow-400 hover:underline">
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
