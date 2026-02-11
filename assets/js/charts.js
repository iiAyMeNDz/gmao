// assets/js/charts.js

// بيانات تجريبية
const demoData = {
    machineStatus: {
        labels: ['نشط', 'صيانة', 'عطل'],
        values: [18, 3, 3],
        colors: ['#8b5cf6', '#f59e0b', '#ef4444']
    },
    weeklyIssues: {
        labels: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
        values: [5, 8, 12, 7, 9, 4, 2]
    }
};

// تخزين الكائنات لتحديثها
let charts = {};

// دالة إنشاء الرسم البياني
function createChart(chartId, type, data) {
    const ctx = document.getElementById(chartId)?.getContext('2d');
    if (!ctx) return;
    
    // تدمير الرسم السابق إذا وجد
    if (charts[chartId]) {
        charts[chartId].destroy();
    }
    
    let chartData = {};
    
    if (chartId === 'machineStatusChart') {
        chartData = {
            labels: demoData.machineStatus.labels,
            datasets: [{
                data: demoData.machineStatus.values,
                backgroundColor: demoData.machineStatus.colors,
                borderColor: '#111827',
                borderWidth: 3,
                borderRadius: type === 'bar' ? 8 : 0
            }]
        };
    } else if (chartId === 'weeklyIssuesChart') {
        chartData = {
            labels: demoData.weeklyIssues.labels,
            datasets: [{
                label: 'عدد الأعطال',
                data: demoData.weeklyIssues.values,
                backgroundColor: '#8b5cf6',
                borderColor: '#a78bfa',
                borderWidth: 3,
                tension: 0.4,
                fill: type === 'line' ? false : true
            }]
        };
    }
    
    const config = {
        type: type,
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: type === 'doughnut',
                    position: 'bottom',
                    labels: { color: '#e5e7eb' }
                }
            },
            scales: type !== 'doughnut' ? {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(139, 92, 246, 0.1)' },
                    ticks: { color: '#9ca3af' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#9ca3af' }
                }
            } : {}
        }
    };
    
    charts[chartId] = new Chart(ctx, config);
}

// تبديل نوع الرسم البياني
document.querySelectorAll('.chart-type-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const chartId = this.dataset.chart === '1' ? 'machineStatusChart' : 'weeklyIssuesChart';
        const type = this.dataset.type;
        
        // تحديث الحالة النشطة
        this.parentElement.querySelectorAll('.chart-type-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // إعادة إنشاء الرسم
        createChart(chartId, type);
    });
});

// تهيئة الرسوم البيانية
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('machineStatusChart')) {
        createChart('machineStatusChart', 'doughnut');
    }
    if (document.getElementById('weeklyIssuesChart')) {
        createChart('weeklyIssuesChart', 'bar');
    }
});
