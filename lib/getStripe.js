import { loadStripe } from '@stripe/stripe-js'

let stripePromise

const getStripe = () => { //這裡要取得stripe promise
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    }
    return stripePromise
}

export default getStripe