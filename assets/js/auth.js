const DEMO_USERS = [
    {
        id: 1,
        name: 'أيمن المدير',
        nameEn: 'Aymen Admin',
        email: 'admin@demo.com',
        password: '123456',
        role: 'مدير النظام',
        roleEn: 'Administrator',
        avatar: '👑',
        theme: 'dark'
    },
    {
        id: 2,
        name: 'أحمد الفني',
        nameEn: 'Ahmed Technician',
        email: 'tech@demo.com',
        password: '123456',
        role: 'فني صيانة',
        roleEn: 'Technician',
        avatar: '🔧',
        theme: 'dark'
    },
    {
        id: 3,
        name: 'سالم مدير الصيانة',
        nameEn: 'Salem Manager',
        email: 'manager@demo.com',
        password: '123456',
        role: 'مدير صيانة',
        roleEn: 'Maintenance Manager',
        avatar: '👨‍💼',
        theme: 'dark'
    }
];

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(DEMO_USERS));
}

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify({
            id: user.id,
            name: user.name,
            nameEn: user.nameEn,
            email: user.email,
            role: user.role,
            roleEn: user.roleEn,
            avatar: user.avatar,
            loginTime: new Date().toISOString()
        }));
        
        window.location.href = 'dashboard.html';
    } else {
        alert(currentLang === 'ar' ? '❌ البريد الإلكتروني أو كلمة المرور غير صحيحة' : '❌ Invalid email or password');
    }
});

function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    const publicPages = ['index.html', 'register.html'];
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (!currentUser && !publicPages.includes(currentPage)) {
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function getUserName() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return '';
    return currentLang === 'ar' ? user.name : user.nameEn;
}

function getUserRole() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return '';
    return currentLang === 'ar' ? user.role : user.roleEn;
}

document.addEventListener('DOMContentLoaded', checkAuth);
