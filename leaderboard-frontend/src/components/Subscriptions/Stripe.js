const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_STRIPE_PK_LIVE
  : process.env.REACT_APP_STRIPE_PK_TEST;
  
export default STRIPE_PUBLISHABLE;
