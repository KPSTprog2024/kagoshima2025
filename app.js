// 旅行データ
const travelData = {
    tripDate: new Date('2025-10-10'),
    days: {
        1: {
            date: "10/10（金）",
            title: "羽田 → 鹿児島市内",
            kidsTitle: "羽田（はねだ） → 鹿児島（かごしま）のまち",
            theme: "到着日",
            kidsTheme: "到着（とうちゃく）の日（ひ）",
            icon: "🛫",
            activities: [
                { time: "18:40", activity: "ANA627便で鹿児島空港着", kidsActivity: "ANA627ごうで 鹿児島（かごしま）空港（くうこう）に 到着（とうちゃく）", type: "travel" },
                { time: "19:10", activity: "荷物受け取り後 → 空港3F「いわさきのキッチンさつま」で夕食（黒豚料理）", kidsActivity: "荷物（にもつ）を 受（う）けとったら → 空港（くうこう）3かい『いわさきのキッチンさつま』で 夕食（ゆうしょく）に 黒豚（くろぶた）料理（りょうり）", type: "meal" },
                { time: "19:50", activity: "レンタカー受取", kidsActivity: "レンタカーを 受（う）けとるよ", type: "logistics" },
                { time: "20:00〜21:00", activity: "鹿児島市内へ移動", kidsActivity: "鹿児島（かごしま）のまちへ 車（くるま）で 移動（いどう）", type: "travel" },
                { time: "21:00", activity: "ホテル法華クラブ鹿児島 チェックイン", kidsActivity: "ホテル法華（ほっけ）クラブ 鹿児島（かごしま）で チェックイン", type: "accommodation" }
            ]
        },
        2: {
            date: "10/11（土）",
            title: "鹿児島市 → 指宿",
            kidsTitle: "鹿児島（かごしま） → 指宿（いぶすき）",
            theme: "そうめん流し＆砂蒸し風呂",
            kidsTheme: "ぐるぐる そうめんと 砂蒸（すなむ）し風呂（ぶろ）",
            icon: "🌋",
            activities: [
                { time: "10:00", activity: "ホテル出発", kidsActivity: "ホテルを 出発（しゅっぱつ）", type: "travel" },
                { time: "11:40", activity: "唐船峡そうめん流し 到着 → ランチ（回転式そうめん＋マス塩焼き定食）", kidsActivity: "唐船峡（とうせんきょう）の そうめん流（なが）しに 到着（とうちゃく） → ぐるぐる そうめんと マスの 塩焼（しおや）きランチ", type: "meal" },
                { time: "12:40", activity: "長崎鼻へ移動", kidsActivity: "長崎鼻（ながさきばな）へ 車（くるま）で 移動（いどう）", type: "travel" },
                { time: "13:00–14:00", activity: "長崎鼻散策（灯台・龍宮神社・浦島像）", kidsActivity: "長崎鼻（ながさきばな）を 散歩（さんぽ）（灯台（とうだい）・龍宮（りゅうぐう）神社（じんじゃ）・浦島（うらしま）像（ぞう））", type: "sightseeing" },
                { time: "14:30", activity: "指宿フェニックスホテル チェックイン", kidsActivity: "指宿（いぶすき）フェニックスホテルで チェックイン", type: "accommodation" },
                { time: "15:00–16:00", activity: "砂蒸し風呂体験（家族交代で）", kidsActivity: "砂蒸（すなむ）し風呂（ぶろ）体験（たいけん）（順番（じゅんばん）で 入（はい）るよ）", type: "activity", interactive: true },
                { time: "16:00–17:30", activity: "大浴場・露天風呂", kidsActivity: "大（おお）きな お風呂（ふろ）と 露天（ろてん）風呂（ぶろ）", type: "relaxation" },
                { time: "18:00", activity: "夕食（郷土料理会席）", kidsActivity: "夕食（ゆうしょく）（郷土（きょうど）の ごちそう）", type: "meal" },
                { time: "夜", activity: "部屋でくつろぎ", kidsActivity: "夜（よる）は 部屋（へや）で のんびり", type: "relaxation" }
            ]
        },
        3: {
            date: "10/12（日）",
            title: "指宿 → 霧島",
            kidsTitle: "指宿（いぶすき） → 霧島（きりしま）",
            theme: "桜島＆遊び場",
            kidsTheme: "桜島（さくらじま）と 遊（あそ）び場（ば）",
            icon: "🌌",
            activities: [
                { time: "09:30", activity: "ホテル出発", kidsActivity: "ホテルを 出発（しゅっぱつ）", type: "travel" },
                { time: "11:30–12:30", activity: "桜島サービスエリアでランチ＋展望（桜島ビュー）", kidsActivity: "桜島（さくらじま）サービスエリアで ランチ と 景色（けしき）", type: "meal", interactive: true },
                { time: "14:00–15:00", activity: "神話の里公園（ローラー滑り台・アスレチック）", kidsActivity: "神話（しんわ）の里（さと）公園（こうえん）で ローラーすべり台（だい）と アスレチック", type: "activity", interactive: true },
                { time: "オプション", activity: "子どもが飽きたら→霧島神宮参拝（車15分）", kidsActivity: "もっと 遊（あそ）びたい人（ひと）は → 車（くるま）で15分（ふん）の 霧島（きりしま）神宮（じんぐう）に お参（まい）り", type: "sightseeing" },
                { time: "15:30–16:00", activity: "界霧島 チェックイン", kidsActivity: "界（かい）霧島（きりしま）で チェックイン", type: "accommodation" },
                { time: "16:00以降", activity: "温泉・ご当地楽（文化体験）・夕食", kidsActivity: "温泉（おんせん）と ご当地（とうち）体験（たいけん）と 夕食（ゆうしょく）", type: "relaxation" },
                { time: "夜", activity: "星空セルフ観賞、ラウンジでのんびり", kidsActivity: "夜（よる）は 星空（ほしぞら）を 見（み）たり ラウンジで のんびり", type: "relaxation", interactive: true }
            ]
        },
        4: {
            date: "10/13（月）",
            title: "霧島 → 鹿児島空港 → 羽田",
            kidsTitle: "霧島（きりしま） → 鹿児島（かごしま）空港（くうこう） → 羽田（はねだ）",
            theme: "空港遊び＆帰宅",
            kidsTheme: "空港（くうこう）あそびと 帰（かえ）り道（みち）",
            icon: "✈️",
            activities: [
                { time: "07:00", activity: "朝風呂", kidsActivity: "朝（あさ）のお風呂（ふろ）", type: "relaxation" },
                { time: "08:00", activity: "朝食", kidsActivity: "朝（あさ）ごはん", type: "meal" },
                { time: "09:30–10:30", activity: "界霧島でゆっくり（庭散策・読書）", kidsActivity: "界（かい）霧島（きりしま）で 庭（にわ）を 散歩（さんぽ）したり 本（ほん）を 読（よ）んだり", type: "relaxation" },
                { time: "10:30", activity: "チェックアウト → 空港へ（約30分）", kidsActivity: "チェックアウト → 空港（くうこう）へ（車（くるま）で 約（やく）30分（ぷん））", type: "travel" },
                { time: "11:00–11:30", activity: "レンタカー返却", kidsActivity: "レンタカーを 返（かえ）すよ", type: "logistics" },
                { time: "11:30–13:00", activity: "空港でランチ＆観光（空港内スポット）", kidsActivity: "空港（くうこう）で ランチ と 見（み）どころ 探検（たんけん）", type: "meal" },
                { time: "", activity: "SORA STAGE 航空展示室", kidsActivity: "SORA STAGE 航空（こうくう）展示（てんじ）室（しつ）", type: "activity", interactive: true },
                { time: "", activity: "展望デッキ", kidsActivity: "展望（てんぼう）デッキ", type: "sightseeing" },
                { time: "", activity: "足湯「おやっとさぁ」", kidsActivity: "足湯（あしゆ）『おやっとさぁ』", type: "relaxation" },
                { time: "", activity: "キッズコーナー（保安検査後）", kidsActivity: "キッズコーナー（保安（ほあん）検査（けんさ）のあと）", type: "activity", interactive: true },
                { time: "13:25", activity: "保安検査", kidsActivity: "保安（ほあん）検査（けんさ）", type: "logistics" },
                { time: "14:15", activity: "ANA626便 鹿児島発 → 16:00 羽田着", kidsActivity: "ANA626ごうで 鹿児島（かごしま）を 出発（しゅっぱつ） → 16:00には 羽田（はねだ）に 到着（とうちゃく）", type: "travel", interactive: true }
            ]
        }
    }
};

