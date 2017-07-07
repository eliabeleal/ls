import { Selector } from 'testcafe'

fixture('Ip Table using event')
    .page('./index.html')

test('Add One Address', async t => {

    await t
        .typeText('#ip-input', '10.0.1.1')
        .typeText('#mask-input', '255.255.255.0')
        .click('#add-button')

    const lastIp = await Selector('table tbody tr:last-of-type td:first-of-type')
    const lastMask = await Selector('table tbody tr:last-of-type td:last-of-type')

    await t
           .expect(lastIp.innerText).eql('10.0.1.1', 'Last IP is not 10.0.1.1')
           .expect(lastMask.innerText).eql('255.255.255.0', 'Last Mask is not 255.255.255.0')
})

test.skip('Add two Address', async t => {

    await t
        .typeText('#ip-input', '10.0.1.1')
        .typeText('#mask-input', '255.255.255.0')
        .click('#add-button')

    const firstIp = await Selector('table tbody tr:last-of-type td:first-of-type')
    const firstMask = await Selector('table tbody tr:last-of-type td:last-of-type')
    const ipInput = await Selector('#ip')
    const maskInput = await Selector('#mask')

    await t
           .expect(firstIp.innerText).eql('10.0.1.1', 'First IP is not 10.0.1.1')
           .expect(firstMask.innerText).eql('255.255.255.0', 'First Mask is not 255.255.255.0')
           .expect(ipInput.innerText).eql('', 'IP Field is empty')
           .expect(maskInput.innerText).eql('', 'Mask Field is empty')

    await t
        .typeText('#ip-input', '192.168.0.1')
        .typeText('#mask-input', '255.255.255.0')
        .click('#add-button')

    const lastIp = await Selector('table tbody tr:last-of-type td:first-of-type')
    const lastMask = await Selector('table tbody tr:last-of-type td:last-of-type')

    await t
           .expect(lastIp.innerText).eql('192.168.0.1', 'Last IP is not 192.168.0.1')
           .expect(lastMask.innerText).eql('255.255.255.0', 'Last Mask is not 255.255.255.0')
})
