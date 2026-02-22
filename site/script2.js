// ===== CURSOR =====
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// ===== CLOCK =====
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent =
        String(now.getHours()).padStart(2, '0') + ':' +
        String(now.getMinutes()).padStart(2, '0') + ':' +
        String(now.getSeconds()).padStart(2, '0');
}
setInterval(updateClock, 1000);
updateClock();

// ===== INFINITE SCROLL LOG =====
const rawLines = `Installing:
  wpscan

Installing dependencies:
  fonts-lato         ruby-activesupport    ruby-ffi              ruby-opt-parse-validator  ruby-webrick
  javascript-common  ruby-addressable      ruby-get-process-mem  ruby-pkg-config           ruby-xmlrpc
  libjs-jquery       ruby-base64           ruby-i18n             ruby-progressbar          ruby-yajl
  libruby            ruby-cms-scanner      ruby-mime-types       ruby-public-suffix        ruby3.3
  libruby3.3         ruby-concurrent       ruby-mime-types-data  ruby-ruby2-keywords       rubygems-integration
  libyaml-0-2        ruby-connection-pool  ruby-mini-portile2    ruby-rubygems             unzip
  racc               ruby-csv              ruby-minitest         ruby-sdbm                 zip
  rake               ruby-did-you-mean     ruby-net-telnet       ruby-typhoeus

Summary:
  Upgrading: 0, Installing: 44, Removing: 0, Not Upgrading: 0
  Download size: 13.0 MB
  Space needed: 57.8 MB / 1,025 GB available

Continue? [Y/n] y
Get:2 http://http.kali.org/kali kali-last-snapshot/main amd64 javascript-common all 12+nmu1 [4,864 B]
Get:1 http://kali.mirror.garr.it/kali kali-last-snapshot/main amd64 fonts-lato all 2.015-1 [2,780 kB]
Get:3 http://http.kali.org/kali kali-last-snapshot/main amd64 libjs-jquery all 3.7.1+dfsg+~3.5.33-1 [319 kB]
Get:4 http://kali.download/kali kali-last-snapshot/main amd64 rubygems-integration all 1.19 [5,488 B]
Get:5 http://kali.download/kali kali-last-snapshot/main amd64 ruby3.3 amd64 3.3.8-2 [834 kB]
Get:7 http://http.kali.org/kali kali-last-snapshot/main amd64 ruby amd64 1:3.3+b1 [6,560 B]
Get:8 http://kali.download/kali kali-last-snapshot/main amd64 rake all 13.2.1-1 [65.2 kB]
Get:9 http://kali.download/kali kali-last-snapshot/main amd64 ruby-csv all 3.3.4-1 [42.2 kB]
Get:11 http://kali.download/kali kali-last-snapshot/main amd64 ruby-net-telnet all 0.2.0-1 [13.1 kB]
Get:6 http://kali.mirror.garr.it/kali kali-last-snapshot/main amd64 ruby-rubygems all 3.6.7-2 [407 kB]
Get:12 http://kali.download/kali kali-last-snapshot/main amd64 ruby-ruby2-keywords all 0.0.5-1 [4,300 B]
Get:13 http://kali.download/kali kali-last-snapshot/main amd64 ruby-webrick all 1.9.1-1 [59.6 kB]
Get:14 http://kali.download/kali kali-last-snapshot/main amd64 ruby-xmlrpc all 0.3.3-2 [24.4 kB]
Get:15 http://kali.download/kali kali-last-snapshot/main amd64 libyaml-0-2 amd64 0.2.5-2 [52.5 kB]
Get:16 http://kali.download/kali kali-last-snapshot/main amd64 libruby3.3 amd64 3.3.8-2 [6,301 kB]
Get:17 http://http.kali.org/kali kali-last-snapshot/main amd64 libruby amd64 1:3.3+b1 [5,440 B]
Get:19 http://kali.download/kali kali-last-snapshot/main amd64 ruby-concurrent all 1.3.5-1 [291 kB]
Get:20 http://kali.download/kali kali-last-snapshot/main amd64 ruby-i18n all 1.14.7-1 [41.7 kB]
Get:10 http://kali.mirror.garr.it/kali kali-last-snapshot/main amd64 ruby-did-you-mean all 1.6.3-2 [20.9 kB]
Get:22 http://kali.download/kali kali-last-snapshot/main amd64 ruby-connection-pool all 2.5.4-1 [12.1 kB]
Get:23 http://kali.download/kali kali-last-snapshot/main amd64 ruby-minitest all 5.25.4-3 [66.3 kB]
Get:18 http://kali.mirror.garr.it/kali kali-last-snapshot/main amd64 racc all 1.8.1-2 [75.6 kB]
Get:24 http://kali.download/kali kali-last-snapshot/main amd64 ruby-base64 all 0.3.0-1 [8,304 B]
Get:25 http://http.kali.org/kali kali-last-snapshot/main amd64 ruby-activesupport all 2:7.2.2.2+dfsg-2 [223 kB]
Get:27 http://kali.download/kali kali-last-snapshot/main amd64 ruby-addressable all 2.8.7-2 [53.4 kB]
Get:28 http://http.kali.org/kali kali-last-snapshot/main amd64 ruby-ffi amd64 1.17.2+dfsg-1 [104 kB]
Get:30 http://kali.download/kali kali-last-snapshot/main amd64 ruby-mini-portile2 all 2.8.7-2 [21.4 kB]
Get:26 http://mirror.init7.net/kali kali-last-snapshot/main amd64 ruby-public-suffix all 6.0.2-1 [17.1 kB]
Get:21 http://kali.mirror.garr.it/kali kali-last-snapshot/main amd64 ruby-tzinfo all 2.0.6-1 [66.7 kB]
Get:29 http://kali.mirror.garr.it/kali kali-last-snapshot/main amd64 ruby-get-process-mem all 0.2.5-1 [6,432 B]
Get:34 http://kali.download/kali kali-last-snapshot/main amd64 ruby-progressbar all 1.11.0-1 [25.4 kB]
Get:31 http://kali.mirror.garr.it/kali kali-last-snapshot/main amd64 ruby-pkg-config all 1.5.9-1 [8,584 B]
Get:35 http://kali.download/kali kali-last-snapshot/main amd64 ruby-mime-types-data all 3.2025.0924-1 [122 kB]
Get:40 http://mirror.init7.net/kali kali-last-snapshot/main amd64 ruby-cms-scanner all 0.15.0-0kali1 [34.4 kB]
Get:36 http://kali.download/kali kali-last-snapshot/main amd64 ruby-mime-types all 3.6.0-1 [26.8 kB]
Get:37 http://kali.download/kali kali-last-snapshot/main amd64 ruby-ethon all 0.16.0-3 [38.1 kB]
Get:38 http://kali.download/kali kali-last-snapshot/main amd64 ruby-typhoeus all 1.4.0-6 [36.5 kB]
Get:39 http://http.kali.org/kali kali-last-snapshot/main amd64 ruby-yajl amd64 1.4.3-1+b5 [46.1 kB]
Get:32 http://http.kali.org/kali kali-last-snapshot/main amd64 ruby-nokogiri amd64 1.18.10+dfsg-1 [242 kB]
Get:33 http://kali.mirror.garr.it/kali kali-last-snapshot/main amd64 ruby-opt-parse-validator all 1.10.1-0kali1 [13.0 kB]
Get:41 http://http.kali.org/kali kali-last-snapshot/main amd64 ruby-sdbm amd64 1.0.0-5+b7 [15.1 kB]
Get:42 http://kali.download/kali kali-last-snapshot/main amd64 unzip amd64 6.0-29 [173 kB]
Get:43 http://kali.download/kali kali-last-snapshot/non-free amd64 wpscan all 3.8.28-0kali1 [58.3 kB]
Get:44 http://kali.download/kali kali-last-snapshot/main amd64 zip amd64 3.0-15 [235 kB]
Fetched 13.0 MB in 1s (9,314 kB/s)
Extracting templates from packages: 100%
Selecting previously unselected package fonts-lato.
(Reading database ... 35957 files and directories currently installed.)
Preparing to unpack .../00-fonts-lato_2.015-1_all.deb ...
Unpacking fonts-lato (2.015-1) ...
Selecting previously unselected package javascript-common.
Preparing to unpack .../01-javascript-common_12+nmu1_all.deb ...
Unpacking javascript-common (12+nmu1) ...
Selecting previously unselected package libjs-jquery.
Preparing to unpack .../02-libjs-jquery_3.7.1+dfsg+~3.5.33-1_all.deb ...
Unpacking libjs-jquery (3.7.1+dfsg+~3.5.33-1) ...
Selecting previously unselected package rubygems-integration.
Preparing to unpack .../03-rubygems-integration_1.19_all.deb ...
Unpacking rubygems-integration (1.19) ...
Selecting previously unselected package ruby3.3.
Preparing to unpack .../04-ruby3.3_3.3.8-2_amd64.deb ...
Unpacking ruby3.3 (3.3.8-2) ...
Selecting previously unselected package ruby-rubygems.
Preparing to unpack .../05-ruby-rubygems_3.6.7-2_all.deb ...
Unpacking ruby-rubygems (3.6.7-2) ...
Selecting previously unselected package ruby.
Preparing to unpack .../06-ruby_1:3.3+b1_amd64.deb ...
Unpacking ruby (1:3.3+b1) ...
Selecting previously unselected package rake.
Preparing to unpack .../07-rake_13.2.1-1_all.deb ...
Unpacking rake (13.2.1-1) ...
Selecting previously unselected package ruby-csv.
Preparing to unpack .../08-ruby-csv_3.3.4-1_all.deb ...
Unpacking ruby-csv (3.3.4-1) ...
Selecting previously unselected package ruby-did-you-mean.
Preparing to unpack .../09-ruby-did-you-mean_1.6.3-2_all.deb ...
Unpacking ruby-did-you-mean (1.6.3-2) ...
Selecting previously unselected package ruby-net-telnet.
Preparing to unpack .../10-ruby-net-telnet_0.2.0-1_all.deb ...
Unpacking ruby-net-telnet (0.2.0-1) ...
Selecting previously unselected package ruby-ruby2-keywords.
Preparing to unpack .../11-ruby-ruby2-keywords_0.0.5-1_all.deb ...
Unpacking ruby-ruby2-keywords (0.0.5-1) ...
Selecting previously unselected package ruby-webrick.
Preparing to unpack .../12-ruby-webrick_1.9.1-1_all.deb ...
Unpacking ruby-webrick (1.9.1-1) ...
Selecting previously unselected package ruby-xmlrpc.
Preparing to unpack .../13-ruby-xmlrpc_0.3.3-2_all.deb ...
Unpacking ruby-xmlrpc (0.3.3-2) ...
Selecting previously unselected package libyaml-0-2:amd64.
Preparing to unpack .../14-libyaml-0-2_0.2.5-2_amd64.deb ...
Unpacking libyaml-0-2:amd64 (0.2.5-2) ...
Selecting previously unselected package libruby3.3:amd64.
Preparing to unpack .../15-libruby3.3_3.3.8-2_amd64.deb ...
Unpacking libruby3.3:amd64 (3.3.8-2) ...
Selecting previously unselected package libruby:amd64.
Preparing to unpack .../16-libruby_1:3.3+b1_amd64.deb ...
Unpacking libruby:amd64 (1:3.3+b1) ...
Selecting previously unselected package racc.
Preparing to unpack .../17-racc_1.8.1-2_all.deb ...
Unpacking racc (1.8.1-2) ...
Selecting previously unselected package ruby-concurrent.
Preparing to unpack .../18-ruby-concurrent_1.3.5-1_all.deb ...
Unpacking ruby-concurrent (1.3.5-1) ...
Selecting previously unselected package ruby-i18n.
Preparing to unpack .../19-ruby-i18n_1.14.7-1_all.deb ...
Unpacking ruby-i18n (1.14.7-1) ...
Selecting previously unselected package ruby-tzinfo.
Preparing to unpack .../20-ruby-tzinfo_2.0.6-1_all.deb ...
Unpacking ruby-tzinfo (2.0.6-1) ...
Selecting previously unselected package ruby-connection-pool.
Preparing to unpack .../21-ruby-connection-pool_2.5.4-1_all.deb ...
Unpacking ruby-connection-pool (2.5.4-1) ...
Selecting previously unselected package ruby-minitest.
Preparing to unpack .../22-ruby-minitest_5.25.4-3_all.deb ...
Unpacking ruby-minitest (5.25.4-3) ...
Selecting previously unselected package ruby-base64.
Preparing to unpack .../23-ruby-base64_0.3.0-1_all.deb ...
Unpacking ruby-base64 (0.3.0-1) ...
Selecting previously unselected package ruby-activesupport.
Preparing to unpack .../24-ruby-activesupport_2:7.2.2.2+dfsg-2_all.deb ...
Unpacking ruby-activesupport (2:7.2.2.2+dfsg-2) ...
Selecting previously unselected package ruby-public-suffix.
Preparing to unpack .../25-ruby-public-suffix_6.0.2-1_all.deb ...
Unpacking ruby-public-suffix (6.0.2-1) ...
Selecting previously unselected package ruby-addressable.
Preparing to unpack .../26-ruby-addressable_2.8.7-2_all.deb ...
Unpacking ruby-addressable (2.8.7-2) ...
Selecting previously unselected package ruby-ffi:amd64.
Preparing to unpack .../27-ruby-ffi_1.17.2+dfsg-1_amd64.deb ...
Unpacking ruby-ffi:amd64 (1.17.2+dfsg-1) ...
Selecting previously unselected package ruby-get-process-mem.
Preparing to unpack .../28-ruby-get-process-mem_0.2.5-1_all.deb ...
Unpacking ruby-get-process-mem (0.2.5-1) ...
Selecting previously unselected package ruby-mini-portile2.
Preparing to unpack .../29-ruby-mini-portile2_2.8.7-2_all.deb ...
Unpacking ruby-mini-portile2 (2.8.7-2) ...
Selecting previously unselected package ruby-pkg-config.
Preparing to unpack .../30-ruby-pkg-config_1.5.9-1_all.deb ...
Unpacking ruby-pkg-config (1.5.9-1) ...
Selecting previously unselected package ruby-nokogiri.
Preparing to unpack .../31-ruby-nokogiri_1.18.10+dfsg-1_amd64.deb ...
Unpacking ruby-nokogiri (1.18.10+dfsg-1) ...
Selecting previously unselected package ruby-opt-parse-validator.
Preparing to unpack .../32-ruby-opt-parse-validator_1.10.1-0kali1_all.deb ...
Unpacking ruby-opt-parse-validator (1.10.1-0kali1) ...
Selecting previously unselected package ruby-progressbar.
Preparing to unpack .../33-ruby-progressbar_1.11.0-1_all.deb ...
Unpacking ruby-progressbar (1.11.0-1) ...
Selecting previously unselected package ruby-mime-types-data.
Preparing to unpack .../34-ruby-mime-types-data_3.2025.0924-1_all.deb ...
Unpacking ruby-mime-types-data (3.2025.0924-1) ...
Selecting previously unselected package ruby-mime-types.
Preparing to unpack .../35-ruby-mime-types_3.6.0-1_all.deb ...
Unpacking ruby-mime-types (3.6.0-1) ...
Selecting previously unselected package ruby-ethon.
Preparing to unpack .../36-ruby-ethon_0.16.0-3_all.deb ...
Unpacking ruby-ethon (0.16.0-3) ...
Selecting previously unselected package ruby-typhoeus.
Preparing to unpack .../37-ruby-typhoeus_1.4.0-6_all.deb ...
Unpacking ruby-typhoeus (1.4.0-6) ...
Selecting previously unselected package ruby-yajl.
Preparing to unpack .../38-ruby-yajl_1.4.3-1+b5_amd64.deb ...
Unpacking ruby-yajl (1.4.3-1+b5) ...
Selecting previously unselected package ruby-cms-scanner.
Preparing to unpack .../39-ruby-cms-scanner_0.15.0-0kali1_all.deb ...
Unpacking ruby-cms-scanner (0.15.0-0kali1) ...
Selecting previously unselected package ruby-sdbm:amd64.
Preparing to unpack .../40-ruby-sdbm_1.0.0-5+b7_amd64.deb ...
Unpacking ruby-sdbm:amd64 (1.0.0-5+b7) ...
Selecting previously unselected package unzip.
Preparing to unpack .../41-unzip_6.0-29_amd64.deb ...
Unpacking unzip (6.0-29) ...
Selecting previously unselected package wpscan.
Preparing to unpack .../42-wpscan_3.8.28-0kali1_all.deb ...
Unpacking wpscan (3.8.28-0kali1) ...
Selecting previously unselected package zip.
Preparing to unpack .../43-zip_3.0-15_amd64.deb ...
Unpacking zip (3.0-15) ...
Setting up javascript-common (12+nmu1) ...
Setting up ruby-ruby2-keywords (0.0.5-1) ...
Setting up fonts-lato (2.015-1) ...
Setting up libyaml-0-2:amd64 (0.2.5-2) ...
Setting up ruby-public-suffix (6.0.2-1) ...
Setting up unzip (6.0-29) ...
Setting up ruby-mini-portile2 (2.8.7-2) ...
Setting up rubygems-integration (1.19) ...
Setting up ruby-concurrent (1.3.5-1) ...
Setting up ruby-minitest (5.25.4-3) ...
Setting up zip (3.0-15) ...
Setting up ruby-net-telnet (0.2.0-1) ...
Setting up ruby-csv (3.3.4-1) ...
Setting up ruby-base64 (0.3.0-1) ...
Setting up ruby-i18n (1.14.7-1) ...
Setting up ruby-webrick (1.9.1-1) ...
Setting up ruby-progressbar (1.11.0-1) ...
Setting up ruby-mime-types-data (3.2025.0924-1) ...
Setting up ruby-connection-pool (2.5.4-1) ...
Setting up libjs-jquery (3.7.1+dfsg+~3.5.33-1) ...
Setting up ruby-did-you-mean (1.6.3-2) ...
Setting up ruby-xmlrpc (0.3.3-2) ...
Setting up ruby-addressable (2.8.7-2) ...
Setting up ruby-tzinfo (2.0.6-1) ...
Setting up rake (13.2.1-1) ...
Setting up libruby3.3:amd64 (3.3.8-2) ...
Setting up ruby-activesupport (2:7.2.2.2+dfsg-2) ...
Setting up ruby-rubygems (3.6.7-2) ...
Setting up ruby-mime-types (3.6.0-1) ...
Setting up ruby3.3 (3.3.8-2) ...
Setting up libruby:amd64 (1:3.3+b1) ...
Setting up ruby (1:3.3+b1) ...
Setting up racc (1.8.1-2) ...
Setting up ruby-pkg-config (1.5.9-1) ...
Setting up ruby-yajl (1.4.3-1+b5) ...
Setting up ruby-ffi:amd64 (1.17.2+dfsg-1) ...
Setting up ruby-sdbm:amd64 (1.0.0-5+b7) ...
Setting up ruby-nokogiri (1.18.10+dfsg-1) ...
Setting up ruby-opt-parse-validator (1.10.1-0kali1) ...
Setting up ruby-get-process-mem (0.2.5-1) ...
Setting up ruby-ethon (0.16.0-3) ...
Setting up ruby-typhoeus (1.4.0-6) ...
Setting up ruby-cms-scanner (0.15.0-0kali1) ...
Setting up wpscan (3.8.28-0kali1) ...
Processing triggers for libc-bin (2.41-12) ...`.split('\n');

