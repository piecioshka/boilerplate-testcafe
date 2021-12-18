import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://piecioshka.pl/blog/`;


test('Is header contains correct text?', async t => {
    await t
        .expect(Selector('h1').innerText).eql('Blog');
});
