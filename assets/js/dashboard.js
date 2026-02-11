const factoryStats = {
    totalMachines: 24,
    activeMachines: 18,
    brokenMachines: 3,
    maintenanceRate: 92
};

const recentInterventions = [
    { machine: 'فرن حراري', issue: 'ارتفاع حرارة', priority: 'urgent', status: 'قيد الإصلاح', date: '2025-02-11' },
    { machine: 'ضاغط هواء', issue: 'تسريب زيت', priority: 'medium', status: 'مفتوح', date: '2025-02-10' },
    { machine: 'خلاطة خرسانة', issue: 'اهتزاز غير طبيعي', priority: 'urgent', status: 'مفتوح', date: '2025-02-09' }
];

document.addEventListener('DOMContentLoaded', function() {
    updateDashboardStats();
    loadRecentInterventions();
    initializeMenu();
    displayUserInfo();
});

function updateDashboardStats() {
    const stats = {
        totalMachines: document.getElementById('totalMachines'),
        activeMachines: document.getElementById('activeMachines'),
        brokenMachines: document.getElementById('brokenMachines'),
        maintenanceRate: document.getElementById('maintenanceRate')
    };
    
    if (stats.totalMachines) stats.totalMachines.textContent = factoryStats.totalMachines;
    if (stats.activeMachines) stats.activeMachines.textContent = factoryStats.activeMachines;
    if (stats.brokenMachines) stats.brokenMachines.textContent = factoryStats.brokenMachines;
    if (stats.maintenanceRate) stats.maintenanceRate.textContent = factoryStats.maintenanceRate + '%';
}

function loadRecentInterventions() {
    const tbody = document.getElementById('recentInterventions');
    if (!tbody) return;
    
    let html = '';
    recentInterventions.forEach(item => {
        let priorityClass = '';
        let priorityText = '';
        
        if (item.priority === 'urgent') {
            priorityClass = 'status-danger';
            priorityText = currentLang === 'ar' ? 'عاجل' : 'Urgent';
        } else if (item.priority === 'medium') {
            priorityClass = 'status-warning';
            priorityText = currentLang === 'ar' ? 'متوسط' : 'Medium';
        } else {
            priorityClass = 'status-active';
            priorityText = currentLang === 'ar' ? 'منخفض' : 'Low';
        }
        
        html += `<tr>
            <td>${item.machine}</td>
            <td>${item.issue}</td>
            <td><span class="status-badge ${priorityClass}">${priorityText}</span></td>
            <td>${item.status}</td>
            <td>${item.date}</td>
        </tr>`;
    });
    tbody.innerHTML = html;
}

function initializeMenu() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const menuDropdown = document.querySelector('.menu-dropdown');
    
    if (menuTrigger && menuDropdown) {
        menuTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            menuDropdown.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if (!menuTrigger.contains(e.target) && !menuDropdown.contains(e.target)) {
                menuDropdown.classList.remove('active');
            }
        });
    }
}

function displayUserInfo() {
    const userInfo = document.getElementById('userInfo');
    if (!userInfo) return;
    
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return;
    
    const name = currentLang === 'ar' ? user.name : user.nameEn;
    const role = currentLang === 'ar' ? user.role : user.roleEn;
    
    userInfo.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 2rem;">${user.avatar}</span>
            <div>
                <div style="font-weight: 700; color: white;">${name}</div>
                <div style="font-size: 0.85rem; color: var(--purple-soft);">${role}</div>
            </div>
        </div>
    `;
}

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = 15 + Math.random() * 20 + 's';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', createParticles);