// Classify each line
function classifyLine(line) {
    if (line.startsWith('Setting up wpscan') || line.startsWith('Installing:') || line.includes('wpscan')) return 'highlight purple';
    if (line.startsWith('Setting up') || line.startsWith('Unpacking')) return 'highlight';
    if (line.startsWith('Get:') || line.startsWith('Fetched')) return '';
    if (line.trim() === '' || line.startsWith('  ')) return 'dim';
    if (line.startsWith('Processing') || line.startsWith('Extracting') || line.startsWith('Continue')) return 'highlight';
    return 'dim';
}

const container = document.getElementById('scrollText');
const panelBody = document.querySelector('.terminal-body');
const lineHeight = 19; // px per line approx
let currentIndex = 0;
let renderedLines = [];
const maxVisibleLines = Math.floor((window.innerHeight - 45) / lineHeight) + 2;

function addLine() {
    const text = rawLines[currentIndex % rawLines.length];
    currentIndex++;

    const span = document.createElement('span');
    span.className = 'log-line ' + classifyLine(text);
    span.textContent = text === '' ? '\u00A0' : text;
    container.appendChild(span);
    renderedLines.push(span);

    // Scroll down
    const totalHeight = container.scrollHeight;
    const panelHeight = panelBody.clientHeight;

    if (totalHeight > panelHeight) {
        container.style.transform = `translateY(-${totalHeight - panelHeight}px)`;
    }

    // Remove old lines to keep DOM clean
    if (renderedLines.length > maxVisibleLines * 2) {
        const removed = renderedLines.splice(0, 20);
        removed.forEach(el => el.remove());
    }
}

