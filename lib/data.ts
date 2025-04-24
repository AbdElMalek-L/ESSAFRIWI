export const applications = [
  { name: "1xBet", logo: "https://i.ibb.co/gMYRsJtY/image.png" },
  { name: "LineBet", logo: "https://i.ibb.co/TxsNrpsf/image.png" },
  { name: "Melbet", logo: "https://i.ibb.co/5WnRD0tz/image.png" },
  { name: "Paripulse", logo: "https://i.ibb.co/BVmQyG80/image.png" },
]

export const paymentMethods = [
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
  // Remove any existing spaces
  const cleaned = number.replace(/\s/g, '');
  // Add a space every 2 characters
  return cleaned.match(/.{1,2}/g)?.join(' ') || number;
} 