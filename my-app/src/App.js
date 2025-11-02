import './App.css';
import { ProductCard } from './component/ProductCard';
import { ProductList } from './component/ProductList';

function App() {
    const products = [
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 15 Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 999,
    },
    {
      imageSrc: "images/airpods.png",
      title: "AirPods Pro 2",
      specification: [
        "Noise Cancellation",
        "Dust, sweat, and water resistant",
        "Up to 6 hours of listening",
      ],
      price: 249,
    },
    {
      imageSrc: "images/apple-watch.png",
      title: "Apple Watch 9",
      specification: [
        "45mm or 41mm case size",
        "Always-On Retina display",
        "Up to 18 hours normal use",
      ],
      price: 399,
    },
  ];

  
    function handleClick(product){
        alert(`You Clicked On ${product.title} which cost  $${product.price}`);
    }

    return <div className="App">
        <ProductList>
        {products.map(product => (
            <ProductCard 
            key={product.title}
            product={product} onClick={handleClick}/>
        ))}
        </ProductList>
    </div>
}

export default App;
