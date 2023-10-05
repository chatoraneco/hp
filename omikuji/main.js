'use strict';

{
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => {
        const results = ['大吉なのだ','中吉なのだ','凶なのだ','小吉なのだ','末吉なのだ','吉なのだ','大凶なのだ'];
        const n = Math.floor(Math.random() * results.length);

        result.textContent = results[n];

       
        
    })
}