import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Fashion = () => {
  const fashionItems = [
    // Used Sneakers
    { 
      name: 'Used Nike Air Max', 
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300', 
      category: 'Used Sneakers',
      description: 'Pre-owned Nike Air Max, good condition',
      price: 'From $45'
    },
    { 
      name: 'Used Adidas Ultraboost', 
      image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=300', 
      category: 'Used Sneakers',
      description: 'Comfortable running shoes, gently used',
      price: 'From $50'
    },
    { 
      name: 'Used Puma Rs-X', 
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=300', 
      category: 'Used Sneakers',
      description: 'Streetwear style, excellent condition',
      price: 'From $40'
    },
    { 
      name: 'Used New Balance 574', 
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=300', 
      category: 'Used Sneakers',
      description: 'Classic lifestyle sneakers',
      price: 'From $35'
    },
    { 
      name: 'Used Reebok Classic', 
      image: 'https://images.unsplash.com/photo-1597045566677-8cf32ed8c427?auto=format&fit=crop&q=80&w=300', 
      category: 'Used Sneakers',
      description: 'Retro style, minimal wear',
      price: 'From $30'
    },

    // Designer Sneakers
    { 
      name: 'Gucci Ace Sneakers', 
      image: 'https://images.unsplash.com/photo-1617171496831-3e0d4f0f3b3a?auto=format&fit=crop&q=80&w=300', 
      category: 'Designer Sneakers',
      description: 'Authentic Gucci leather sneakers',
      price: 'From $450'
    },
    { 
      name: 'Gucci Rhyton', 
      image: 'https://images.unsplash.com/photo-1617171496831-3e0d4f0f3b3a?auto=format&fit=crop&q=80&w=300', 
      category: 'Designer Sneakers',
      description: 'Logo embroidered sneakers',
      price: 'From $520'
    },
    { 
      name: 'Louis Vuitton Trainer', 
      image: 'https://images.unsplash.com/photo-1617171496831-3e0d4f0f3b3a?auto=format&fit=crop&q=80&w=300', 
      category: 'Designer Sneakers',
      description: 'LV Trainer sneakers, full set',
      price: 'From $890'
    },
    { 
      name: 'Louis Vuitton Runner', 
      image: 'https://images.unsplash.com/photo-1617171496831-3e0d4f0f3b3a?auto=format&fit=crop&q=80&w=300', 
      category: 'Designer Sneakers',
      description: 'Tatoosh runner sneakers',
      price: 'From $750'
    },
    { 
      name: 'Louis Vuitton Skate', 
      image: 'https://images.unsplash.com/photo-1617171496831-3e0d4f0f3b3a?auto=format&fit=crop&q=80&w=300', 
      category: 'Designer Sneakers',
      description: 'LV Skate sneakers, limited edition',
      price: 'From $920'
    },

    // Used Clothes - Kids
    { 
      name: 'Kids T-Shirts (Bundle)', 
      image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=300', 
      category: 'Kids Clothes',
      description: 'Bundle of 5 kids t-shirts, various sizes',
      price: 'From $25'
    },
    { 
      name: 'Kids Jeans (Pack)', 
      image: 'https://images.unsplash.com/photo-1471286174890-9c112ffbcf5d?auto=format&fit=crop&q=80&w=300', 
      category: 'Kids Clothes',
      description: '3 pairs of kids jeans, good condition',
      price: 'From $30'
    },
    { 
      name: 'Kids Sweatpants', 
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=300', 
      category: 'Kids Clothes',
      description: 'Comfortable sweatpants for kids',
      price: 'From $12'
    },
    { 
      name: 'Kids Hoodies', 
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=300', 
      category: 'Kids Clothes',
      description: 'Warm hoodies for children',
      price: 'From $15'
    },
    { 
      name: 'Kids School Uniforms', 
      image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=300', 
      category: 'Kids Clothes',
      description: 'Mixed school uniform items',
      price: 'From $20'
    },

    // Used Clothes - Adults (Trousers)
    { 
      name: 'Men\'s Dress Pants', 
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=300', 
      category: 'Trousers',
      description: 'Formal trousers, various colors',
      price: 'From $25'
    },
    { 
      name: 'Men\'s Jeans', 
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=300', 
      category: 'Jeans',
      description: 'Quality denim jeans, good condition',
      price: 'From $30'
    },
    { 
      name: 'Men\'s Sweatpants', 
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=300', 
      category: 'Sweatpants',
      description: 'Comfortable joggers and sweatpants',
      price: 'From $20'
    },
    { 
      name: 'Women\'s Dress Pants', 
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=300', 
      category: 'Trousers',
      description: 'Elegant work pants for women',
      price: 'From $28'
    },
    { 
      name: 'Women\'s Jeans', 
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=300', 
      category: 'Jeans',
      description: 'Stylish denim for women',
      price: 'From $32'
    },
    { 
      name: 'Women\'s Sweatpants', 
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=300', 
      category: 'Sweatpants',
      description: 'Cozy lounge wear',
      price: 'From $22'
    },

    // Handbags
    { 
      name: 'Men\'s Leather Messenger', 
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=300', 
      category: 'Handbags',
      description: 'Genuine leather messenger bag',
      price: 'From $85'
    },
    { 
      name: 'Women\'s Tote Bag', 
      image: 'https://images.unsplash.com/photo-1584917865442-b89b3d95c4b6?auto=format&fit=crop&q=80&w=300', 
      category: 'Handbags',
      description: 'Spacious tote for everyday use',
      price: 'From $65'
    },
    { 
      name: 'Women\'s Crossbody', 
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=300', 
      category: 'Handbags',
      description: 'Stylish crossbody bag',
      price: 'From $55'
    },
    { 
      name: 'Men\'s Backpack', 
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300', 
      category: 'Handbags',
      description: 'Casual backpack for men',
      price: 'From $45'
    },
    { 
      name: 'Women\'s Clutch', 
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=300', 
      category: 'Handbags',
      description: 'Elegant evening clutch',
      price: 'From $35'
    },

    // Laptop Bags
    { 
      name: '15" Laptop Briefcase', 
      image: 'https://images.unsplash.com/photo-1622560480605-d6c3b4e6d8d6?auto=format&fit=crop&q=80&w=300', 
      category: 'Laptop Bags',
      description: 'Professional laptop briefcase',
      price: 'From $60'
    },
    { 
      name: '17" Laptop Backpack', 
      image: 'https://images.unsplash.com/photo-1622560480605-d6c3b4e6d8d6?auto=format&fit=crop&q=80&w=300', 
      category: 'Laptop Bags',
      description: 'Padded laptop backpack',
      price: 'From $55'
    },
    { 
      name: '13" Laptop Sleeve', 
      image: 'https://images.unsplash.com/photo-1622560480605-d6c3b4e6d8d6?auto=format&fit=crop&q=80&w=300', 
      category: 'Laptop Bags',
      description: 'Protective laptop sleeve',
      price: 'From $25'
    },
    { 
      name: 'Leather Laptop Bag', 
      image: 'https://images.unsplash.com/photo-1622560480605-d6c3b4e6d8d6?auto=format&fit=crop&q=80&w=300', 
      category: 'Laptop Bags',
      description: 'Genuine leather laptop bag',
      price: 'From $95'
    },
    { 
      name: 'Rolling Laptop Case', 
      image: 'https://images.unsplash.com/photo-1622560480605-d6c3b4e6d8d6?auto=format&fit=crop&q=80&w=300', 
      category: 'Laptop Bags',
      description: 'Wheeled laptop case for travel',
      price: 'From $80'
    },

    // Men's Belts
    { 
      name: 'Genuine Leather Belt', 
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300', 
      category: 'Belts',
      description: 'Quality leather belt, adjustable',
      price: 'From $30'
    },
    { 
      name: 'Designer Belt', 
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300', 
      category: 'Belts',
      description: 'Premium designer belt',
      price: 'From $85'
    },
    { 
      name: 'Casual Canvas Belt', 
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300', 
      category: 'Belts',
      description: 'Casual everyday belt',
      price: 'From $20'
    },
    { 
      name: 'Formal Dress Belt', 
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300', 
      category: 'Belts',
      description: 'Slim dress belt for suits',
      price: 'From $35'
    },
    { 
      name: 'Reversible Belt', 
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300', 
      category: 'Belts',
      description: '2-in-1 reversible belt',
      price: 'From $40'
    },

    // Watches
    { 
      name: 'Men\'s Analog Watch', 
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=300', 
      category: 'Watches',
      description: 'Classic analog watch for men',
      price: 'From $75'
    },
    { 
      name: 'Women\'s Fashion Watch', 
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=300', 
      category: 'Watches',
      description: 'Elegant women\'s timepiece',
      price: 'From $65'
    },
    { 
      name: 'Smart Watch', 
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=300', 
      category: 'Watches',
      description: 'Latest smartwatch with fitness tracking',
      price: 'From $120'
    },
    { 
      name: 'Luxury Chronograph', 
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=300', 
      category: 'Watches',
      description: 'Premium chronograph watch',
      price: 'From $250'
    },
    { 
      name: 'Minimalist Watch', 
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=300', 
      category: 'Watches',
      description: 'Simple minimalist design',
      price: 'From $45'
    },

    // Jewelry - Men
    { 
      name: 'Men\'s Silver Chain', 
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Jewelry',
      description: 'Sterling silver chain',
      price: 'From $80'
    },
    { 
      name: 'Men\'s Gold Ring', 
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Jewelry',
      description: '14k gold men\'s ring',
      price: 'From $150'
    },
    { 
      name: 'Men\'s Bracelet', 
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Jewelry',
      description: 'Leather and metal bracelet',
      price: 'From $45'
    },
    { 
      name: 'Men\'s Cufflinks', 
      image: 'https://images.unsplash.com/photo-1589128777073-2637ae644e4a?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Jewelry',
      description: 'Silver cufflinks set',
      price: 'From $35'
    },
    { 
      name: 'Men\'s Pendant', 
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Jewelry',
      description: 'Stylish pendant on chain',
      price: 'From $60'
    },

    // Jewelry - Women
    { 
      name: 'Women\'s Gold Earrings', 
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Jewelry',
      description: '14k gold hoop earrings',
      price: 'From $90'
    },
    { 
      name: 'Women\'s Diamond Ring', 
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Jewelry',
      description: 'Elegant diamond ring',
      price: 'From $200'
    },
    { 
      name: 'Women\'s Silver Necklace', 
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Jewelry',
      description: 'Sterling silver pendant necklace',
      price: 'From $70'
    },
    { 
      name: 'Women\'s Bracelet', 
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Jewelry',
      description: 'Gold chain bracelet',
      price: 'From $65'
    },
    { 
      name: 'Women\'s Anklet', 
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Jewelry',
      description: 'Delicate silver anklet',
      price: 'From $30'
    },

    // Perfumes - Men
    { 
      name: 'Men\'s Designer Perfume', 
      image: 'https://images.unsplash.com/photo-1595425964066-28e0a0c2a5d8?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Perfume',
      description: 'Long-lasting masculine scent',
      price: 'From $55'
    },
    { 
      name: 'Men\'s Luxury Cologne', 
      image: 'https://images.unsplash.com/photo-1595425964066-28e0a0c2a5d8?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Perfume',
      description: 'Premium cologne, 100ml',
      price: 'From $85'
    },
    { 
      name: 'Men\'s Gift Set', 
      image: 'https://images.unsplash.com/photo-1595425964066-28e0a0c2a5d8?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Perfume',
      description: 'Perfume and aftershave set',
      price: 'From $95'
    },
    { 
      name: 'Men\'s Sport Scent', 
      image: 'https://images.unsplash.com/photo-1595425964066-28e0a0c2a5d8?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Perfume',
      description: 'Fresh sport fragrance',
      price: 'From $45'
    },
    { 
      name: 'Men\'s Classic Perfume', 
      image: 'https://images.unsplash.com/photo-1595425964066-28e0a0c2a5d8?auto=format&fit=crop&q=80&w=300', 
      category: 'Men\'s Perfume',
      description: 'Timeless classic scent',
      price: 'From $65'
    },

    // Perfumes - Women
    { 
      name: 'Women\'s Designer Perfume', 
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Perfume',
      description: 'Elegant floral fragrance',
      price: 'From $60'
    },
    { 
      name: 'Women\'s Luxury Perfume', 
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Perfume',
      description: 'Premium French perfume',
      price: 'From $90'
    },
    { 
      name: 'Women\'s Gift Set', 
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Perfume',
      description: 'Perfume and lotion set',
      price: 'From $85'
    },
    { 
      name: 'Women\'s Body Mist', 
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Perfume',
      description: 'Light everyday body mist',
      price: 'From $30'
    },
    { 
      name: 'Women\'s Rollerball', 
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=300', 
      category: 'Women\'s Perfume',
      description: 'Travel-size perfume',
      price: 'From $25'
    },
  ];

  // Group items by category
  const categories = [
    { id: 'Used Sneakers', name: 'Used Sneakers', icon: '👟' },
    { id: 'Designer Sneakers', name: 'Designer Sneakers', icon: '👞' },
    { id: 'Kids Clothes', name: 'Kids Clothing', icon: '👕' },
    { id: 'Jeans', name: 'Jeans', icon: '👖' },
    { id: 'Trousers', name: 'Trousers', icon: '👖' },
    { id: 'Sweatpants', name: 'Sweatpants', icon: '🩳' },
    { id: 'Handbags', name: 'Handbags', icon: '👜' },
    { id: 'Laptop Bags', name: 'Laptop Bags', icon: '💼' },
    { id: 'Belts', name: 'Men\'s Belts', icon: '🔗' },
    { id: 'Watches', name: 'Watches', icon: '⌚' },
    { id: 'Men\'s Jewelry', name: 'Men\'s Jewelry', icon: '💍' },
    { id: 'Women\'s Jewelry', name: 'Women\'s Jewelry', icon: '💎' },
    { id: 'Men\'s Perfume', name: 'Men\'s Perfume', icon: '🧴' },
    { id: 'Women\'s Perfume', name: 'Women\'s Perfume', icon: '🌸' },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <div className="bg-primary-dark border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-accent hover:text-accent/80 transition"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-display font-bold text-accent">
              Fashion & Accessories
            </h1>
          </div>
          <p className="text-gray-400 mt-2">
            Premium fashion items, accessories, and luxury goods
          </p>
        </div>
      </div>

      {/* Categories and Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-2xl font-display font-bold text-accent mb-6 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span>{category.icon}</span> {category.name}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {fashionItems
                .filter(item => item.category === category.id)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-primary-light rounded-xl overflow-hidden hover:shadow-xl transition group cursor-pointer border border-gray-800 hover:border-accent/50"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-800">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/300x300?text=Fashion+Item';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-accent mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-accent font-bold">
                          {item.price}
                        </span>
                        <button className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm hover:bg-accent/20 transition">
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fashion;