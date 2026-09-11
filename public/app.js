// =========================================================
// GOV-CHAIN UNIFIED AI ENGINE (HOMEPAGE CHAT + TAB CO-PILOT)
// =========================================================

const PAGE_CONTEXTS = {
  scholarship: {
    title: "Scholarship Co-Pilot",
    badge: "Form Assistant Active",
    welcome: "Hello! I am your Scholarship assistant. Click '⚡ Auto-fill Form' to pull your verified Aadhaar and Income records via consent token.",
    chips: [
      { label: "⚡ Auto-fill Form", action: "triggerAutoFill" },
      { label: "❓ Check Eligibility", query: "Am I eligible with annual income under 1.5 Lakhs?" },
      { label: "📝 What's Missing?", action: "checkMissingFields" }
    ]
  },
  aadhaar: {
    title: "UIDAI Registry Bot",
    badge: "Identity Node Connected",
    welcome: "Welcome to the UIDAI Simulated Node. You can search residents, verify status, or ask about DPDP token masking.",
    chips: [
      { label: "🔍 Lookup Srinjoy Roy", query: "Look up details for Aadhaar 123456789012" },
      { label: "🛡️ How is Data Masked?", query: "How does Gov-Chain protect my Aadhaar number?" },
      { label: "📜 DPDP Consent Info", query: "What consent is required for Aadhaar verification?" }
    ]
  },
  income: {
    title: "Revenue & e-District Bot",
    badge: "Revenue Node Connected",
    welcome: "Welcome to the State Revenue Registry. You can verify income certificates or inspect issuing authorities.",
    chips: [
      { label: "📄 Verify Certificate", query: "Verify certificate WB-REV-2026-9812" },
      { label: "💰 EWS Threshold", query: "What is the EWS income limit for scholarships?" },
      { label: "🏛️ Issuing Authority", query: "Who issued certificate WB-REV-2026-9812?" }
    ]
  },
  audit: {
    title: "Audit & Ledger Bot",
    badge: "DPDP Ledger Node",
    welcome: "Welcome to the Public Audit Trail. Ask me to search transactions, check consent events, or inspect hash signatures.",
    chips: [
      { label: "🔍 Filter Consent Events", action: "filterAuditConsent" },
      { label: "🔐 Explain Hash Integrity", query: "How do cryptographic hashes guarantee integrity in Gov-Chain?" },
      { label: "🔄 Refresh Ledger", action: "triggerAuditRefresh" }
    ]
  },
  home: {
    title: "Gov-Chain Concierge",
    badge: "Cross-Department Layer",
    welcome: "Welcome to Gov-Chain! Tell me which service you need, or choose an option below to open that portal in a new tab.",
    chips: []
  }
};

// Detects the active portal whether accessed via separate ports (3001, 3002...) or sub-paths (/scholarship.html)
function getActivePage() {
  const port = window.location.port;
  const path = window.location.pathname.toLowerCase();
  const title = (document.title || '').toLowerCase();

  if (port === '3001' || path.includes('scholarship') || title.includes('scholarship')) return 'scholarship';
  if (port === '3002' || path.includes('aadhaar') || title.includes('aadhaar') || title.includes('uidai')) return 'aadhaar';
  if (port === '3003' || path.includes('income') || title.includes('revenue') || title.includes('e-district')) return 'income';
  if (port === '3004' || path.includes('audit') || title.includes('audit') || title.includes('ledger')) return 'audit';

  return 'home';
}

const activePageKey = getActivePage();
const isHome = (activePageKey === 'home');

// =========================================================
// 1. HOMEPAGE MAIN CHATBOX (PORT 3000)
// =========================================================
window.handleUserSend = function () {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  addHomeChatMessage(text, 'user');
  input.value = '';
  processAIQuery(text);
};

window.sendQuickMessage = function (promptText) {
  addHomeChatMessage(promptText, 'user');
  processAIQuery(promptText);
};

