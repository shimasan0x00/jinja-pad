# Jinja Pad テストテンプレート集

## 基本的な変数展開
```jinja
Hello {{ name }}!
Your age is {{ age }}.
```

**データ:**
```json
{
  "name": "Alice",
  "age": 25
}
```

## ループ処理
```jinja
Shopping List:
{% for item in items %}
- {{ item.name }}: ${{ item.price }}
{% endfor %}

Total items: {{ items | length }}
```

**データ:**
```json
{
  "items": [
    {"name": "Apple", "price": 1.5},
    {"name": "Banana", "price": 0.8},
    {"name": "Cherry", "price": 3.2}
  ]
}
```

## 条件分岐
```jinja
{% if user.is_admin %}
Welcome, Admin {{ user.name }}!
You have full access.
{% elif user.is_member %}
Hello {{ user.name }}, you are a member.
{% else %}
Please sign up to access this content.
{% endif %}
```

**データ:**
```json
{
  "user": {
    "name": "John",
    "is_admin": true,
    "is_member": false
  }
}
```

## フィルター使用例
```jinja
Original: {{ message }}
Upper: {{ message | upper }}
Lower: {{ message | lower }}
Length: {{ message | length }}
First 10 chars: {{ message[:10] }}
```

**データ:**
```json
{
  "message": "Hello, Jinja Template Engine!"
}
```

## ネストしたオブジェクト
```jinja
Company: {{ company.name }}
Address: {{ company.address.street }}, {{ company.address.city }}

Employees:
{% for employee in company.employees %}
- {{ employee.name }} ({{ employee.position }})
  Email: {{ employee.contact.email }}
{% endfor %}
```

**データ:**
```json
{
  "company": {
    "name": "Tech Corp",
    "address": {
      "street": "123 Main St",
      "city": "Tokyo"
    },
    "employees": [
      {
        "name": "Alice Johnson",
        "position": "Developer",
        "contact": {
          "email": "alice@techcorp.com"
        }
      },
      {
        "name": "Bob Smith",
        "position": "Designer",
        "contact": {
          "email": "bob@techcorp.com"
        }
      }
    ]
  }
}
```

## 数値計算とフィルター
```jinja
Numbers: {{ numbers | join(', ') }}
Sum: {{ numbers | sum }}
Max: {{ numbers | max }}
Min: {{ numbers | min }}
Average: {{ (numbers | sum) / (numbers | length) }}
```

**データ:**
```json
{
  "numbers": [10, 25, 5, 30, 15]
}
```

## 日付と文字列操作
```jinja
Name: {{ user.name }}
Reversed: {{ user.name | reverse }}
First character: {{ user.name | first }}
Last character: {{ user.name | last }}
Replace 'o' with '0': {{ user.name | replace('o', '0') }}

Tags: {{ tags | join(' | ') }}
```

**データ:**
```json
{
  "user": {
    "name": "John Doe"
  },
  "tags": ["javascript", "python", "web-development"]
}
```