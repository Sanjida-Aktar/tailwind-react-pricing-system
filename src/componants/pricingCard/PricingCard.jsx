import React from 'react';

const PricingCard = ({pricing}) => {
 

    if (!pricing) {
    return <div>No pricing data provided</div>;
    }
    const {name,price,information,features }=pricing
    console.log(pricing)
    return (
        <div className='border bg-green-200 rounded-2xl mt-3'>
            {/* <h2 className='text-5xl'>get out membership</h2> */}
            <div className='p-3'>
                
                  <h1 className='text-3xl text-amber-700'>{name}</h1>
                  <h4 className='text-xl'>{price}</h4>
            </div>
            <div className='p-3'>
                <p>{information}</p>

               <ul className='bg-green-300 p-3 mt-4 rounded'>
                {
                     features.map((features,index)=> <li key={index}>
                        <span>{features}</span>
                     </li>)
                }
               </ul>
            </div>
        </div>
    );
};

export default PricingCard;