// 地図データ
const mapData = {
    locations: {
        kagoshima_airport: {
            name: "鹿児島空港",
            coordinates: [31.8008599, 130.7162193],
            type: "airport",
            days: [1, 4],
            icon: "✈️"
        },
        hotel_hokke_club: {
            name: "ホテル法華クラブ鹿児島",
            coordinates: [31.5882592, 130.5506142],
            type: "accommodation",
            days: [1],
            icon: "🏨"
        },
        tousenkyo_somen: {
            name: "唐船峡そうめん流し",
            coordinates: [31.220141, 130.542595],
            type: "restaurant",
            days: [2],
            icon: "🍽️"
        },
        nagasakibana: {
            name: "長崎鼻",
            coordinates: [31.15588, 130.586625],
            type: "sightseeing",
            days: [2],
            icon: "📸"
        },
        ibusuki_phoenix: {
            name: "指宿フェニックスホテル",
            coordinates: [31.2344, 130.6377],
            type: "accommodation",
            days: [2],
            icon: "🏨"
        },
        sakurajima_sa: {
            name: "桜島サービスエリア",
            coordinates: [31.727604, 130.614591],
            type: "restaurant",
            days: [3],
            icon: "🍽️"
        },
        shinwa_park: {
            name: "神話の里公園",
            coordinates: [31.863496, 130.851221],
            type: "activity",
            days: [3],
            icon: "🎯"
        },
        kirishima_jingu: {
            name: "霧島神宮",
            coordinates: [31.8589325, 130.8717269],
            type: "sightseeing",
            days: [3],
            icon: "📸"
        },
        kai_kirishima: {
            name: "界霧島",
            coordinates: [31.868081, 130.871389],
            type: "accommodation",
            days: [3, 4],
            icon: "🏨"
        }
    },
    routes: {
        day1: {
            date: "10/10（金）",
            title: "羽田 → 鹿児島市内",
            color: "#3B82F6",
            route: [
                {lat: 31.8008599, lng: 130.7162193, name: "鹿児島空港", time: "18:40", activity: "ANA627便で鹿児島空港着"},
                {lat: 31.5882592, lng: 130.5506142, name: "ホテル法華クラブ鹿児島", time: "21:00", activity: "チェックイン"}
            ]
        },
        day2: {
            date: "10/11（土）",
            title: "鹿児島市 → 指宿",
            color: "#10B981",
            route: [
                {lat: 31.5882592, lng: 130.5506142, name: "ホテル法華クラブ鹿児島", time: "10:00", activity: "ホテル出発"},
                {lat: 31.220141, lng: 130.542595, name: "唐船峡そうめん流し", time: "11:40", activity: "ランチ（回転式そうめん＋マス塩焼き定食）"},
                {lat: 31.15588, lng: 130.586625, name: "長崎鼻", time: "13:00", activity: "散策（灯台・龍宮神社・浦島像）"},
                {lat: 31.2344, lng: 130.6377, name: "指宿フェニックスホテル", time: "14:30", activity: "チェックイン・砂蒸し風呂体験"}
            ]
        },
        day3: {
            date: "10/12（日）",
            title: "指宿 → 霧島",
            color: "#F59E0B",
            route: [
                {lat: 31.2344, lng: 130.6377, name: "指宿フェニックスホテル", time: "09:30", activity: "ホテル出発"},
                {lat: 31.727604, lng: 130.614591, name: "桜島サービスエリア", time: "11:30", activity: "ランチ＋展望（桜島ビュー）"},
                {lat: 31.863496, lng: 130.851221, name: "神話の里公園", time: "14:00", activity: "ローラー滑り台・アスレチック"},
                {lat: 31.8589325, lng: 130.8717269, name: "霧島神宮", time: "オプション", activity: "参拝"},
                {lat: 31.868081, lng: 130.871389, name: "界霧島", time: "15:30", activity: "チェックイン・温泉"}
            ]
        },
        day4: {
            date: "10/13（月）",
            title: "霧島 → 鹿児島空港 → 羽田",
            color: "#EF4444",
            route: [
                {lat: 31.868081, lng: 130.871389, name: "界霧島", time: "10:30", activity: "チェックアウト"},
                {lat: 31.8008599, lng: 130.7162193, name: "鹿児島空港", time: "11:00", activity: "空港内観光・ANA626便で羽田へ"}
            ]
        }
    }
};

