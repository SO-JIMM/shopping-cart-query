// import React from "react"
// import Container from "react-bootstrap/Container"
// import Col from "react-bootstrap/Col"
// import Row from "react-bootstrap/Row"
// import Button from "react-bootstrap/Button"
// import Form from "react-bootstrap/Form"
// import FormCheck from "react-bootstrap/FormCheck"
// import { Stack } from "react-bootstrap"
// const CheckoutPage = () => {
//   return (
//     <Container>
//       <div className='py-5 text-center'>
//         {/* <img
//           class='d-block mx-auto mb-4'
//           src='/docs/5.0/assets/brand/bootstrap-logo.svg'
//           alt=''
//           width='72'
//           height='57'
//         /> */}
//         <h2>Checkout form</h2>
//         <p className='lead'>
//           Below is an example form built entirely with Bootstrap’s form
//           controls. Each required form group has a validation state that can be
//           triggered by attempting to submit the form without completing it.
//         </p>
//       </div>
//       <Stack direction='horizontal' gap={5}>
//         <Col md={7} lg={8}>
//           <Form as={Row}>
//             <Form.Group as={Col} className='col-sm-6' controlId='firstName'>
//               <Form.Label>First Name</Form.Label>
//               <Form.Control type='text' placeholder='First Name' />
//             </Form.Group>
//             <Form.Group as={Col} className='col-sm-6' controlId='lastName'>
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control type='text' placeholder='Last Name' />
//             </Form.Group>
//             <Form.Group as={Col} className='col-12' controlId='emailAdress'>
//               <Form.Label>Email</Form.Label>
//               <Form.Control type='email' placeholder='john@example.com' />
//             </Form.Group>
//             <Form.Group as={Col} className='col-12' controlId='postalAdress'>
//               <Form.Label>Postal Address</Form.Label>
//               <Form.Control type='text' placeholder='123 Fake St' />
//             </Form.Group>
//             <Form.Group as={Col} className='col-md-5' controlId='country'>
//               <Form.Label>Country</Form.Label>
//               <Form.Select>
//                 <option value='Australia'>Australia</option>
//               </Form.Select>
//             </Form.Group>

//             <Form.Group
//               as={Col}
//               className='col-md-4'
//               controlId='stateTerritory'>
//               <Form.Label>State/Territory</Form.Label>
//               <Form.Select>
//                 <option value='VIC'>VIC</option>
//                 <option value='NSW'>NSW</option>
//                 <option value='QLD'>QLD</option>
//                 <option value='NT'>NT</option>
//                 <option value='TAS'>TAS</option>
//                 <option value='SA'>SA</option>
//                 <option value='WA'>WA</option>
//                 <option value='ACT'>ACT</option>
//               </Form.Select>
//             </Form.Group>

//             <Form.Group as={Col} className='col-md-3' controlId='postalCode'>
//               <Form.Label>Post Code</Form.Label>
//               <Form.Control type='text' placeholder='3212' />
//             </Form.Group>
//             <Form.Group controlId='cardType'>
//               <Form.Label>Payment Type</Form.Label>
//               <Form.Select>
//                 <option value='MasterCard'>MasterCard</option>
//                 <option value='VISA'>VISA</option>
//                 <option value='Amex'>Amex</option>
//               </Form.Select>
//             </Form.Group>
//             <Row>
//               <Form.Group controlId='nameOnCard' as={Col} className='col-md-6'>
//                 <Form.Label>Name On Card</Form.Label>
//                 <Form.Control type='text' />
//               </Form.Group>
//               <Form.Group controlId='cardNumber' as={Col} className='col-md-6'>
//                 <Form.Label>Card Number</Form.Label>
//                 <Form.Control type='text' placeholder='#### #### #### ####' />
//               </Form.Group>

//               <Row className='justify-content-center'>
//                 <Form.Group as={Col} className='col-md-3' controlId='cardExp'>
//                   <Form.Label>Card Expiry</Form.Label>
//                   <Form.Control type='text' />
//                 </Form.Group>
//                 <Form.Group controlId='ccvNumber' as={Col} className='col-md-3'>
//                   <Form.Label>CCV</Form.Label>
//                   <Form.Control type='text' />
//                 </Form.Group>
//               </Row>
//             </Row>
//           </Form>
//         </Col>
//         <Col md={5} lg={4}>
//           {/* <div class="col-md-7 col-lg-8">
//         <h4 class="mb-3">Billing address</h4>
//         <form class="needs-validation" novalidate="">
//           <div class="row g-3">
//             <div class="col-sm-6">
//               <label for="firstName" class="form-label">First name</label>
//               <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" data-ddg-inputtype="identities.firstName">
//               <div class="invalid-feedback">
//                 Valid first name is required.
//               </div>
//             </div>

