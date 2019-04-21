import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://piecioshka.pl/blog/`;


test('My first test', async t => {
    await t
        .expect(Selector('h1').innerText).eql('Piotr Kowalski');
});
