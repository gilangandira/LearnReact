export function ProductCard() {
    const product = {
        imageSrc : "images/iphone.png",
        title : "iPhone 16 Pro",
        specification : ["A17 Pro chip with 6-core GPU",
            "3x or 5x Telephoto camera",
            "Up to 29 hours video playback"
        ],
        price : 99999,
        size : "128px",
    }

    function getProductTitle(){
        return product.title
    }

    function getCustomFunctionVar(customs){
       return customs 
    }

    return (
     <article style={{
        border: '1px solid white',
        borderRadius: '8px',
        padding: '16px',
        textAlign:'center'
     }}>
      <h2>{getProductTitle()}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width={getCustomFunctionVar(product.size)}
        height={getCustomFunctionVar(product.size)}
      />
      <p>Specification:</p>
      <ul style={{
        listStyle: "none",
        padding: 0
      }}>
        <li>{product.specification[0]}
        </li>
        <li>{product.specification[1]}</li>
        <li>{product.specification[2]}</li>
      </ul>
      <button>Buy (From ${product.price})</button>
    </article>
    );
}
