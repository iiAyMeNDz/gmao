// assets/js/auth.js

// بيانات تجريبية
const DEMO_USER = {
    name: 'مدير النظام',
    email: 'admin@demo.com',
    password: '123456'
};

// تهيئة المستخدمين في LocalStorage
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([DEMO_USER]));
}

// تسجيل الدخول
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        alert('❌ البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
});

// إنشاء حساب جديد
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('❌ كلمة المرور غير متطابقة');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        alert('❌ البريد الإلكتروني مستخدم مسبقاً');
        return;
    }
    
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('✅ تم إنشاء الحساب بنجاح');
    window.location.href = 'index.html';
});

// التحقق من تسجيل الدخول
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    const publicPages = ['index.html', 'register.html'];
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (!currentUser && !publicPages.includes(currentPage)) {
        window.location.href = 'index.html';
    }
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// تنفيذ التحقق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', checkAuth);
