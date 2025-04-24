"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, FormEvent, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { formatRIB, formatPhoneNumber } from "@/lib/data"

export default function RetirerPage() {
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

  const appInfo = {
    "Paripulse": {
      city: "berkane",
      address: "special BM49"
    },
    "LineBet": {
      city: "berkane",
      address: "4 mokhtari49"
    },
    "1xBet": {
      city: "berkane",
      address: "#BM49"
    },
    "Melbet": {
      city: "",
      address: ""
    }
  }

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
    const whatsappUrl = `https://wa.me/212630813193?text=${encodeURIComponent(message)}`
    
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

            {selectedApp && appInfo[selectedApp as keyof typeof appInfo] && (
              <div className="p-4 mb-2 border border-yellow-500/20 rounded-lg bg-yellow-500/5">
                <h3 className="mb-2 text-yellow-400 font-medium">عنوان السحب</h3>
                {appInfo[selectedApp as keyof typeof appInfo].city && (
                  <p className="text-gray-300">المدينة: {appInfo[selectedApp as keyof typeof appInfo].city}</p>
                )}
                {appInfo[selectedApp as keyof typeof appInfo].address && (
                  <p className="text-gray-300">العنوان: {appInfo[selectedApp as keyof typeof appInfo].address}</p>
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
                        <span className="text-white text-sm sm:text-base flex-1 text-right">{method.name}</span>
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
