import React from 'react'
 

function ProductCards({data, error, loading, productId}) {




return (
    <div className="ProductCards">
    <div className="Content">
    {loading && <div>A moment please...</div>}
    {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
    {data && <div key="1">HOla data {`${productId}`}</div>}
    </div>
</div>
);
}

export default ProductCards
