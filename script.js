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
