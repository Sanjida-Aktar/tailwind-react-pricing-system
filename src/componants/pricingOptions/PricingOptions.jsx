import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingOptions = ({pricingPromice}) => {
    const pricingData = use(pricingPromice)
    // console.log(pricingData);
    return (
        <div>
            <h2 className='text-5xl'>get our memebership</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing =><PricingCard
                        key={pricing.id} 
                        pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;
