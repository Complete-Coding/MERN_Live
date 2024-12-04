const exchangeRateService = require('../services/exchangeRateService');

exports.convertCurrency = async (req, res, next) => {
  try {
    const { amount, sourceCurrency, targetCurrency } = req.body;

    if (!amount || !sourceCurrency || !targetCurrency) {
      return res.status(400).json({ 
        error: 'Missing required parameters' 
      });
    }

    const convertedAmount = exchangeRateService.convertCurrency(
      parseFloat(amount),
      sourceCurrency.toUpperCase(),
      targetCurrency.toUpperCase()
    );

    // Add 1 second delay before sending response
    //await new Promise(resolve => setTimeout(resolve, 1000));

    res.json({
      success: true,
      result: {
        amount: parseFloat(amount),
        sourceCurrency,
        targetCurrency,
        convertedAmount: Number(convertedAmount.toFixed(2))
      }
    });

  } catch (error) {
    next(error);
  }
};
