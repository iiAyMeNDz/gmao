<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام GMAO - الصيانة المساعدة بالحاسوب</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- الشريط العلوي -->
        <nav class="navbar glass">
            <div class="logo">
                <span class="logo-icon">⚙️</span>
                <h1>GMAO<span class="dot">.</span></h1>
            </div>
            <ul class="nav-links">
                <li><a href="#" class="active">الرئيسية</a></li>
                <li><a href="#">المعدات</a></li>
                <li><a href="#">الصيانة</a></li>
                <li><a href="#">المخزون</a></li>
                <li><a href="#">التقارير</a></li>
            </ul>
            <div class="user-menu">
                <span class="notification">🔔</span>
                <span class="user">أحمد محمد</span>
                <div class="avatar">أ</div>
            </div>
        </nav>

        <!-- بطاقات الإحصائيات -->
        <div class="stats-grid">
            <div class="stat-card glass">
                <div class="stat-icon">🛠️</div>
                <div class="stat-info">
                    <h3>معدات نشطة</h3>
                    <p class="stat-number">248</p>
                    <span class="stat-trend positive">+12%</span>
                </div>
            </div>
            <div class="stat-card glass">
                <div class="stat-icon">⚠️</div>
                <div class="stat-info">
                    <h3>أعطال معلقة</h3>
                    <p class="stat-number">23</p>
                    <span class="stat-trend negative">-5%</span>
                </div>
            </div>
            <div class="stat-card glass">
                <div class="stat-icon">✅</div>
                <div class="stat-info">
                    <h3>صيانة مكتملة</h3>
                    <p class="stat-number">1,284</p>
                    <span class="stat-trend positive">+8%</span>
                </div>
            </div>
            <div class="stat-card glass">
                <div class="stat-icon">📦</div>
                <div class="stat-info">
                    <h3>قطع غيار</h3>
                    <p class="stat-number">3,421</p>
                    <span class="stat-trend">-2%</span>
                </div>
            </div>
        </div>

        <!-- قسم المخططات والنشاطات -->
        <div class="dashboard-grid">
            <div class="chart-card glass">
                <div class="card-header">
                    <h3>نشاط الصيانة الأسبوعي</h3>
                    <span class="badge">آخر 7 أيام</span>
                </div>
                <div class="chart-placeholder">
                    <div class="chart-bars">
                        <div class="bar" style="height: 70px;"></div>
                        <div class="bar" style="height: 45px;"></div>
                        <div class="bar" style="height: 90px;"></div>
                        <div class="bar" style="height: 60px;"></div>
                        <div class="bar" style="height: 80px;"></div>
                        <div class="bar" style="height: 40px;"></div>
                        <div class="bar" style="height: 55px;"></div>
                    </div>
                    <div class="chart-labels">
                        <span>س</span><span>ن</span><span>ث</span><span>ر</span><span>خ</span><span>ج</span><span>س</span>
                    </div>
                </div>
            </div>
            
            <div class="recent-card glass">
                <div class="card-header">
                    <h3>أحدث تدخلات الصيانة</h3>
                    <a href="#" class="view-all">عرض الكل →</a>
                </div>
                <ul class="activity-list">
                    <li>
                        <span class="activity-icon urgent">🔴</span>
                        <div class="activity-details">
                            <p class="activity-title">مكبس هيدروليكي - عطل مفاجئ</p>
                            <span class="activity-time">منذ 15 دقيقة</span>
                        </div>
                    </li>
                    <li>
                        <span class="activity-icon progress">🟡</span>
                        <div class="activity-details">
                            <p class="activity-title">ماكينة تعبئة - صيانة دورية</p>
                            <span class="activity-time">منذ ساعتين</span>
                        </div>
                    </li>
                    <li>
                        <span class="activity-icon done">🟢</span>
                        <div class="activity-details">
                            <p class="activity-title">خلاط صناعي - تغيير زيت</p>
                            <span class="activity-time">منذ 5 ساعات</span>
                        </div>
                    </li>
                    <li>
                        <span class="activity-icon urgent">🔴</span>
                        <div class="activity-details">
                            <p class="activity-title">سير ناقل - توقف مفاجئ</p>
                            <span class="activity-time">منذ 6 ساعات</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="equipment-card glass">
                <div class="card-header">
                    <h3>حالة المعدات</h3>
                    <span class="badge">مباشر</span>
                </div>
                <div class="equipment-list">
                    <div class="equipment-item">
                        <div class="equipment-name">
                            <span class="status-dot online"></span>
                            ضاغط هواء
                        </div>
                        <div class="equipment-status">يعمل بكفاءة</div>
                    </div>
                    <div class="equipment-item">
                        <div class="equipment-name">
                            <span class="status-dot warning"></span>
                            مبرد مياه
                        </div>
                        <div class="equipment-status">يحتاج صيانة</div>
                    </div>
                    <div class="equipment-item">
                        <div class="equipment-name">
                            <span class="status-dot offline"></span>
                            فرن صناعي
                        </div>
                        <div class="equipment-status">متوقف</div>
                    </div>
                    <div class="equipment-item">
                        <div class="equipment-name">
                            <span class="status-dot online"></span>
                            روبوت تعبئة
                        </div>
                        <div class="equipment-status">يعمل بكفاءة</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- جدول الصيانة القادمة -->
        <div class="table-card glass">
            <div class="card-header">
                <h3>مهام الصيانة القادمة</h3>
                <div class="header-actions">
                    <span class="badge">هذا الأسبوع</span>
                    <button class="btn-add">+ إضافة مهمة</button>
                </div>
            </div>
            <table class="maintenance-table">
                <thead>
                    <tr>
                        <th>المعدة</th>
                        <th>نوع الصيانة</th>
                        <th>التاريخ</th>
                        <th>المسؤول</th>
                        <th>الحالة</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>مخرطة CNC</td>
                        <td>وقائية</td>
                        <td>2024-01-25</td>
                        <td>مهندس أحمد</td>
                        <td><span class="status-badge pending">مجدولة</span></td>
                    </tr>
                    <tr>
                        <td>ونش علوي</td>
                        <td>تصحيحية</td>
                        <td>2024-01-26</td>
                        <td>فني خالد</td>
                        <td><span class="status-badge in-progress">قيد التنفيذ</span></td>
                    </tr>
                    <tr>
                        <td>ماكينة لحام</td>
                        <td>وقائية</td>
                        <td>2024-01-27</td>
                        <td>مهندس سارة</td>
                        <td><span class="status-badge pending">مجدولة</span></td>
                    </tr>
                    <tr>
                        <td>ضاغط هواء</td>
                        <td>تنبؤية</td>
                        <td>2024-01-28</td>
                        <td>فني عمر</td>
                        <td><span class="status-badge pending">مجدولة</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
