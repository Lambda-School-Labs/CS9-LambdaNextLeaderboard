// const configureStripe = require('stripe');
require("dotenv").config();
const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? process.env.STRIPE_SK_LIVE
    : process.env.STRIPE_SK_TEST;

const stripe = require('stripe')(STRIPE_SECRET_KEY);

module.exports = stripe;
