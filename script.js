// Nunjucksの設定
nunjucks.configure({ autoescape: false });

// DOM要素の取得
const templateInput = document.getElementById('template-input');
const dataInput = document.getElementById('data-input');
const output = document.getElementById('output');
const errorDisplay = document.getElementById('error-display');
const renderBtn = document.getElementById('render-btn');
const clearBtn = document.getElementById('clear-btn');

// テンプレートをレンダリングする関数
function renderTemplate() {
    try {
        // エラー表示をクリア
        errorDisplay.style.display = 'none';
        errorDisplay.textContent = '';
        
        // 入力値を取得
        const templateContent = templateInput.value;
        const dataContent = dataInput.value;
        
        // テンプレートが空の場合の処理
        if (!templateContent.trim()) {
            output.textContent = 'Please enter a template';
            return;
        }
        
        // JSONデータをパース
        let data = {};
        if (dataContent.trim()) {
            try {
                data = JSON.parse(dataContent);
            } catch (jsonError) {
                throw new Error(`Invalid JSON format: ${jsonError.message}`);
            }
        }
        
        // Nunjucksでテンプレートをレンダリング
        const rendered = nunjucks.renderString(templateContent, data);
        output.textContent = rendered;
        
    } catch (error) {
        // エラーを表示
        errorDisplay.textContent = `Error: ${error.message}`;
        errorDisplay.style.display = 'block';
        output.textContent = 'Rendering error occurred';
    }
}

// 入力フィールドをクリアする関数
function clearInputs() {
    templateInput.value = '';
    dataInput.value = '';
    output.textContent = 'Press the render button to process your template';
    errorDisplay.style.display = 'none';
    errorDisplay.textContent = '';
}

// サンプルテンプレートを設定する関数
function loadSampleTemplate() {
    templateInput.value = `Hello {{ name }}!
{% for item in items %}
- {{ item }}
{% endfor %}

{% if user %}
Welcome back, {{ user.name }}!
Your role: {{ user.role | upper }}
{% else %}
Please log in.
{% endif %}`;

    dataInput.value = JSON.stringify({
        "name": "World",
        "items": ["Apple", "Banana", "Cherry"],
        "user": {
            "name": "John Doe",
            "role": "administrator"
        }
    }, null, 2);
}

// リアルタイムレンダリング機能（オプション）
function enableLivePreview() {
    let timeoutId;
    
    function delayedRender() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(renderTemplate, 500);
    }
    
    templateInput.addEventListener('input', delayedRender);
    dataInput.addEventListener('input', delayedRender);
}

// イベントリスナーの設定
renderBtn.addEventListener('click', renderTemplate);
clearBtn.addEventListener('click', clearInputs);

// Enterキーでのレンダリング（Ctrl+Enterの組み合わせ）
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault();
        renderTemplate();
    }
});

// ページ読み込み時にサンプルテンプレートを設定
document.addEventListener('DOMContentLoaded', function() {
    loadSampleTemplate();
    renderTemplate(); // 初期レンダリング
});

// 追加のJinjaフィルター（Nunjucksで対応していないものを補完）
nunjucks.addFilter('length', function(arr) {
    return arr ? arr.length : 0;
});

nunjucks.addFilter('first', function(arr) {
    return arr && arr.length > 0 ? arr[0] : '';
});

nunjucks.addFilter('last', function(arr) {
    return arr && arr.length > 0 ? arr[arr.length - 1] : '';
});

nunjucks.addFilter('join', function(arr, separator = ',') {
    return arr ? arr.join(separator) : '';
});

nunjucks.addFilter('replace', function(str, old_str, new_str) {
    return str ? str.replace(new RegExp(old_str, 'g'), new_str) : '';
});

// デバッグ用の情報表示
function showDebugInfo() {
    console.log('Jinja Pad Debug Info:');
    console.log('- Nunjucks Version:', nunjucks.VERSION || 'Unknown');
    console.log('- Available Filters:', Object.keys(nunjucks.filters || {}));
}