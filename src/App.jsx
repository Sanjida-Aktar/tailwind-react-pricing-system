
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './componants/daisyNav/DaisyNav'
import Navbar from './componants/navber/Navbar'
import PricingOptions from './componants/pricingOptions/PricingOptions'
import PricingCard from './componants/pricingCard/PricingCard'


const pricingPromice = fetch('pricingData.json').then(res => res.json())
function App() {
  
  return (
    <>
    
      
<header>
  <Navbar></Navbar>
           <DaisyNav></DaisyNav>
</header>  
<main>
  <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
   <PricingOptions pricingPromice={pricingPromice}></PricingOptions>
  </Suspense>
  <PricingCard></PricingCard>
  </main>        
    </>
  )
}

export default App
