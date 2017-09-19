import {getURLDomainName} from '../utils/util';

describe('getURLDomainName function', () => {
	it('handles basic url string', () => {
		expect(getURLDomainName('https://domain.com'))
			.toEqual('domain.com');
	});

	it('handles url with a subdomain', () => {
		expect(getURLDomainName('https://sub.domain.com'))
			.toEqual('sub.domain.com');
	});

	it('handles url with multiple parameters', () => {
		expect(getURLDomainName('https://domain.com/extra/pages?a=testing&b=another'))
			.toEqual('domain.com');
	});

	it('handles url with file type', () => {
		expect(getURLDomainName('http://domain.com/file.pdf'))
			.toEqual('domain.com');
	});

	it('handles url without http', () => {
		expect(getURLDomainName('domain.com'))
			.toEqual('domain.com');
	});
});
