export const applications = [
  { name: "1xBet", logo: "https://i.ibb.co/gMYRsJtY/image.png", promoCode: "kw10 / kora14 / kw14" },
  { name: "LineBet", logo: "https://i.ibb.co/TxsNrpsf/image.png", promoCode: "ko11"  },
  { name: "Melbet", logo: "https://i.ibb.co/5WnRD0tz/image.png" , promoCode: "kw14" },
  { name: "BetWinner", logo: "https://i.ibb.co/mrd51H81/image.png", promoCode: "kwin10"},
]

export const paymentMethods = [
  { 
    name: "CIH", 
    logo: "https://i.ibb.co/Kx8ydnrM/image.png",
    rib: "6263139211019800",
    accountName: "fatima ouraj"
  },
  { 
    name: "CashPlus", 
    logo: "https://i.ibb.co/DHH7d06f/image.png",
    rib: "0699206293 / 0673734697",
    accountName: "Abderrahim essaghir"
  },
  { 
    name: "Barid Bank", 
    logo: "https://i.ibb.co/kNQWLtz/image.png",
    rib: "11626946",
    accountName: "Abderrahim essaghir"
  },
  { 
    name: "Orange", 
    logo: "https://i.ibb.co/cXCz47CP/image.png",
    rib: "Recharge",
    accountName: "Abderrahim essaghir"
  },
  { 
    name: "Inwi", 
    logo: "https://i.ibb.co/svhKsQMV/image.png",
    rib: "Recharge",
    accountName: "Abderrahim essaghir"
  },
  { 
    name: "Attijariwafa bank", 
    logo: "https://i.ibb.co/b5KvZbSJ/image.png",
    rib: "007281000478300030899733",
    accountName: "Abderrahim essaghir"
  },
]

export const contactInfo = {
  whatsapp: "https://wa.me/212673734697",
  whatsapp_backup: "https://wa.me/212699206293",
  instagram: "https://www.instagram.com/essafriwii?igsh=MWJvOG51bXB5YTFrbw==",
  facebook: "https://www.facebook.com/share/1ByJCPuGnf/",
  telegram: "https://t.me/abderrahim_essaghir",
}

export const whatsappContact = "212673734697"

export const appInfo = {
  "Paripulse": {
    city: "",
    address: ""
  },
  "LineBet": {
    city: "",
    address: ""
  },
  "1xBet": {
    city: "",
    address: ""
  },
  "Melbet": {
    city: "",
    address: ""
  }
}

export const headerLogoUrl = "https://i.ibb.co/YF4CDYxW/LOGO.png"

export const isPhoneNumberMethod = (name: string) => {
  return ['Orange', 'Inwi', 'CashPlus'].includes(name);
}

export const formatRIB = (rib: string) => {
  // Remove any existing spaces
  const cleaned = rib.replace(/\s/g, '');
  // Add a space every 4 characters
  return cleaned.match(/.{1,4}/g)?.join(' ') || rib;
}

export const formatPhoneNumber = (number: string) => {
    return number;
 
}