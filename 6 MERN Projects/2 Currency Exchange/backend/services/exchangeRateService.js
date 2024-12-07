const axios = require('axios');

class ExchangeRateService {
  constructor() {
    this.rates = null;
    this.lastUpdated = null;
    this.API_KEY = '1bb37bed270a01f5cab65000';
    this.BASE_URL = 'https://v6.exchangerate-api.com/v6';
  }

  async initializeRates() {
    try {
      const response = await axios.get(`${this.BASE_URL}/${this.API_KEY}/latest/INR`);
      this.rates = response.data.conversion_rates;
      this.lastUpdated = new Date();
      console.log('Exchange rates initialized successfully');
    } catch (error) {
      console.error('Error initializing exchange rates:', error.message);
      throw error;
    }
  }

  convertCurrency(amount, sourceCurrency, targetCurrency) {
    if (!this.rates) {
      throw new Error('Exchange rates not initialized');
    }

    // Get rates relative to INR
    const sourceRate = this.rates[sourceCurrency];
    const targetRate = this.rates[targetCurrency];

    if (!sourceRate || !targetRate) {
      throw new Error('Invalid currency code');
    }

    // Convert to target currency
    return (amount / sourceRate) * targetRate;
  }
}

module.exports = new ExchangeRateService(); 