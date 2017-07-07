import { Selector } from 'testcafe'

fixture('Ip Table using class')
    .page('./index.html')

test('List table', async t => {

    const firstIp = await Selector('table tbody tr:first-of-type td:first-of-type')
    const lastIp = await Selector('table tbody tr:last-of-type td:first-of-type')
    const lastMask = await Selector('table tbody tr:last-of-type td:last-of-type')

    await t
           .expect(firstIp.innerText).eql('192.168.0.10', 'First IP is not 192.168.0.10')
           .expect(lastIp.innerText).eql('192.168.0.15', 'Last IP is not 192.168.0.15')
           .expect(lastMask.innerText).eql('255.255.255.0', 'Last Mask is not 255.255.255.0')
})
