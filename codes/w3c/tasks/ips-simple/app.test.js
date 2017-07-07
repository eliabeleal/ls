import { Selector } from 'testcafe'

fixture('Simple Ip Table')
    .page('./index.html')

test('List table', async t => {

    const firstIp = await Selector('table tbody tr:first-of-type td:first-of-type')
    const lastMask = await Selector('table tbody tr:last-of-type td:last-of-type')

    await t
           .expect(firstIp.innerText).eql('192.168.0.1')
           .expect(lastMask.innerText).eql('255.255.255.0')
})