// 地図変数
let map;
let markers = {};
let routes = {};

// 状態管理
let currentView = 'top';
let currentDay = 1;
let collectedStars = [];
let hiddenCharacterFound = false;
let visibleDays = [1, 2, 3, 4];

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
    updateCountdown();
    setInterval(updateCountdown, 1000 * 60 * 60);
});

function initializeApp() {
    console.log('App initialization started');
    
    // ナビゲーションボタンを即座に設定
    const mapBtn = document.getElementById('map-btn');
    if (mapBtn) {
        console.log('Map button found, adding event listener');
        mapBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Map button clicked');
            showView('map');
        });
    } else {
        console.error('Map button not found');
    }
    
    // 他のナビゲーション設定
    setupAllNavigation();
    setupDayNavigation();
    setupMapFilters();
    setupModals();
    setupHiddenCharacter();
    
    // 初期表示
    showView('top');
}

function setupAllNavigation() {
    console.log('Setting up navigation buttons');
    
    // 個別にボタンを設定
    const buttons = [
        { id: 'adult-btn', view: 'adult' },
        { id: 'kids-btn', view: 'kids' },
        { id: 'back-to-top', view: 'top' },
        { id: 'kids-back-to-top', view: 'top' },
        { id: 'map-back-to-top', view: 'top' },
        { id: 'switch-to-kids', view: 'kids' },
        { id: 'switch-to-adult', view: 'adult' },
        { id: 'switch-to-map', view: 'map' },
        { id: 'map-switch-to-adult', view: 'adult' },
        { id: 'map-switch-to-kids', view: 'kids' },
        { id: 'kids-switch-to-map', view: 'map' }
    ];

    buttons.forEach(({ id, view }) => {
        const button = document.getElementById(id);
        if (button) {
            console.log(`Setting up button ${id} for view ${view}`);
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log(`Button ${id} clicked, navigating to ${view}`);
                showView(view);
            });
        }
    });
}

