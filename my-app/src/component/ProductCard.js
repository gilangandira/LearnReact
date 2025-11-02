export function ProductCard({
  product,  
  onClick,
  ...restProps    
    
    
}) {

  
  function getProductTitle(){
        return product.title
    }

    // function getCustomFunctionVar(customs){
    //    return customs 
    // }

    return (
     <article style={{
        width : product.width,
        border: '1px solid white',
        borderRadius: '8px',
        padding: '16px',
        textAlign:'center'
     }}>
      <h2>{getProductTitle()}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width={128}
        height={128}
        {...restProps}
      />
      <p>Specification:</p>
      <ul style={{
        listStyle: "none",
        padding: 0
      }}>
        {product.specification.map((spec, index) => (
        <li key={index}>{spec}</li>
        ))}
       
     
      </ul>
      <button onClick={() => onClick(product)} >Buy (From ${product.price})</button>
    </article>
    );
}
