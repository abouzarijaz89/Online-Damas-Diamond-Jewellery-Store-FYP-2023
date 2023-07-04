import React from 'react';

const HelpScreen = () => {
  return (
    <section className="help-section">
<div className="container">
  <h1 className="section-title textalignfrom">Help</h1>

  <div className="help-item">
    <h2 id="about_info" className="item-title textalignfrom" >How do I create an account?</h2>
    <p className="item-description textalignfrom" id="about_info">To create an account, follow these steps:</p>
    <ol className="item-steps" id="about_info">
      <li>Go to the website homepage.</li>
      <li>Click on the "Sign Up" button.</li>
      <li>Fill out the registration form with your details.</li>
      <li>Click on the "Create Account" button to complete the process.</li>
    </ol>
  </div>
  <div className="help-item">
    <h2 className="item-title textalignfrom">How do I place an order?</h2>
    <p className="item-description" id="about_info">To place an order, please follow these instructions:</p>
    <ol className="item-steps" id="about_info">
      <li>Browse the available products and select the one you want.</li>
      <li>Add the item to your shopping cart.</li>
      <li>Review your cart and proceed to checkout.</li>
      <li>Provide the required shipping and payment information.</li>
      <li>Confirm your order to complete the purchase.</li>
    </ol>
  </div>
</div>
</section>
  );
};

export default HelpScreen;


