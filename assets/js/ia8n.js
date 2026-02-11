const translations = {
    ar: {
        appName: 'Aymen GMAO',
        dashboard: 'لوحة التحكم',
        machines: 'الآلات',
        interventions: 'البلاغات',
        preventive: 'الصيانة الوقائية',
        spareParts: 'قطع الغيار',
        technicians: 'الفنيين',
        sites: 'المواقع',
        suppliers: 'الموردين',
        reports: 'التقارير',
        settings: 'الإعدادات',
        logout: 'تسجيل خروج',
        login: 'تسجيل الدخول',
        totalMachines: 'إجمالي الآلات',
        activeMachines: 'آلات نشطة',
        brokenMachines: 'أعطال حالية',
        maintenanceRate: 'نسبة الجاهزية',
        welcomeBack: 'مرحباً بعودتك',
        addMachine: 'إضافة آلة جديدة',
        machineName: 'اسم الآلة',
        site: 'الموقع',
        status: 'الحالة',
        lastMaintenance: 'آخر صيانة',
        nextMaintenance: 'الصيانة القادمة',
        efficiency: 'الكفاءة',
        actions: 'الإجراءات',
        active: 'نشط',
        broken: 'عطل',
        maintenance: 'صيانة',
        urgent: 'عاجل',
        medium: 'متوسط',
        low: 'منخفض',
        confirmDelete: 'هل أنت متأكد من الحذف؟',
        success: 'تم بنجاح',
        error: 'حدث خطأ',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        emailPlaceholder: 'admin@aymengmao.com',
        passwordPlaceholder: '••••••••'
    },
    en: {
        appName: 'Aymen GMAO',
        dashboard: 'Dashboard',
        machines: 'Machines',
        interventions: 'Interventions',
        preventive: 'Preventive',
        spareParts: 'Spare Parts',
        technicians: 'Technicians',
        sites: 'Sites',
        suppliers: 'Suppliers',
        reports: 'Reports',
        settings: 'Settings',
        logout: 'Logout',
        login: 'Login',
        totalMachines: 'Total Machines',
        activeMachines: 'Active Machines',
        brokenMachines: 'Current Issues',
        maintenanceRate: 'Readiness Rate',
        welcomeBack: 'Welcome Back',
        addMachine: 'Add Machine',
        machineName: 'Machine Name',
        site: 'Site',
        status: 'Status',
        lastMaintenance: 'Last Maintenance',
        nextMaintenance: 'Next Maintenance',
        efficiency: 'Efficiency',
        actions: 'Actions',
        active: 'Active',
        broken: 'Broken',
        maintenance: 'Maintenance',
        urgent: 'Urgent',
        medium: 'Medium',
        low: 'Low',
        confirmDelete: 'Confirm delete?',
        success: 'Success',
        error: 'Error',
        email: 'Email',
        password: 'Password',
        emailPlaceholder: 'admin@aymengmao.com',
        passwordPlaceholder: '••••••••'
    }
};

let currentLang = localStorage.getItem('language') || 'ar';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

function t(key) {
    return translations[currentLang][key] || key;
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});
