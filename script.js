
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            document.getElementById('crypto-data').innerHTML = `
                <p>Bitcoin Price: $${data.bitcoin.usd}</p>
                <p>Ethereum Price: $${data.ethereum.usd}</p>
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
});
