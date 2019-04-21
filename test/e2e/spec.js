import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://piecioshka.pl/blog/`;


test('My first test', async t => {
    await t
        .click(Selector('a').withText('Kontakt'))
        .expect(Selector('h2').innerText)
        .eql('Kontakt');
});