function addHomeChatMessage(text, sender) {
  const box = document.getElementById('chatMessages');
  if (!box) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}-message`;

  if (sender === 'bot') {
    msgDiv.innerHTML = `
      <div class="bot-avatar"><i class="fa-solid fa-robot"></i></div>
      <div class="message-content">${text}</div>
    `;
    speakText(text);
  } else {
    msgDiv.innerHTML = `
      <div class="message-content">${text}</div>
    `;
  }

  box.appendChild(msgDiv);
  box.scrollTop = box.scrollHeight;
}

function initHomeBodyChat() {
  if (!isHome) return;

  const input = document.getElementById('chatInput');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        window.handleUserSend();
      }
    });
  }

  const voiceBtn = document.getElementById('voiceBtn');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', toggleVoiceSpeech);
  }
}

// =========================================================
// 2. FLOATING CO-PILOT WIDGET (FOR PORTS 3001, 3002, 3003, 3004)
// =========================================================
function injectFloatingCopilot() {
  if (isHome) return; // Do not put floating bot on homepage
  if (document.getElementById('govCopilotWidget')) return;

  const config = PAGE_CONTEXTS[activePageKey];

  const widgetHTML = `
    <div class="copilot-launcher" id="copilotLauncher" onclick="toggleCopilotModal()">
      <div class="launcher-pulse"></div>
      <i class="fa-solid fa-robot"></i>
      <span class="launcher-title">${config.title}</span>
      <span class="launcher-badge">${config.badge}</span>
      <button class="voice-quick-btn" id="launcherVoiceBtn" title="Speak to assistant" onclick="handleQuickVoice(event)">
        <i class="fa-solid fa-microphone"></i>
      </button>
    </div>

    <div class="copilot-modal" id="copilotModal">
      <div class="copilot-modal-header">
        <div class="header-left">
          <div class="bot-avatar"><i class="fa-solid fa-robot"></i></div>
          <div>
            <div class="modal-title">${config.title}</div>
            <div class="modal-subtitle"><span class="status-dot"></span> ${config.badge}</div>
          </div>
        </div>
        <div class="header-actions">
          <button class="icon-btn" onclick="clearCopilotChat()" title="Reset"><i class="fa-solid fa-rotate-left"></i></button>
          <button class="icon-btn" onclick="toggleCopilotModal()" title="Close"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>

      <div class="copilot-messages" id="copilotMessages">
        <div class="msg bot-msg"><div class="msg-bubble">${config.welcome}</div></div>
      </div>

      <div class="copilot-chips" id="copilotChips">
        ${config.chips.map((c, i) => `<button class="chip-btn" onclick="handleChipClick(${i})">${c.label}</button>`).join('')}
      </div>

      <div class="copilot-input-bar">
        <button class="mic-toggle-btn" id="copilotMicBtn" onclick="toggleVoiceSpeech()" title="Click to speak">
          <i class="fa-solid fa-microphone"></i>
        </button>
        <input type="text" id="copilotTextInput" placeholder="Ask or instruct co-pilot..." onkeydown="handleCopilotKey(event)" />
        <button class="send-submit-btn" onclick="sendCopilotMessage()"><i class="fa-solid fa-arrow-up"></i></button>
      </div>
    </div>
  `;

  const container = document.createElement('div');
  container.id = 'govCopilotWidget';
  container.innerHTML = widgetHTML;
  document.body.appendChild(container);
}

window.toggleCopilotModal = function () {
  const modal = document.getElementById('copilotModal');
  const launcher = document.getElementById('copilotLauncher');
  if (!modal) return;

  const isOpen = modal.classList.toggle('active');
  if (isOpen) {
    if (launcher) launcher.classList.add('minimized');
    setTimeout(() => {
      const input = document.getElementById('copilotTextInput');
      if (input) input.focus();
    }, 150);
  } else {
    if (launcher) launcher.classList.remove('minimized');
  }
};

window.clearCopilotChat = function () {
  const box = document.getElementById('copilotMessages');
  if (box) {
    box.innerHTML = `<div class="msg bot-msg"><div class="msg-bubble">${PAGE_CONTEXTS[activePageKey].welcome}</div></div>`;
  }
};

window.handleCopilotKey = function (e) {
  if (e.key === 'Enter') sendCopilotMessage();
};

window.sendCopilotMessage = function () {
  const input = document.getElementById('copilotTextInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  appendCopilotMessage(text, 'user');
  input.value = '';
  processAIQuery(text);
};

window.handleChipClick = function (index) {
  const chip = PAGE_CONTEXTS[activePageKey].chips[index];
  if (!chip) return;

  if (chip.action) {
    executeAction(chip.action);
  } else if (chip.query) {
    appendCopilotMessage(chip.query, 'user');
    processAIQuery(chip.query);
  }
};

function appendCopilotMessage(text, sender = 'bot') {
  const box = document.getElementById('copilotMessages');
  if (!box) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `msg ${sender}-msg`;
  msgDiv.innerHTML = `<div class="msg-bubble">${text}</div>`;
  box.appendChild(msgDiv);
  box.scrollTop = box.scrollHeight;
  if (sender === 'bot') speakText(text);
}

// =========================================================
// 3. AI QUERY PROCESSING & ACTIONS
// =========================================================
function aiReply(text) {
  if (isHome) {
    addHomeChatMessage(text, 'bot');
  } else {
    appendCopilotMessage(text, 'bot');
  }
}

function processAIQuery(query) {
  const q = query.toLowerCase();

  // Navigation intents (works from any website)
  if (q.includes('scholarship')) {
    aiReply("Opening Higher Education Scholarship Portal (Port 3001) in a new tab...");
    window.open('/scholarship', '_blank');
    return;
  }
  if (q.includes('aadhaar')) {
    aiReply("Opening UIDAI Aadhaar Citizen Registry (Port 3002) in a new tab...");
    window.open('/aadhaar', '_blank');
    return;
  }
  if (q.includes('income') || q.includes('revenue')) {
    aiReply("Opening State Revenue Portal (Port 3003) in a new tab...");
    window.open('/income', '_blank');
    return;
  }
  if (q.includes('audit') || q.includes('ledger')) {
    aiReply("Opening Public Audit Trail (Port 3004) in a new tab...");
    window.open('/audit', '_blank');
    return;
  }

  // Auto-fill form intent
  if (q.includes('auto fill') || q.includes('autofill') || q.includes('fetch')) {
    performScholarshipAutoFill();
    return;
  }

  // Scheme eligibility & limits
  if (q.includes('eligible') || q.includes('eligibility') || q.includes('income limit') || q.includes('ews')) {
    aiReply("Under the National Scholarship Scheme, candidates with verified annual family income below ₹2,50,000 qualify for 100% financial assistance. Srinjoy Roy's verified income is ₹1,20,000 (EWS), which meets all eligibility criteria.");
    return;
  }

  // DPDP & Privacy inquiries
  if (q.includes('mask') || q.includes('protect') || q.includes('dpdp') || q.includes('privacy') || q.includes('consent')) {
    aiReply("Gov-Chain strictly adheres to the DPDP Act 2023. We only exchange masked identity tokens (e.g. 1234-XXXX-9012) and record each consent transaction on the immutable audit ledger.");
    return;
  }

  aiReply(`I received your request: "${query}". You can command me to open service tabs, auto-fill verified registry data, or inspect audit logs.`);
}

function executeAction(actionName) {
  if (actionName === 'triggerAutoFill') {
    aiReply("Requesting digital consent to retrieve verified UIDAI and e-District records...");
    performScholarshipAutoFill();
  } else if (actionName === 'checkMissingFields') {
    auditScholarshipFields();
  } else if (actionName === 'filterAuditConsent') {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.value = 'CONSENT';
      if (typeof window.filterLogs === 'function') window.filterLogs();
      aiReply("Filtered audit ledger to show only DPDP Consent verification events.");
    }
  } else if (actionName === 'triggerAuditRefresh') {
    if (typeof window.fetchAuditLogs === 'function') {
      window.fetchAuditLogs();
      aiReply("Ledger records refreshed from the compliance node.");
    }
  }
}

// Auto-fill connects to the central gateway (Port 3000) so it works on port 3001
async function performScholarshipAutoFill() {
  try {
    const [aadhaarRes, incomeRes] = await Promise.all([
      fetch('/api/aadhaar/123456789012').then(r => r.json()).catch(() => null),
      fetch('/api/income/123456789012').then(r => r.json()).catch(() => null)
    ]);

    const aData = aadhaarRes?.data || {
      name: "Srijoy Ray",
      dob: "2002-08-15",
      phone: "9876543210",
      address: "12/A Salt Lake Sector V, Kolkata, WB"
    };

    const iData = incomeRes?.data || {
      annualIncome: 120000,
      certNumber: "WB-REV-2026-9812"
    };

    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };

    setVal('schName', aData.name);
    setVal('schIncome', iData.annualIncome);
    setVal('schCert', iData.certNumber);
    setVal('schAadhaar', '123456789012');

    aiReply(`✅ Auto-filled verified details for <strong>${aData.name}</strong>. Please enter Father's / Guardian's Occupation to submit.`);
  } catch (err) {
    aiReply("⚠️ Could not reach the central identity node. Please try again.");
  }
}


function auditScholarshipFields() {
  const occ = document.getElementById('schOccupation');
  if (!occ || !occ.value.trim()) {
    aiReply("⚠️ Incomplete field: <strong>Father's / Guardian's Occupation</strong> must be filled out before submitting.");
    if (occ) occ.focus();
  } else {
    aiReply("🎉 All fields verified and complete! You are ready to click Submit Application.");
  }
}

// ==========================================
// 4. SPEECH RECOGNITION & SYNTHESIS
// ==========================================
let recognition = null;
let isListening = false;

function initVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => { isListening = true; updateMicUI(true); };
  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    if (isHome) {
      addHomeChatMessage(text, 'user');
    } else {
      appendCopilotMessage(text, 'user');
    }
    processAIQuery(text);
  };
  recognition.onerror = () => { isListening = false; updateMicUI(false); };
  recognition.onend = () => { isListening = false; updateMicUI(false); };
}

function toggleVoiceSpeech() {
  if (!recognition) {
    alert("Speech recognition requires Chrome, Edge, or Brave.");
    return;
  }
  if (isListening) recognition.stop();
  else recognition.start();
}

window.handleQuickVoice = function (e) {
  e.stopPropagation();
  window.toggleCopilotModal();
  setTimeout(() => toggleVoiceSpeech(), 300);
};

function updateMicUI(active) {
  document.querySelectorAll('#voiceBtn, #launcherVoiceBtn, #copilotMicBtn').forEach(b => {
    b.classList.toggle('listening', active);
  });
}

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/<\/?[^>]+(>|$)/g, "");
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = 'en-IN';
  utter.rate = 1.0;
  window.speechSynthesis.speak(utter);
}

// ==========================================
// 5. SERVICES DROPDOWN CONTROLLER
// ==========================================
function initDropdown() {
  const btn = document.getElementById('servicesDropdownBtn');
  const menu = document.getElementById('servicesDropdown') || document.getElementById('servicesMenu');
  const dropdownParent = btn?.closest('.dropdown');

  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle('show');
      if (dropdownParent) dropdownParent.classList.toggle('open', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
        if (dropdownParent) dropdownParent.classList.remove('open');
      }
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
        if (dropdownParent) dropdownParent.classList.remove('open');
      });
    });
  }
}

// ==========================================
// 6. INITIALIZATION
// ==========================================
function initAll() {
  initDropdown();
  initVoice();

  if (isHome) {
    initHomeBodyChat();
  } else {
    injectFloatingCopilot();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
