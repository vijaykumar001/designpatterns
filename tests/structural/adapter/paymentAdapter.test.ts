import { PaymentAdapter, NewPaymentProcessor, LegacyPaymentProcessor } from '../../../src/patterns/structural/adapter/index';
/*
* PaymentAdapter Test
*
* This test case tests the PaymentAdapter class.
* It tests the pay method of the PaymentAdapter class.
* It uses the NewPaymentProcessor class to test the pay method.
* It uses the LegacyPaymentProcessor class to test the pay method.
*/
describe('PaymentAdapter', () => {
    it('should process payment using the new payment processor', () => {
        const newProcessor = new NewPaymentProcessor();
        const adapter = new PaymentAdapter(newProcessor);
        const consoleSpy = jest.spyOn(console, 'log');
        adapter.pay(150);
        expect(consoleSpy).toHaveBeenCalledWith('Processing payment of $150 through the new payment system.');
        consoleSpy.mockRestore();
    });

    it('should process payment using the legacy payment processor', () => {
        const legacyPaymentProcessor = new LegacyPaymentProcessor();
        const consoleSpy = jest.spyOn(console, 'log');
        legacyPaymentProcessor.pay(100);
        expect(consoleSpy).toHaveBeenCalledWith('Processing payment of $100 through the legacy system.');
        consoleSpy.mockRestore();
    });
});