document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const container = document.querySelector('.container');
    const keyInput = document.getElementById('keyInput');
    const submitBtn = document.getElementById('submitBtn');
    const resultMessage = document.getElementById('resultMessage');
    const usedKeysList = document.getElementById('usedKeysList');
    
    const validKeys = {
            "OCwA3vrviAG03NpTNnqhxM7FT7YwQCEjthfh0sLh": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/NewCum%20CFG.rar",
            name: "CFG by NewCum"
        },
            "s353442365423423635345443523424235357648987089096563241231256756978986573443": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/Fast..cheat.rar",
            name: "Private-key | Fast-injection | Premium | By Zexus"
        },
            "HxV731tdDkc4ADKvAsCSTxNGPSBpzSOuVlwLUwHQ": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/NewCum%20CFG.rar",
            name: "CFG by NewCum"
        },  
            "Epj4L2eLDGu4igg6N8k2Ot1oZx0O9eEuTRhTH7EN": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/NewCum%20CFG.rar",
            name: "CFG by NewCum"
        },  
            "bC3R6t9OVZHok7vJdb4AQl1MHy78piRsU0VJEl1d": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/NewCum%20CFG.rar",
            name: "CFG by NewCum"
        },  
            "qNHDmAxfRR3OyUv3tc6jO5IiueKV4bE6wJ7irO0Ypng3OrLi1gSI0XX57Sd0sI8Pm": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/Zexus,%20LeakMe%20Plz.suck.rar",
            name: "Leak Accounts By Zexus | UnderFuck"
        },  
            "nRfWo2nZdnN52Vm4AY85pEUOiaYA0zd6QPjEEIQs": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/NewCum%20CFG.rar",
            name: "CFG by NewCum"
        },  
            "RebellionOnTop | ZexusSetts.gg": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/ZexRebellion.rar",
            name: "Rebellion Setts by Zexus"
        },  
            "Wa9CxHmoUZF4Hr2TOeCGTo8IW": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/tpFhkMwp0wWVQsm8D0roaPyNpH.rar",
            name: "Inselium Skeet | CJoktoEDImk0vj0IJT"
        },  
            "idzM7GZQNG0t2h8JShY0MvKSTfkSTyPVFo6au4hh": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/NewCum%20CFG.rar",
            name: "CFG by NewCum"
        },
            "bFivx9YTqCzQ2CPsLpkB1JrTNTrQwTRD2M09A1yVosJm1TKY4UlyCD2EEQCvQZrLkiyvH5ieN8ODjbgseTpH86Vt7Un0OoztdSjQTScSUVjvFwdPZuoibUYwpS4wxYasx7l0BayccgcOs0NqawAvHM8cbLICBN6sbjb00Rn2MFzKbncITpTlfOzCiPjGhO1BX3G6HljTWvK42rYRVSgX8ChQuFRN5WlfR2fGofDgFik12ulJv1dBCQ7IGJftB6r9o4vGzVYOU8mLYepm5pJV5Y3Dg6MTACkakT7fLkPvhr1vWsoTH5uqQnmWv8c05UHwmRSEwDMT2Qst5uZngxHvrKX5a5fMB5iIQ7HJOaXdarQrJvzmvZjZ0jNiboglMVwVLtSuDjxVwqqA6ioe4kTHGJn38YCa8TQYazWFjJpwG9CBDbc6bBGwoNCQvX2fibXgkF": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/Setts%20By%20Zexus%20Dad%20!%20Premium.rar",
            name: "Setts By Zexus Dad ! Premium + Sex"
        },
            "hrKcqLwktvmpxomdJ0OTxkWKVowHtbtgqPastnP2eHyvrQeUFS4Pu4k7ope61w5aHnMUjUMMDSLrh1gFxWH2VVpAMd": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/Inselium.rar",
            name: "Inselium.lol | invite"
        },
            "6Q0iZykOi7tbLYTdxM8oESvbRPiymJ5aQB1BfP7ezrS6fJSuViGG89ROG8n3xWFogg9jqgEQN93HUcyajapfuwtQgopIgJy5Ca834y2DNTxEMkwy5XXelLFx3QgDL0OeGbXy0cxOly6SCJNOlAgJsFZB3XXhPhAurDHD37HHP79qjSGf13XHoAqU7SIqor3r5imbU3zkpGf0CkJJAQadI8Sbzbbq1cpT7h1rkKGI2Jyx6XTiePBWUhHGgRhxKXKymyxJk3lKXrDrNUfAU5OOrEYuNZu9F3SU57o1YaUT2ptX3d6rBVYblQCk7eBctL71qx924Ptb5WgFhL8aHGJBERrIdsWqMMMT0gXRmjwG7E9yrhCGVc6qzZTOGjGhQ0FjYppqHYJteCbubo1RYtaM8LktymVs3AKrWXjyaV85cDBpYMnmJbVnoCXtt1iSKar01MGmFU6T3W1Sj0tjGKpXfDzte3Tuy1YMMeuNXVmcyRiigSC7sxVq6n0qcWa7j1DBE5vuuS7SzqT6lv6bsesZDsigh9xpcXTzMf1EzgYjzIWZdBsQZvi27rQIXUQH4t8wPeakUb2oZGltblFRPjHWDY8qtEdmgBO3n1QGq4w0vypXEvWeULG0o2itwxPFBpDyPzOPw1VlGax9bwpM37hlPKPNh90ILgpJ4f39B9NKsGiJmuogI3Zt40Y9EpceH5DDEvJBsrsevvdB1NkwT94OhX1YuZJj47bUyFsoCRTHMuCuYgPpMhkq1XDqYWWBQddUaw5fKxI42dPa8Svol8h6lR3KocAfUJMR0yvhEblNUuBUv1jSLKYWJvXArCVWmSbYWr1ECHel5YXTiidJIldW7WiFeni80MmTs3Ios70JCpTzchtkTDFR7iYEMrKh1vTwY6S9IYJU80nRUlSNhAVBH8qeP9KZubOye3pHzK4oHzeMp8D7U8AO6sJIxX3g2oV76jkm1BJNh": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/Inselium.rar",
            name: "Inselium.lol | invite 2"
        },
            "t9INtbdrQHdlyObF2mQRDKux3qobo4Onhp6tvGC": {
            url: "https://github.com/ZexusBerry/GSST3432423/raw/refs/heads/main/AngelWings-Setts%20By%20Zexus%20!%20Defensive.rar",
            name: "AngelWings-Setts.Defensive | By Zexus"
        }
    };
    
    let usedKeys = JSON.parse(localStorage.getItem('usedKeys')) || {};
    
    updateUsedKeysList();
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        container.classList.remove('hidden');
        container.style.opacity = '1';
        container.style.visibility = 'visible';
    }, 2500);
    
    submitBtn.addEventListener('click', function() {
        const key = keyInput.value.trim();
        
        resultMessage.className = 'result-message';
        resultMessage.textContent = '';
        
        if (!key) {
            showMessage('Please enter key', 'error');
            animateShake(keyInput);
            return;
        }
        
        if (usedKeys[key]) {
            showMessage('This key already redeemed.', 'warning');
            animateError(keyInput);
            return;
        }
        
        if (validKeys[key]) {
            usedKeys[key] = {
                redeemed: true,
                date: new Date().toLocaleString(),
                name: validKeys[key].name
            };
            
            // Сохранить в localStorage
            localStorage.setItem('usedKeys', JSON.stringify(usedKeys));
            
            // Обновить список использованных ключей
            updateUsedKeysList();
            
            showMessage('Valid Key!', 'success');
            animateSuccess(keyInput);
            
            // Перенаправление по уникальной ссылке
            setTimeout(() => {
                window.location.href = validKeys[key].url;
            }, 1500);
        } else {
            showMessage('Wrong key, please enter valid key.', 'error');
            animateError(keyInput);
        }
    });
    
    // Обновить список использованных ключей
    function updateUsedKeysList() {
        usedKeysList.innerHTML = '';
        
        if (Object.keys(usedKeys).length === 0) {
            const emptyMsg = document.createElement('div');
            emptyMsg.className = 'used-key';
            emptyMsg.textContent = 'Нет использованных ключей';
            usedKeysList.appendChild(emptyMsg);
            return;
        }
        
        for (const [key, data] of Object.entries(usedKeys)) {
            const keyElement = document.createElement('div');
            keyElement.className = `used-key ${data.redeemed ? 'redeemed' : ''}`;
            
            keyElement.innerHTML = `
                <span class="key-value">${key} (${data.name})</span>
                <span class="key-status">${data.redeemed ? 'Already redeemed' : 'Active'}</span>
            `;
            
            usedKeysList.appendChild(keyElement);
        }
    }
    
    // Показать сообщение
    function showMessage(text, type) {
        resultMessage.textContent = text;
        resultMessage.classList.add(type);
        
        // Автоматическое скрытие сообщения через 5 секунд
        setTimeout(() => {
            resultMessage.classList.remove(type);
            resultMessage.textContent = '';
        }, 5000);
    }
    
    // Анимация ошибки (тряска)
    function animateShake(element) {
        element.style.animation = 'shake 0.5s';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }
    
    // Анимация успеха (зеленая подсветка)
    function animateSuccess(element) {
        element.style.boxShadow = '0 0 0 2px rgba(46, 213, 115, 0.5)';
        setTimeout(() => {
            element.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }, 1500);
    }
    
    // Анимация ошибки (красная подсветка)
    function animateError(element) {
        element.style.boxShadow = '0 0 0 2px rgba(255, 71, 87, 0.5)';
        setTimeout(() => {
            element.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }, 1500);
    }
    
    // Добавляем анимацию тряски в CSS динамически
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
    
    // Анимация при фокусе на поле ввода
    keyInput.addEventListener('focus', function() {
        const icon = document.querySelector('.input-icon i');
        icon.style.transform = 'translateY(-48%) scale(1.2)';
        icon.style.color = '#8e2de2';
    });
    
    keyInput.addEventListener('blur', function() {
        const icon = document.querySelector('.input-icon i');
        icon.style.transform = 'translateY(-48%)';
        icon.style.color = 'rgba(255, 255, 255, 0.7)';
    });
});