//             <div class="col-sm-6">
//               <label for="lastName" class="form-label">Last name</label>
//               <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" data-ddg-inputtype="identities.lastName">
//               <div class="invalid-feedback">
//                 Valid last name is required.
//               </div>
//             </div>

//             <div class="col-12">
//               <label for="username" class="form-label">Username</label>
//               <div class="input-group has-validation">
//                 <span class="input-group-text">@</span>
//                 <input type="text" class="form-control" id="username" placeholder="Username" required="" data-ddg-inputtype="credentials.username">
//               <div class="invalid-feedback">
//                   Your username is required.
//                 </div>
//               </div>
//             </div>

//             <div class="col-12">
//               <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
//               <input type="email" class="form-control" id="email" placeholder="you@example.com" data-ddg-inputtype="identities.emailAddress" data-ddg-autofill="true">
//               <div class="invalid-feedback">
//                 Please enter a valid email address for shipping updates.
//               </div>
//             </div>

//             <div class="col-12">
//               <label for="address" class="form-label">Address</label>
//               <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" data-ddg-inputtype="identities.addressStreet">
//               <div class="invalid-feedback">
//                 Please enter your shipping address.
//               </div>
//             </div>

//             <div class="col-12">
//               <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
//               <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" data-ddg-inputtype="identities.addressStreet2">
//             </div>

//             <div class="col-md-5">
//               <label for="country" class="form-label">Country</label>
//               <select class="form-select" id="country" required="" data-ddg-inputtype="identities.addressCountryCode">
//                 <option value="">Choose...</option>
//                 <option>United States</option>
//               </select>
//               <div class="invalid-feedback">
//                 Please select a valid country.
//               </div>
//             </div>

//             <div class="col-md-4">
//               <label for="state" class="form-label">State</label>
//               <select class="form-select" id="state" required="" data-ddg-inputtype="identities.addressProvince">
//                 <option value="">Choose...</option>
//                 <option>California</option>
//               </select>
//               <div class="invalid-feedback">
//                 Please provide a valid state.
//               </div>
//             </div>

//             <div class="col-md-3">
//               <label for="zip" class="form-label">Zip</label>
//               <input type="text" class="form-control" id="zip" placeholder="" required="" data-ddg-inputtype="identities.addressPostalCode">
//               <div class="invalid-feedback">
//                 Zip code required.
//               </div>
//             </div>
//           </div>

//           <hr class="my-4">

//           <div class="form-check">
//             <input type="checkbox" class="form-check-input" id="same-address">
//             <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
//           </div>

//           <div class="form-check">
//             <input type="checkbox" class="form-check-input" id="save-info">
//             <label class="form-check-label" for="save-info">Save this information for next time</label>
//           </div>

//           <hr class="my-4">

//           <h4 class="mb-3">Payment</h4>

//           <div class="my-3">
//             <div class="form-check">
//               <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
//               <label class="form-check-label" for="credit">Credit card</label>
//             </div>
//             <div class="form-check">
//               <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="">
//               <label class="form-check-label" for="debit">Debit card</label>
//             </div>
//             <div class="form-check">
//               <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="">
//               <label class="form-check-label" for="paypal">PayPal</label>
//             </div>
//           </div>

//           <div class="row gy-3">
//             <div class="col-md-6">
//               <label for="cc-name" class="form-label">Name on card</label>
//               <input type="text" class="form-control" id="cc-name" placeholder="" required="" data-ddg-inputtype="creditCards.cardName">
//               <small class="text-muted">Full name as displayed on card</small>
//               <div class="invalid-feedback">
//                 Name on card is required
//               </div>
//             </div>

//             <div class="col-md-6">
//               <label for="cc-number" class="form-label">Credit card number</label>
//               <input type="text" class="form-control" id="cc-number" placeholder="" required="" data-ddg-inputtype="creditCards.cardNumber">
//               <div class="invalid-feedback">
//                 Credit card number is required
//               </div>
//             </div>

//             <div class="col-md-3">
//               <label for="cc-expiration" class="form-label">Expiration</label>
//               <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" data-ddg-inputtype="creditCards.expiration">
//               <div class="invalid-feedback">
//                 Expiration date required
//               </div>
//             </div>

//             <div class="col-md-3">
//               <label for="cc-cvv" class="form-label">CVV</label>
//               <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" data-ddg-inputtype="creditCards.cardSecurityCode">
//               <div class="invalid-feedback">
//                 Security code required
//               </div>
//             </div>
//           </div>

//           <hr class="my-4">

//           <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
//         </form>
//       </div> */}
//         </Col>
//       </Stack>
//     </Container>
//   )
// }

// export default CheckoutPage
