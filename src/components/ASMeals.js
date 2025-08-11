import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';

const ASMeals = () => {
  return (
    <>
    <FadeInSection>
    <shopify-store store-domain="https://zstorefoods.myshopify.com/" public-access-token="6a95b1cd24e8bb94d05669e9a6d0eadc">
      <div className="container">
        <main className="grid">
          <shopify-context type="product" handle="the-collection-man">
            <template>
              <div className="card">
                <shopify-media query="product.selected0rFirstAvalableVariant.image" width="300" height="300"></shopify-media>
                <h2><shopify-data query="product.title"></shopify-data></h2>
                <p><shopify-money query="product.selected0rFirstAvalableVariant.price" format="money_with_currency"></shopify-money></p>
              </div>
            </template>
          </shopify-context>
        </main>
      </div>
    </shopify-store>
    </FadeInSection>
    </>
  );
}

export default ASMeals;