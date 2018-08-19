import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://piecioshka.pl/blog`;


test('My first test', async t => {
    await t
        .click(Selector('a').withText('KONTAKT'))
        .expect(Selector('h2').innerText)
        .eql('Kontakt');
});
