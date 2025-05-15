"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, FormEvent, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { applications, paymentMethods, isPhoneNumberMethod, formatRIB, formatPhoneNumber, whatsappContact, appInfo as appDetails } from "@/lib/data"

function RetirerContent() {
  const searchParams = useSearchParams()
  const [selectedApp, setSelectedApp] = useState<string | null>(null)
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [accountId, setAccountId] = useState("")
  const [withdrawalCode, setWithdrawalCode] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [fullName, setFullName] = useState("")

  // Get URL parameters on page load
  useEffect(() => {
    const appParam = searchParams.get('app')
    const methodParam = searchParams.get('method')
    
    if (appParam) {
      setSelectedApp(appParam)
    }
    
    if (methodParam) {
      setSelectedPayment(methodParam)
    }
  }, [searchParams])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!selectedApp || !accountId || !withdrawalCode || !selectedPayment || !bankAccount || !fullName) {
      alert("يرجى ملء جميع الحقول المطلوبة")
      return
    }
    
    // Prepare message for WhatsApp
    const message = `طلب سحب الأموال:
التطبيق: ${selectedApp}
رقم الحساب (ID): ${accountId}
كود السحب: ${withdrawalCode}
رقم الحساب البنكي: ${bankAccount}
الاسم الكامل: ${fullName}
طريقة الدفع: ${selectedPayment}`
    
    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappContact}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-black/80 backdrop-blur-md border-b border-yellow-500/10 md:px-8 sticky top-0 z-50">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-yellow-500">
              مختاري
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

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                        src={applications.find(app => app.name === selectedApp)?.logo || ''}
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
                    {applications.map((app) => (
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

            {selectedApp && appDetails[selectedApp as keyof typeof appDetails] && (
              <div className="p-4 mb-2 border border-yellow-500/20 rounded-lg bg-yellow-500/5">
                <h3 className="mb-2 text-yellow-400 font-medium">عنوان السحب</h3>
                {appDetails[selectedApp as keyof typeof appDetails].city && (
                  <p className="text-gray-300">المدينة: {appDetails[selectedApp as keyof typeof appDetails].city}</p>
                )}
                {appDetails[selectedApp as keyof typeof appDetails].address && (
                  <p className="text-gray-300">العنوان: {appDetails[selectedApp as keyof typeof appDetails].address}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="id" className="block text-sm font-medium text-yellow-400">
                رقم الحساب (ID)
              </label>
              <input 
                type="text" 
                id="id" 
                className="form-input text-right" 
                placeholder="رقم الحساب (ID)" 
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="withdrawalCode" className="block text-sm font-medium text-yellow-400">
                كود السحب
              </label>
              <input 
                type="text" 
                id="withdrawalCode" 
                className="form-input text-right" 
                placeholder="كود السحب" 
                value={withdrawalCode}
                onChange={(e) => setWithdrawalCode(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="bankAccount" className="block text-sm font-medium text-yellow-400">
                رقم الحساب البنكي
              </label>
              <input 
                type="text" 
                id="bankAccount" 
                className="form-input text-right" 
                placeholder="رقم الحساب البنكي" 
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-yellow-400">
                الاسم الكامل لصاحب الحساب
              </label>
              <input 
                type="text" 
                id="fullName" 
                className="form-input text-right" 
                placeholder="الاسم الكامل لصاحب الحساب" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
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

// Loading state component
function RetirerLoading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center" dir="rtl">
      <p className="text-yellow-500 text-xl">جاري التحميل...</p>
    </div>
  )
}

export default function RetirerPage() {
  return (
    <Suspense fallback={<RetirerLoading />}>
      <RetirerContent />
    </Suspense>
  )
}