// Start fast typing loop
let interval = setInterval(addLine, 30);

// Pre-fill with some lines instantly
for (let i = 0; i < 10; i++) addLine();

// ===== LOADING SEQUENCE =====
const loadSteps = [
    'DECRYPTING ARCHIVE...',
    'LOADING ANALYTICAL ENGINE...',
    'MOUNTING NOTE G...',
    'INITIALIZING BABBAGE PROTOCOL...',
    'COMPILING BERNOULLI SEQUENCE...',
    'RESTORING 1843 DATASET...',
    'ACCESS GRANTED',
];

function startLoading() {
    const overlay = document.getElementById('loadingOverlay');
    const fill = document.getElementById('loadBarFill');
    const percent = document.getElementById('loadPercent');
    const step = document.getElementById('loadStep');
    const label = document.getElementById('loadLabel');

    overlay.classList.add('active');

    let current = 0;
    const total = 100;
    const duration = 2800; // ms total
    const tickMs = 16;
    const ticksTotal = duration / tickMs;
    let tick = 0;

    step.textContent = loadSteps[0];

    const timer = setInterval(() => {
        tick++;
        // easeInOut progress
        const t = tick / ticksTotal;
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        current = Math.min(100, Math.round(eased * 100));

        fill.style.width = current + '%';
        percent.textContent = current + '%';

        // Update step label based on progress
        const stepIndex = Math.min(
            loadSteps.length - 1,
            Math.floor((current / 100) * loadSteps.length)
        );
        step.textContent = loadSteps[stepIndex];

        if (current >= 100) {
            clearInterval(timer);
            label.textContent = '// ACCESS GRANTED';
            label.style.color = 'var(--green)';
            label.style.textShadow = '0 0 12px var(--green)';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 400);
        }
    }, tickMs);
}


