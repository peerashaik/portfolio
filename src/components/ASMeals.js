import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';

const countryCode = 'IN';
const ASMeals = () => {
  return (
    <>
    <FadeInSection>
    <shopify-store store-domain="zstorefoods.myshopify.com" public-access-token="d06ff6913da3382fa953c37cb46dab50" country="US" language="en">
      <div className="container">
        <main className="grid">
          <shopify-context  type="collection" handle="the-collection-man">
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