const data = [
    {
      "id": 1,
      "name": "OnePlus 12R",
      "description": "Sunset Dune",
      "price": "₹38,999",
      "img": "https://images.unsplash.com/photo-1580521923679-6d275830d039?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25lcGx1cyUyMDEyciUyMG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
      "features": [
        "Operating System: OxygenOS",
        "CPU Speed: Snapdragon",
        "RAM Memory Installed Size: 16 GB",
        "Memory Storage Capacity: 256 GB"
      ]
    },
    {
      "id": 2,
      "name": "iPhone 14 Pro",
      "description": "Dynamic Island",
      "price": "₹1,29,900",
      "img": "https://images.unsplash.com/photo-1580885144104-01b638c80e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D",
      "features": [
        "Operating System: iOS",
        "CPU Speed: A16 Bionic",
        "RAM Memory Installed Size: 6 GB",
        "Memory Storage Capacity: 128 GB"
      ]
    },
    {
      "id": 3,
      "name": "Samsung Galaxy S23",
      "description": "Phantom Black",
      "price": "₹79,999",
      "img": "https://images.unsplash.com/photo-1602563259479-38652c7586ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D",
      "features": [
        "Operating System: Android",
        "CPU Speed: Snapdragon 8 Gen 2",
        "RAM Memory Installed Size: 12 GB",
        "Memory Storage Capacity: 256 GB"
      ]
    },
    {
      "id": 4,
      "name": "Xiaomi Mi 13 Ultra",
      "description": "Pro Camera",
      "price": "₹71,999",
      "img": "https://images.unsplash.com/photo-1706372124821-952b522c8961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D",
      "features": [
        "Operating System: MIUI",
        "CPU Speed: Snapdragon 8 Gen 2",
        "RAM Memory Installed Size: 12 GB",
        "Memory Storage Capacity: 512 GB"
      ]
    },
    {
      "id": 5,
      "name": "Google Pixel 8",
      "description": "AI Camera",
      "price": "₹61,999",
      "img": "https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
      "features": [
        "Operating System: Android",
        "CPU Speed: Tensor G3",
        "RAM Memory Installed Size: 8 GB",
        "Memory Storage Capacity: 128 GB"
      ]
    },
    {
      "id": 6,
      "name": "Vivo X90 Pro",
      "description": "Xtreme Night",
      "price": "₹66,999",
      "img": "https://images.unsplash.com/photo-1590935217281-8f102120d683?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
      "features": [
        "Operating System: Funtouch OS",
        "CPU Speed: MediaTek Dimensity 9200",
        "RAM Memory Installed Size: 12 GB",
        "Memory Storage Capacity: 256 GB"
      ]
    },
    {
      "id": 7,
      "name": "Realme GT Neo 5",
      "description": "Fast Charge",
      "price": "₹44,999",
      "img": "https://images.unsplash.com/photo-1620856902651-ce18d6d31d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
      "features": [
        "Operating System: Realme UI",
        "CPU Speed: Snapdragon 8+ Gen 1",
        "RAM Memory Installed Size: 16 GB",
        "Memory Storage Capacity: 512 GB"
      ]
    },
    {
      "id": 8,
      "name": "Motorola Edge 40",
      "description": "Sleek Design",
      "price": "₹29,999",
      "img": "https://images.unsplash.com/photo-1599950753894-d84cbcce4e95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
      "features": [
        "Operating System: Android",
        "CPU Speed: MediaTek Dimensity 8020",
        "RAM Memory Installed Size: 8 GB",
        "Memory Storage Capacity: 256 GB"
      ]
    },
    {
      "id": 9,
      "name": "Nothing Phone 2",
      "description": "Glyph Interface",
      "price": "₹37,999",
      "img": "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
      "features": [
        "Operating System: Nothing OS",
        "CPU Speed: Snapdragon 8 Gen 1",
        "RAM Memory Installed Size: 12 GB",
        "Memory Storage Capacity: 256 GB"
      ]
    },
    {
      "id": 10,
      "name": "Oppo Reno 10 Pro",
      "description": "Portrait Expert",
      "price": "₹39,999",
      "img": "https://images.unsplash.com/flagged/photo-1581390476351-b5d89504a5cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxtb2JpbGVzfGVufDB8fDB8fHww",
      "features": [
        "Operating System: ColorOS",
        "CPU Speed: Snapdragon 778G",
        "RAM Memory Installed Size: 12 GB",
        "Memory Storage Capacity: 256 GB"
      ]
    }
 
  ]
  
  export default data;