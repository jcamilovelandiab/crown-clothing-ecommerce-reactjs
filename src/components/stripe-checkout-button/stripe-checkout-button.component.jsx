import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51InAWXCUl4O61q7NjnRtrn2Eyncx7gZY0WLGMUnNWkq4jT95WTB4lUfYehdfn5Joc7pW8riOke9obF7GZbeE6lDX00oeQ8Hi95';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton;