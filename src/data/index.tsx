export const tabContent = [
  {
    icon: '/Heart.svg',
    bgIconColor: '#605CFF',
    count: 179,
    category: 'Favorities'
  },
  {
    icon: '/Game.svg',
    bgIconColor: '#2FE5A7',
    count: 219,
    category: 'New Sales'
  },
  {
    icon: '/Bag.svg',
    bgIconColor: '#FF69B4',
    count: 191,
    category: 'New Leads'
  },
  {
    icon: '/Briefcase.svg',
    bgIconColor: '#605CFF',
    count: 11,
    category: 'Referrals'
  }
]

export const orderTableColumns = [" Tracking no", "Product Name", "Price", "Total Order", "Total Amount"]

export const orders = [
  {
    trackingNo: '#876364',
    product: (
      <div className="flex items-center w-full">
        <img className="mx-2" src="/products/product1.png" alt="product"/>
        <span className="mx-4">Ui/Ux Designing</span>
      </div>
    ),
    price: '$178',
    totalOrders: (
      <div className="bg-[605CFF] px-2 py-1">
        <p className="text-white">123</p>
      </div>
    ),
    totalAmount: 146660
  },

  {
    trackingNo: '#238765',
    product: (
      <div className="flex">
        <img className="w-12 h-12" src="/products/product2.png"/>
        <span className="mx-4">Web Development</span>
      </div>
    ),
    price: '$450',
    totalOrders: (
      <div className="bg-[F59E0B] px-2 py-1">
        <p className="text-white">87</p>
      </div>
    ),
    totalAmount: 39150
  },
  {
    trackingNo: '#564789',
    product: (
      <div className="flex">
        <img className="w-12 h-12" src="/products/product3.png"/>
        <span className="mx-4">Mobile App Development</span>
      </div>
    ),
    price: '$799',
    totalOrders: (
      <div className="bg-[E11D3F] px-2 py-1">
        <p className="text-white">55</p>
      </div>
    ),
    totalAmount: 43945
  },
  {
    trackingNo: '#983421',
    product: (
      <div className="flex">
        <img className="w-12 h-12" src="/products/product4.png"/>
        <span className="mx-4">Graphic Design</span>
      </div>
    ),
    price: '$125',
    totalOrders: (
      <div className="bg-[4CAF50] px-2 py-1">
        <p className="text-white">200</p>
      </div>
    ),
    totalAmount: 25000
  },

]