function setupDayNavigation() {
    // 大人向け日程ナビゲーション
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const day = parseInt(this.dataset.day);
            if (day) {
                console.log(`Adult day ${day} clicked`);
                showDay(day, 'adult');
            }
        });
    });

    // 子ども向け日程ナビゲーション
    document.querySelectorAll('.kids-day-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const day = parseInt(this.dataset.day);
            if (day) {
                console.log(`Kids day ${day} clicked`);
                showDay(day, 'kids');
            }
        });
    });
}

function setupMapFilters() {
    // 地図フィルターのイベントリスナー
    setTimeout(() => {
        document.querySelectorAll('.filter-checkbox input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const day = parseInt(this.dataset.day);
                if (this.checked) {
                    if (!visibleDays.includes(day)) {
                        visibleDays.push(day);
                    }
                } else {
                    visibleDays = visibleDays.filter(d => d !== day);
                }
                updateMapVisibility();
            });
        });
    }, 500);
}

function setupModals() {
    const modal = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target.id === 'modal') {
                closeModal();
            }
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    }
}

function setupHiddenCharacter() {
    const hiddenDog = document.getElementById('hidden-dog');
    if (hiddenDog) {
        hiddenDog.addEventListener('click', foundHiddenCharacter);
    }
}

function showView(view) {
    console.log(`Attempting to show view: ${view}`);
    
    // 全てのページを隠す
    const pageIds = ['top-page', 'adult-page', 'kids-page', 'map-page'];
    pageIds.forEach(pageId => {
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('hidden');
            console.log(`Hiding ${pageId}`);
        }
    });
    
    // 指定されたページを表示
    currentView = view;
    const targetPageId = view + '-page';
    const targetPage = document.getElementById(targetPageId);
    
    if (targetPage) {
        targetPage.classList.remove('hidden');
        console.log(`Successfully showing ${targetPageId}`);
        
        // 各ページ特有の処理
        if (view === 'adult') {
            showDay(currentDay, 'adult');
        } else if (view === 'kids') {
            showDay(currentDay, 'kids');
            setTimeout(showHiddenCharacter, 2000);
        } else if (view === 'map') {
            console.log('Initializing map...');
            setTimeout(() => {
                initializeMap();
            }, 500);
        }
    } else {
        console.error(`Page ${targetPageId} not found`);
    }
}

