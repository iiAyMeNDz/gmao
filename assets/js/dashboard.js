// assets/js/dashboard.js

// عرض اسم المستخدم
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && document.getElementById('userName')) {
        document.getElementById('userName').innerHTML = `👋 ${currentUser.name}`;
    }
    
    // تحميل آخر البلاغات
    loadRecentInterventions();
});

// بيانات تجريبية للبلاغات
const demoInterventions = [
    { machine: 'فرن حراري', issue: 'ارتفاع حرارة', priority: 'عاجل', priorityClass: 'status-danger', status: 'قيد الإصلاح', date: '2025-02-11' },
    { machine: 'ضاغط هواء', issue: 'تسريب زيت', priority: 'متوسط', priorityClass: 'status-warning', status: 'مفتوح', date: '2025-02-10' },
    { machine: 'خلاطة خرسانة', issue: 'اهتزاز غير طبيعي', priority: 'عاجل', priorityClass: 'status-danger', status: 'مفتوح', date: '2025-02-09' },
    { machine: 'سير ناقل', issue: 'انزلاق الحزام', priority: 'منخفض', priorityClass: 'status-active', status: 'منتهي', date: '2025-02-08' }
];

function loadRecentInterventions() {
    const tbody = document.getElementById('recentInterventions');
    if (!tbody) return;
    
    let html = '';
    demoInterventions.forEach(item => {
        html += `<tr>
            <td>${item.machine}</td>
            <td>${item.issue}</td>
            <td><span class="status-badge ${item.priorityClass}">${item.priority}</span></td>
            <td>${item.status}</td>
            <td>${item.date}</td>
        </tr>`;
    });
    tbody.innerHTML = html;
}
