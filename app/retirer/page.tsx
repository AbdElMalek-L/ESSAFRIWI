"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function RetirerPage() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)

  const formatRIB = (rib: string) => {
    // Remove any existing spaces
    const cleaned = rib.replace(/\s/g, '');
    // Add a space every 4 characters
    return cleaned.match(/.{1,4}/g)?.join(' ') || rib;
  }

  const formatPhoneNumber = (number: string) => {
    // Remove any existing spaces
    const cleaned = number.replace(/\s/g, '');
    // Add a space every 2 characters
    return cleaned.match(/.{1,2}/g)?.join(' ') || number;
  }

  const isPhoneNumberMethod = (name: string) => {
    return ['Orange', 'Inwi', 'CashPlus'].includes(name);
  }

  const paymentMethods = [
    { 
      name: "CIH", 
      logo: "https://i.ibb.co/Kx8ydnrM/image.png",
      rib: "6313 1522 1100 8300",
      accountName: "BELKACEM MOKHTARI"
    },
    { 
      name: "CashPlus", 
      logo: "https://i.ibb.co/DHH7d06f/image.png",
      rib: "0712137400",
      accountName: "BELKACEM MOKHTARI"
    },
    { 
      name: "Barid Bank", 
      logo: "https://i.ibb.co/kNQWLtz/image.png",
      rib: "",
      accountName: "BELKACEM MOKHTARI"
    },
    { 
      name: "Orange", 
      logo: "https://i.ibb.co/cXCz47CP/image.png",
      rib: "0712137400",
      accountName: "BELKACEM MOKHTARI"
    },
    { 
      name: "Inwi", 
      logo: "https://i.ibb.co/svhKsQMV/image.png",
      rib: "",
      accountName: "BELKACEM MOKHTARI"
    },
    { 
      name: "Attijariwafa bank", 
      logo: "https://i.ibb.co/b5KvZbSJ/image.png",
      rib: "0075 7500 0788 2000 3040 5179",
      accountName: "BELKACEM MOKHTARI"
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-black/80 backdrop-blur-md border-b border-yellow-500/10 md:px-8 sticky top-0 z-50">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-yellow-500">
              مختاري<span className="text-white">49</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-white nav-link hover:text-yellow-400">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/recharge" className="text-white nav-link hover:text-yellow-400">
                شحن الحساب
              </Link>
            </li>

            <li>
              <Link href="/retirer" className="text-yellow-500 nav-link active hover:text-yellow-400">
                سحب الأموال
              </Link>
            </li>
            <li>
              <Link href="/contactez-nous" className="text-white nav-link hover:text-yellow-400">
                اتصل بنا
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="px-4 py-16 mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">
          سحب الأموال
        </h1>

        <div className="p-8 gradient-card rounded-2xl shadow-xl">
          <p className="mb-8 text-center text-gray-300">
            اسحب أرباحك بسهولة وسرعة إلى طريقة الدفع المفضلة لديك.
          </p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="app" className="block text-sm font-medium text-yellow-400">
                التطبيق
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSelectedApp(selectedApp === null ? '' : null)}
                  className="flex flex-row-reverse items-center w-full p-4 transition-all border rounded-lg hover:border-yellow-500 border-yellow-500/20"
                >
                  <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white ml-3">
                    {selectedApp ? (
                      <Image
                        src={[
                          { name: "1xBet", logo: "https://i.ibb.co/gMYRsJtY/image.png" },
                          { name: "LineBet", logo: "https://i.ibb.co/TxsNrpsf/image.png" },
                          { name: "Melbet", logo: "https://i.ibb.co/5WnRD0tz/image.png" },
                          { name: "Paripulse", logo: "https://i.ibb.co/BVmQyG80/image.png" },
                        ].find(app => app.name === selectedApp)?.logo || ''}
                        alt={selectedApp}
                        fill
                        className="object-contain p-1"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-gray-400">
                        اختر
                      </div>
                    )}
                  </div>
                  <span className="text-white flex-1 text-right">{selectedApp || 'اختر تطبيقًا'}</span>
                </button>
                {selectedApp === '' && (
                  <div className="absolute z-10 w-full mt-1 bg-black border rounded-lg border-yellow-500/20">
                    {[
                      { name: "1xBet", logo: "https://i.ibb.co/gMYRsJtY/image.png" },
                      { name: "LineBet", logo: "https://i.ibb.co/TxsNrpsf/image.png" },
                      { name: "Melbet", logo: "https://i.ibb.co/5WnRD0tz/image.png" },
                      { name: "Paripulse", logo: "https://i.ibb.co/BVmQyG80/image.png" },
                    ].map((app) => (
                      <button
                        key={app.name}
                        type="button"
                        onClick={() => setSelectedApp(app.name)}
                        className="flex flex-row-reverse items-center w-full p-2 transition-all hover:bg-yellow-500/10 sm:p-4"
                      >
                        <div className="relative min-w-10 w-10 h-10 overflow-hidden rounded-lg bg-white sm:min-w-12 sm:w-12 sm:h-12 ml-3">
                          <Image
                            src={app.logo}
                            alt={app.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <span className="text-white text-sm sm:text-base flex-1 text-right">{app.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="id" className="block text-sm font-medium text-yellow-400">
                المعرف أو رقم الهاتف
              </label>
              <input type="text" id="id" className="form-input text-right" placeholder="أدخل المعرف أو رقم الهاتف الخاص بك" />
            </div>

            <div className="space-y-2">
              <label htmlFor="amount" className="block text-sm font-medium text-yellow-400">
                المبلغ
              </label>
              <input type="number" id="amount" className="form-input text-right" placeholder="أدخل المبلغ" min="1" />
            </div>

            <div className="space-y-2">
              <label htmlFor="payment" className="block text-sm font-medium text-yellow-400">
                طريقة الدفع
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSelectedPayment(selectedPayment === null ? '' : null)}
                  className="flex flex-row-reverse items-center w-full p-4 transition-all border rounded-lg hover:border-yellow-500 border-yellow-500/20"
                >
                  <div className="relative min-w-12 w-12 h-12 overflow-hidden rounded-lg bg-white ml-3">
                    {selectedPayment ? (
                      <Image
                        src={paymentMethods.find(method => method.name === selectedPayment)?.logo || ''}
                        alt={selectedPayment}
                        fill
                        className="object-contain p-1 min-w-12"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-gray-400">
                        اختر
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 text-right">
                    <span className="text-white">{selectedPayment || 'اختر طريقة الدفع'}</span>
                    {selectedPayment && (
                      <div className="flex flex-col mt-2 space-y-1">
                        <span className="text-sm text-gray-400">الاسم: {paymentMethods.find(method => method.name === selectedPayment)?.accountName}</span>
                        {isPhoneNumberMethod(selectedPayment) ? (
                          <span className="text-sm text-gray-400 font-mono">الرقم: {formatPhoneNumber(paymentMethods.find(method => method.name === selectedPayment)?.rib || '')}</span>
                        ) : (
                          <span className="text-sm text-gray-400 font-mono" >RIB: {formatRIB(paymentMethods.find(method => method.name === selectedPayment)?.rib || '')}</span>
                        )}
                      </div>
                    )}
                  </div>
                </button>
                {selectedPayment === '' && (
                  <div className="absolute z-10 w-full mt-1 bg-black border rounded-lg border-yellow-500/20">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.name}
                        type="button"
                        onClick={() => setSelectedPayment(method.name)}
                        className="flex flex-row-reverse items-center w-full p-2 transition-all hover:bg-yellow-500/10 sm:p-4"
                      >
                        <div className="relative min-w-10 w-10 h-10 overflow-hidden rounded-lg bg-white sm:min-w-12 sm:w-12 sm:h-12 ml-3">
                          <Image
                            src={method.logo}
                            alt={method.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-col flex-1 text-right">
                          <span className="text-white text-sm sm:text-base">{method.name}</span>
                          <div className="flex flex-col mt-0.5 space-y-0.5 sm:mt-1 sm:space-y-1">
                            <span className="text-xs text-gray-400 sm:text-sm">الاسم: {method.accountName}</span>
                            {isPhoneNumberMethod(method.name) ? (
                              <span className="text-xs text-gray-400 sm:text-sm font-mono">الرقم: {formatPhoneNumber(method.rib)}</span>
                            ) : (
                              <span className="text-xs text-gray-400 sm:text-sm font-mono">RIB: {formatRIB(method.rib)}</span>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-yellow-400">
                رقم الهاتف للاستلام
              </label>
              <input type="tel" id="phone" className="form-input text-right" placeholder="أدخل رقم الهاتف" />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-4 text-black transition-all rounded-lg shadow-lg btn-primary hover:shadow-yellow-500/20"
            >
              اسحب الآن
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