function showDay(day, viewType) {
    console.log(`Showing day ${day} for ${viewType}`);
    currentDay = day;
    
    if (viewType === 'adult') {
        updateAdultDayNav(day);
        renderAdultContent(day);
    } else if (viewType === 'kids') {
        updateKidsDayNav(day);
        renderKidsContent(day);
    }
}

function updateAdultDayNav(activeDay) {
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.day) === activeDay) {
            btn.classList.add('active');
        }
    });
}

function updateKidsDayNav(activeDay) {
    document.querySelectorAll('.kids-day-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.day) === activeDay) {
            btn.classList.add('active');
        }
    });
}

function renderAdultContent(day) {
    const dayData = travelData.days[day];
    const contentElement = document.getElementById('adult-content');
    
    if (!contentElement || !dayData) return;
    
    contentElement.innerHTML = `
        <div class="day-content">
            <div class="day-header">
                <div class="day-icon">${dayData.icon}</div>
                <div class="day-title">
                    <h2>${dayData.date} ${dayData.title}</h2>
                    <p class="day-theme">${dayData.theme}</p>
                </div>
            </div>
            <div class="activities">
                ${dayData.activities.map(activity => `
                    <div class="activity-item">
                        <div class="activity-time">${activity.time}</div>
                        <div class="activity-desc">
                            ${activity.activity}
                            <div class="activity-type ${activity.type}">${getActivityTypeLabel(activity.type)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderKidsContent(day) {
    const dayData = travelData.days[day];
    const contentElement = document.getElementById('kids-content');

    if (!contentElement || !dayData) return;

    const isCompleted = collectedStars.includes(day);
    const kidsTitle = dayData.kidsTitle || dayData.title;
    const kidsTheme = dayData.kidsTheme || dayData.theme;

    contentElement.innerHTML = `
        <div class="kids-day-content">
            <div class="day-header">
                <div class="day-icon">${dayData.icon}</div>
                <div class="day-title">
                    <h2>${dayData.date}</h2>
                    <h3>${kidsTitle}</h3>
                    <p class="day-theme">${kidsTheme}</p>
                </div>
            </div>
            <div class="kids-activities">
                ${dayData.activities.map((activity, index) => `
                    <div class="kids-activity ${activity.interactive ? 'interactive' : ''}"
                         data-day="${day}" data-activity="${index}">
                        <div class="kids-activity-content">
                            <div class="kids-activity-icon">${getActivityIcon(activity.type)}</div>
                            <div class="kids-activity-text">
                                <h4>${activity.time}</h4>
                                <p>${activity.kidsActivity || activity.activity}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="complete-day-btn ${isCompleted ? 'completed' : ''}" 
                    onclick="completeDay(${day})">
                ${isCompleted ? '⭐ この日は完了！' : '🌟 この日を完了する'}
            </button>
        </div>
    `;

    // インタラクティブな要素にイベントリスナーを追加
    setTimeout(() => {
        document.querySelectorAll('.kids-activity.interactive').forEach(element => {
            element.addEventListener('click', handleInteractiveActivity);
        });
    }, 100);
}

// 地図関連の関数
function initializeMap() {
    console.log('Initializing map function called...');
    
    const mapContainer = document.getElementById('travel-map');
    if (!mapContainer) {
        console.error('Map container not found');
        return;
    }

    // 既存の地図をクリア
    if (map) {
        console.log('Removing existing map...');
        map.remove();
        map = null;
    }

    try {
        console.log('Creating new map instance...');
        // 地図の初期化
        map = L.map('travel-map', {
            center: [31.5, 130.7],
            zoom: 9
        });

        console.log('Adding tile layer...');
        // OpenStreetMapタイルレイヤーを追加
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // マーカーとルートを作成
        console.log('Creating markers and routes...');
        createMarkersAndRoutes();
        
        // 地図の強制更新
        setTimeout(() => {
            if (map) {
                map.invalidateSize();
                console.log('Map size invalidated');
            }
        }, 100);
        
        console.log('Map initialized successfully');
    } catch (error) {
        console.error('Error initializing map:', error);
    }
}

function createMarkersAndRoutes() {
    console.log('Creating markers and routes...');
    
    // 既存のマーカーとルートをクリア
    Object.values(markers).forEach(marker => {
        if (marker && marker.remove) {
            marker.remove();
        }
    });
    Object.values(routes).forEach(route => {
        if (route && route.remove) {
            route.remove();
        }
    });
    markers = {};
    routes = {};

    // 各日程のルートを作成
    for (let day = 1; day <= 4; day++) {
        const routeData = mapData.routes[`day${day}`];
        if (routeData && visibleDays.includes(day)) {
            console.log(`Creating route for day ${day}`);
            
            // ポリラインを作成
            const routePoints = routeData.route.map(point => [point.lat, point.lng]);
            const polyline = L.polyline(routePoints, {
                color: routeData.color,
                weight: 4,
                opacity: 0.8
            }).addTo(map);
            routes[`day${day}`] = polyline;

            // 各地点にマーカーを追加
            routeData.route.forEach((point, index) => {
                const location = findLocationByCoordinates(point.lat, point.lng);
                if (location) {
                    const marker = createCustomMarker(location, point, day);
                    markers[`${location.name}_day${day}_${index}`] = marker;
                }
            });
        }
    }
    
    console.log(`Created ${Object.keys(markers).length} markers and ${Object.keys(routes).length} routes`);
}

function findLocationByCoordinates(lat, lng) {
    return Object.values(mapData.locations).find(location => 
        Math.abs(location.coordinates[0] - lat) < 0.001 && 
        Math.abs(location.coordinates[1] - lng) < 0.001
    );
}

function createCustomMarker(location, routePoint, day) {
    const marker = L.marker([location.coordinates[0], location.coordinates[1]]).addTo(map);
    
    // ポップアップの内容を作成
    const popupContent = `
        <div class="custom-popup">
            <h3>${location.icon} ${location.name}</h3>
            <div class="popup-time">${routePoint.time}</div>
            <div class="popup-activity">${routePoint.activity}</div>
            <div class="popup-type">${getActivityTypeLabel(location.type)}</div>
        </div>
    `;
    
    marker.bindPopup(popupContent);
    return marker;
}

function updateMapVisibility() {
    if (!map) return;
    
    console.log('Updating map visibility for days:', visibleDays);
    createMarkersAndRoutes();
}

// エリア別ズーム機能をグローバルスコープで定義
window.zoomToArea = function(area) {
    console.log(`Zooming to area: ${area}`);
    if (!map) {
        console.error('Map not initialized');
        return;
    }
    
    const areas = {
        all: { center: [31.5, 130.7], zoom: 9 },
        kagoshima: { center: [31.59, 130.55], zoom: 12 },
        ibusuki: { center: [31.20, 130.60], zoom: 11 },
        kirishima: { center: [31.86, 130.87], zoom: 12 }
    };
    
    const targetArea = areas[area];
    if (targetArea) {
        map.setView(targetArea.center, targetArea.zoom);
        console.log(`Zoomed to ${area}`);
    }
};

// その他の既存関数
function handleInteractiveActivity(e) {
    const day = parseInt(e.currentTarget.dataset.day);
    const activityIndex = parseInt(e.currentTarget.dataset.activity);
    const activity = travelData.days[day].activities[activityIndex];
    
    // アニメーション効果
    e.currentTarget.style.transform = 'scale(1.1)';
    setTimeout(() => {
        e.currentTarget.style.transform = '';
    }, 200);

    // 活動に応じた特別な効果
    if (activity.activity.includes('桜島')) {
        showVolcanoEruption(e.currentTarget);
        showModal('🌋 桜島噴火！', '桜島が噴火したよ！すごい迫力だね！鹿児島のシンボル、桜島を見に行こう！');
    } else if (activity.activity.includes('砂蒸し風呂')) {
        showSandBathSteam(e.currentTarget);
        showModal('♨️ 砂蒸し風呂', '熱い砂に埋まって温まろう！鹿児島の有名な温泉体験だよ！気持ちいいね～');
    } else if (activity.activity.includes('ANA626便') || activity.activity.includes('ANA627便')) {
        showAirplaneFly(e.currentTarget);
        showModal('✈️ 飛行機で空の旅', 'わーい！飛行機に乗って空の旅！雲の上を飛んで気持ちいいね！');
    } else if (activity.activity.includes('星空')) {
        showModal('🌟 きれいな星空', 'きれいな星がいっぱい！流れ星が見えるかな？願い事をしよう！');
    } else if (activity.activity.includes('公園') || activity.activity.includes('アスレチック')) {
        showModal('🎠 楽しい遊び場', 'ローラー滑り台やアスレチックで遊ぼう！たくさん遊んで楽しもう！');
    } else if (activity.activity.includes('キッズコーナー') || activity.activity.includes('航空展示室')) {
        showModal('🎮 空港で遊ぼう', '空港にも楽しい遊び場があるよ！飛行機を見たり遊んだりしよう！');
    }
}

function showVolcanoEruption(element) {
    element.classList.add('volcano-eruption');
    setTimeout(() => element.classList.remove('volcano-eruption'), 500);
}

function showSandBathSteam(element) {
    element.classList.add('sand-bath-steam');
    setTimeout(() => element.classList.remove('sand-bath-steam'), 2000);
}

function showAirplaneFly(element) {
    element.classList.add('airplane-fly');
    setTimeout(() => element.classList.remove('airplane-fly'), 2000);
}

function completeDay(day) {
    if (!collectedStars.includes(day)) {
        collectedStars.push(day);
        updateStarCount();
        updateDayStar(day);
        
        // 完了アニメーション
        const btn = event.target;
        btn.textContent = '⭐ この日は完了！';
        btn.classList.add('completed');
        
        // 星を集めるアニメーション
        setTimeout(() => {
            if (collectedStars.length === 4) {
                showModal('🎉 おめでとう！', '全部の日程を完了したね！素晴らしい旅行になりそう！');
            }
        }, 500);
    }
}

function updateStarCount() {
    const starCountElement = document.getElementById('star-count');
    if (starCountElement) {
        starCountElement.textContent = collectedStars.length;
    }
}

function updateDayStar(day) {
    const starElement = document.querySelector(`.day-star[data-day="${day}"]`);
    if (starElement) {
        starElement.textContent = '⭐';
        starElement.classList.add('collected');
    }
}

function showHiddenCharacter() {
    const hiddenDog = document.getElementById('hidden-dog');
    if (!hiddenCharacterFound && Math.random() < 0.3 && hiddenDog) { // 30%の確率で表示
        hiddenDog.classList.add('found');
    }
}

function foundHiddenCharacter() {
    if (!hiddenCharacterFound) {
        hiddenCharacterFound = true;
        const hiddenDog = document.getElementById('hidden-dog');
        if (hiddenDog) {
            hiddenDog.classList.remove('found');
        }
        showModal('🐕 薩摩犬発見！', 'おめでとう！隠れていた薩摩犬を見つけたね！鹿児島の忠犬、薩摩犬だよ！');
    }
}

function showModal(title, content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        <button class="btn btn--primary" onclick="closeModal()">OK</button>
    `;
    
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function updateCountdown() {
    const now = new Date();
    const tripDate = travelData.tripDate;
    const timeDiff = tripDate.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    const countdownElement = document.getElementById('countdown-days');
    if (countdownElement) {
        if (daysLeft > 0) {
            countdownElement.textContent = daysLeft;
        } else if (daysLeft === 0) {
            countdownElement.textContent = '今日';
        } else {
            countdownElement.textContent = '出発済み';
        }
    }
}

function getActivityTypeLabel(type) {
    const labels = {
        travel: '移動',
        meal: '食事',
        activity: '体験',
        sightseeing: '観光',
        accommodation: '宿泊',
        relaxation: '休憩',
        logistics: '手続き',
        airport: '空港',
        restaurant: 'レストラン'
    };
    return labels[type] || type;
}

function getActivityIcon(type) {
    const icons = {
        travel: '🚗',
        meal: '🍽️',
        activity: '🎯',
        sightseeing: '📸',
        accommodation: '🏨',
        relaxation: '😌',
        logistics: '📋'
    };
    return icons[type] || '📝';
}