// ===== FAKE NMAP =====
const nmapLines = [
    { text: '', delay: 0 },
    { text: 'Starting Nmap 7.94 ( https://nmap.org ) at 2026-02-22 21:37 UTC', delay: 0, cls: 'highlight' },
    { text: 'Nmap scan report for ada.lovelace.archive (10.12.18.15)', delay: 400, cls: 'purple' },
    { text: 'Host is up (0.000183s latency).', delay: 800 },
    { text: 'Not shown: 987 closed tcp ports (reset)', delay: 1100 },
    { text: '', delay: 1200 },
    { text: 'PORT      STATE SERVICE         VERSION', delay: 1300, cls: 'highlight' },
    { text: '1815/tcp  open  analytical-eng  Babbage Engine v1.0', delay: 1500 },
    { text: '1843/tcp  open  algorithm       Note-G Bernoulli Service', delay: 1700, cls: 'purple' },
    { text: '1852/tcp  open  legacy          Ada Memorial Archive', delay: 1900 },
    { text: '1980/tcp  open  ada-lang        MIL-STD-1815 Compiler', delay: 2100 },
    { text: '2009/tcp  open  ald-day         Ada Lovelace Day Daemon', delay: 2300 },
    { text: '3141/tcp  open  pi-port         Mathematical Constants API', delay: 2500 },
    { text: '4242/tcp  open  jacquard        Loom Pattern Engine', delay: 2700 },
    { text: '', delay: 2900 },
    { text: 'MAC Address: AD:A1:08:15:18:43 (Countess Lovelace Foundation)', delay: 3000, cls: 'dim' },
    { text: '', delay: 3100 },
    { text: 'Service Info: OS: AnalyticalOS; CPE: cpe:/o:babbage:analytical_engine:1837', delay: 3200, cls: 'dim' },
    { text: '', delay: 3400 },
    { text: 'SCRIPT OUTPUT:', delay: 3500, cls: 'highlight' },
    { text: '| ada-info:', delay: 3600 },
    { text: '|   Identity  : Augusta Ada Byron King, Countess of Lovelace', delay: 3700, cls: 'purple' },
    { text: '|   Born      : 10 December 1815, London, England', delay: 3850 },
    { text: '|   Known for : First Computer Programmer in History', delay: 4000, cls: 'purple' },
    { text: '|   Threat lvl: VISIONARY [CRITICAL]', delay: 4200, cls: 'highlight' },
    { text: '|_  Status    : LEGEND — SYSTEM IMMORTAL', delay: 4400, cls: 'purple' },
    { text: '', delay: 4600 },
    { text: 'Nmap done: 1 IP address (1 host up) scanned in 4.43 seconds', delay: 4700, cls: 'highlight' },
    { text: '', delay: 4900 },
];

function injectNmap() {
    nmapLines.forEach(({ text, delay, cls }) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.className = 'log-line ' + (cls || 'dim');
            span.textContent = text === '' ? '\u00A0' : text;
            container.appendChild(span);
            renderedLines.push(span);

            const totalHeight = container.scrollHeight;
            const panelHeight = panelBody.clientHeight;
            if (totalHeight > panelHeight) {
                container.style.transform = `translateY(-${totalHeight - panelHeight}px)`;
            }
        }, delay);
    });

    // chain into wpscan — resume handled after wpscan
}

// Sequence: normal log 3s → nmap → wpscan → normal log ∞
clearInterval(interval);
setTimeout(() => {
    clearInterval(interval);
    injectNmap();
}, 3000);


// ===== FAKE WPSCAN =====
const wpscanLines = [
    { text: '', delay: 0 },
    { text: 'wpscan --url https://www.itismajo.it/', delay: 0, cls: 'highlight' },
    { text: '_______________________________________________________________', delay: 200, cls: 'dim' },
    { text: '         __          _______   _____', delay: 300, cls: 'purple' },
    { text: '         \\ \\        / /  __ \\ / ____|', delay: 380, cls: 'purple' },
    { text: '          \\ \\  /\\  / /| |__) | (___   ___  __ _ _ __ ®', delay: 460, cls: 'purple' },
    { text: '           \\ \\/  \\/ / |  ___/ \\___ \\ / __|/ _` | \'_ \\', delay: 540, cls: 'purple' },
    { text: '            \\  /\\  /  | |     ____) | (__| (_| | | | |', delay: 620, cls: 'purple' },
    { text: '             \\/  \\/   |_|    |_____/ \\__|\\__,_|_| |_|', delay: 700, cls: 'purple' },
    { text: '', delay: 750 },
    { text: '         WordPress Security Scanner by the WPScan Team', delay: 800, cls: 'dim' },
    { text: '                         Version 3.8.28', delay: 860, cls: 'dim' },
    { text: '', delay: 900 },
    { text: '       @_WPScan_, @ethicalhack3r, @erwan_lr, @firefart', delay: 950, cls: 'dim' },
    { text: '_______________________________________________________________', delay: 1000, cls: 'dim' },
    { text: '', delay: 1050 },
    { text: '[i] Updating the Database ...', delay: 1100 },
    { text: '[i] Update completed.', delay: 1600, cls: 'highlight' },
    { text: '', delay: 1700 },
    { text: '[+] URL: https://www.itismajo.it/ [89.46.108.18]', delay: 1800, cls: 'highlight' },
    { text: '[+] Started: Sun Dec 10 08:15:18 1815', delay: 1900, cls: 'purple' },
    { text: '', delay: 2000 },
    { text: 'Interesting Finding(s):', delay: 2100, cls: 'highlight' },
    { text: '', delay: 2150 },
    { text: '[+] Headers', delay: 2200, cls: 'highlight' },
    { text: ' | Interesting Entries:', delay: 2300 },
    { text: ' |  - server: aruba-proxy', delay: 2400, cls: 'dim' },
    { text: ' |  - x-servername: webx.aruba.it', delay: 2480, cls: 'dim' },
    { text: ' |  - alt-svc: h3=":443"; ma=86400', delay: 2560, cls: 'dim' },
    { text: ' | Found By: Headers (Passive Detection)', delay: 2640, cls: 'dim' },
    { text: ' | Confidence: 100%', delay: 2720 },
    { text: '', delay: 2800 },
    { text: '[+] robots.txt found: https://www.itismajo.it/robots.txt', delay: 2900, cls: 'highlight' },
    { text: ' | Interesting Entries:', delay: 2980 },
    { text: ' |  - /wp-admin/', delay: 3060, cls: 'dim' },
    { text: ' |  - /wp-admin/admin-ajax.php', delay: 3140, cls: 'dim' },
    { text: ' | Found By: Robots Txt (Aggressive Detection)', delay: 3220, cls: 'dim' },
    { text: ' | Confidence: 100%', delay: 3300 },
    { text: '', delay: 3380 },
    { text: '[+] XML-RPC seems to be enabled: https://www.itismajo.it/xmlrpc.php', delay: 3460, cls: 'highlight' },
    { text: ' | Found By: Direct Access (Aggressive Detection)', delay: 3540, cls: 'dim' },
    { text: ' | Confidence: 100%', delay: 3620 },
    { text: '', delay: 3700 },
    { text: '[+] WordPress readme found: https://www.itismajo.it/readme.html', delay: 3800, cls: 'highlight' },
    { text: ' | Found By: Direct Access (Aggressive Detection)', delay: 3880, cls: 'dim' },
    { text: ' | Confidence: 100%', delay: 3960 },
    { text: '', delay: 4040 },
    { text: '[+] This site seems to be a multisite', delay: 4120, cls: 'highlight' },
    { text: ' | Found By: Direct Access (Aggressive Detection)', delay: 4200, cls: 'dim' },
    { text: ' | Confidence: 100%', delay: 4280 },
    { text: '', delay: 4360 },
    { text: '[+] The external WP-Cron seems to be enabled: https://www.itismajo.it/wp-cron.php', delay: 4440, cls: 'highlight' },
    { text: ' | Found By: Direct Access (Aggressive Detection)', delay: 4520, cls: 'dim' },
    { text: ' | Confidence: 60%', delay: 4600 },
    { text: '', delay: 4680 },
    { text: '[+] WordPress version 6.7.4 identified (Outdated, released on 2025-09-30).', delay: 4760, cls: 'highlight' },
    { text: ' | Found By: Rss Generator (Passive Detection)', delay: 4840, cls: 'dim' },
    { text: '', delay: 4920 },
    { text: '[+] WordPress theme in use: design-scuole-wordpress-theme-child', delay: 5000, cls: 'highlight' },
    { text: ' | Style Name: Design Scuole Majo', delay: 5080, cls: 'dim' },
    { text: ' | Author: ITIS Majo Team', delay: 5160, cls: 'dim' },
    { text: ' | Version: 0.1 (80% confidence)', delay: 5240, cls: 'dim' },
    { text: '', delay: 5320 },
    { text: '[+] Enumerating All Plugins (via Passive Methods)', delay: 5400, cls: 'highlight' },
    { text: '[i] No plugins Found.', delay: 5700 },
    { text: '', delay: 5780 },
    { text: '[+] Enumerating Config Backups (via Passive and Aggressive Methods)', delay: 5860, cls: 'highlight' },
    { text: ' Checking Config Backups - Time: 00:00:05 <=============================> (137 / 137) 100.00%', delay: 6300 },
    { text: '[i] No Config Backups Found.', delay: 6500 },
    { text: '', delay: 6580 },
    { text: '[!] No WPScan API Token given, vulnerability data has not been output.', delay: 6660, cls: 'purple' },
    { text: '', delay: 6740 },
    { text: '[+] Finished: Sun Dec 10 08:15:28 1815', delay: 6820, cls: 'purple' },
    { text: '[+] Requests Done: 190', delay: 6900, cls: 'highlight' },
    { text: '[+] Cached Requests: 7', delay: 6960, cls: 'dim' },
    { text: '[+] Data Sent: 39.349 KB', delay: 7020, cls: 'dim' },
    { text: '[+] Data Received: 24.449 MB', delay: 7080, cls: 'dim' },
    { text: '[+] Memory used: 272.371 MB', delay: 7140, cls: 'dim' },
    { text: '[+] Elapsed time: 00:00:10', delay: 7200, cls: 'highlight' },
    { text: '', delay: 7300 },
];

function injectWpscan() {
    wpscanLines.forEach(({ text, delay, cls }) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.className = 'log-line ' + (cls || '');
            span.textContent = text === '' ? '\u00A0' : text;
            container.appendChild(span);
            renderedLines.push(span);

            const totalHeight = container.scrollHeight;
            const panelHeight = panelBody.clientHeight;
            if (totalHeight > panelHeight) {
                container.style.transform = `translateY(-${totalHeight - panelHeight}px)`;
            }
        }, delay);
    });

    // After wpscan finishes, resume normal log
    setTimeout(() => {
        setInterval(addLine, 30);
    }, 8000);
}

// nmap starts at t=3000ms, lasts ~5200ms → wpscan starts at ~8700ms
setTimeout(() => {
    injectWpscan();
}, 3000 + 5200 + 500);