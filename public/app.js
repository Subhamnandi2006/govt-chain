// ==========================================
// TRANSLATION DICTIONARY (i18n)
// ==========================================
const TRANSLATIONS = {
  en: {
    speechLang: 'en-IN',
    brand_sub: "National Interoperability & Service Orchestration Layer",
    citizen_portal: "Citizen Portal",
    tab_orchestrator: "Govt Chain (Orchestrator)",
    tab_aadhaar: "1. UIDAI Aadhaar Portal",
    tab_income: "2. State Revenue Portal",
    tab_scholarship: "3. Scholarship Portal",
    tab_audit: "Compliance & Audit Logs",
    hero_title: "One Request → Unified Public Delivery",
    hero_desc: "No repeated data entry. Govt Chain connects verified state registries with human-in-the-loop consent.",
    assistant_title: "Govt Chain Voice Assistant",
    ready_assist: "Ready to assist",
    voice_assist: "Voice Assist",
    bot_welcome: "Welcome to <strong>Govt Chain</strong>! I can help you apply for student scholarships, verify documents, and fetch your government records automatically.",
    chip_scholarship: "Apply for Scholarship",
    chip_docs: "Check Documents",
    chat_placeholder: "Type or click Voice Assist to speak...",
    form_title: "Scholarship Application (Higher Education Dept)",
    badge_awaiting: "Awaiting Intent",
    autofill_notice: "Data fetched securely via Govt Chain interoperability layer.",
    label_aadhaar: "Aadhaar Number (12 Digits)",
    pick_citizen: "-- Pick an Enrolled Citizen --",
    label_name: "Full Name",
    label_dob: "Date of Birth",
    label_phone: "Mobile Number",
    label_income: "Annual Family Income (₹)",
    label_cert: "Income Certificate No.",
    label_address: "Permanent Address",
    label_father: "Father's / Guardian's Occupation",
    not_in_registry: "* (Not in Registry)",
    helper_occupation: "This information was absent from registries; please supply it.",
    label_college: "College / Institution Name",
    btn_clear: "Clear",
    btn_submit: "Review & Submit",
    audit_title: "System Interoperability Audit & Consent Trail",
    audit_desc: "Every single automated query through Govt Chain is digitally signed, consent-verified, and logged.",
    th_time: "Timestamp",
    th_event: "Event",
    th_applicant: "Applicant",
    th_aadhaar: "Aadhaar Linked",
    th_income: "Income Certificate",
    th_consent: "Consent Verified",
    th_outcome: "Outcome",
    modal_title: "Citizen Data Consent Request",
    modal_desc: "To proceed with your <strong>Higher Education Scholarship</strong>, Govt Chain requires your authorization to fetch verified records from:",
    modal_aadhaar_pt: "UIDAI Aadhaar:",
    modal_aadhaar_desc: "Full Name, Date of Birth, Permanent Address",
    modal_income_pt: "e-District Revenue:",
    modal_income_desc: "Annual Family Income, Verified Certificate Reference",
    modal_lock: "Data is encrypted in transit and never stored on third-party servers.",
    btn_deny: "Deny",
    btn_grant: "Grant Consent & Auto-Fill",
    via_aadhaar: "(via Aadhaar)",
    via_revenue: "(via Revenue Node)",
    // Dynamic Bot Voice Prompts
    bot_prompt_consent: "Please confirm the digital consent modal on your screen to authorize cross-department data sharing.",
    bot_consent_granted: "Consent granted! Contacting UIDAI and Revenue department nodes...",
    bot_missing_father: "Records verified! However, Father's Occupation is missing in state registries. What is your father's occupation?",
    bot_thank_father: "Thank you! Father's occupation recorded as ",
    bot_ready_submit: ". All fields are complete. Please review and click Submit.",
    bot_denied: "Consent was denied. Due to DPDP privacy regulations, Govt Chain cannot fetch your records without authorization.",
    bot_submitted: "Success! Your scholarship application has been officially submitted. Application ID: "
  },

  hi: {
    speechLang: 'hi-IN',
    brand_sub: "राष्ट्रीय अंतर-संचालनीयता और सेवा ऑर्केस्ट्रेशन परत",
    citizen_portal: "नागरिक पोर्टल",
    tab_orchestrator: "गवर्नमेंट चेन (ऑर्केस्ट्रेटर)",
    tab_aadhaar: "1. यूआईडीएआई आधार पोर्टल",
    tab_income: "2. राज्य राजस्व पोर्टल",
    tab_scholarship: "3. छात्रवृत्ति पोर्टल",
    tab_audit: "अनुपालन और ऑडिट लॉग",
    hero_title: "एक अनुरोध → एकीकृत सार्वजनिक सेवा वितरण",
    hero_desc: "बार-बार फॉर्म भरने की जरूरत नहीं। गवर्नमेंट चेन नागरिक की सहमति से सरकारी रजिस्ट्रीयों से सीधे डेटा जोड़ता है।",
    assistant_title: "गवर्नमेंट चेन वॉयस असिस्टेंट",
    ready_assist: "सहायता के लिए तैयार",
    voice_assist: "आवाज से बोलें",
    bot_welcome: "<strong>गवर्नमेंट चेन</strong> में आपका स्वागत है! मैं आपको छात्रवृत्ति के लिए आवेदन करने और सरकारी दस्तावेजों को स्वतः सत्यापित करने में मदद कर सकता हूँ।",
    chip_scholarship: "छात्रवृत्ति के लिए आवेदन करें",
    chip_docs: "दस्तावेज़ जांचें",
    chat_placeholder: "लिखें या बोलने के लिए 'आवाज से बोलें' पर क्लिक करें...",
    form_title: "छात्रवृत्ति आवेदन (उच्च शिक्षा विभाग)",
    badge_awaiting: "अनुरोध की प्रतीक्षा है",
    autofill_notice: "डेटा सरकारी नोड्स से सुरक्षित रूप से प्राप्त किया गया।",
    label_aadhaar: "आधार संख्या (12 अंक)",
    pick_citizen: "-- नामांकित नागरिक चुनें --",
    label_name: "पूरा नाम",
    label_dob: "जन्म तिथि",
    label_phone: "मोबाइल नंबर",
    label_income: "वार्षिक पारिवारिक आय (₹)",
    label_cert: "आय प्रमाण पत्र संख्या",
    label_address: "स्थायी पता",
    label_father: "पिता / अभिभावक का व्यवसाय",
    not_in_registry: "* (रजिस्ट्री में उपलब्ध नहीं)",
    helper_occupation: "यह जानकारी सरकारी डेटा में नहीं थी; कृपया इसे बोलकर या लिखकर दर्ज करें।",
    label_college: "कॉलेज / संस्थान का नाम",
    btn_clear: "रीसेट करें",
    btn_submit: "समीक्षा करें और जमा करें",
    audit_title: "प्रणाली अंतर-संचालनीयता ऑडिट और सहमति लॉग",
    audit_desc: "गवर्नमेंट चेन के माध्यम से किया गया प्रत्येक स्वचालित अनुरोध डिजिटल रूप से हस्ताक्षरित और रिकॉर्ड किया जाता है।",
    th_time: "समय",
    th_event: "गतिविधि",
    th_applicant: "आवेदक",
    th_aadhaar: "लिंक आधार",
    th_income: "आय प्रमाण पत्र",
    th_consent: "सहमति सत्यापित",
    th_outcome: "परिणाम",
    modal_title: "नागरिक डेटा सहमति अनुरोध",
    modal_desc: "आपकी <strong>उच्च शिक्षा छात्रवृत्ति</strong> को आगे बढ़ाने के लिए, गवर्नमेंट चेन को निम्नलिखित से सत्यापित रिकॉर्ड प्राप्त करने की आपकी अनुमति चाहिए:",
    modal_aadhaar_pt: "यूआईडीएआई आधार:",
    modal_aadhaar_desc: "पूरा नाम, जन्म तिथि, स्थायी पता",
    modal_income_pt: "ई-डिस्ट्रिक्ट राजस्व:",
    modal_income_desc: "वार्षिक पारिवारिक आय, सत्यापित प्रमाण पत्र संदर्भ",
    modal_lock: "डेटा पारगमन में एन्क्रिप्टेड है और कभी भी किसी तीसरे पक्ष के सर्वर पर संग्रहीत नहीं होता है।",
    btn_deny: "अस्वीकार करें",
    btn_grant: "सहमति दें और स्वतः भरें",
    via_aadhaar: "(आधार से प्राप्त)",
    via_revenue: "(राजस्व नोड से प्राप्त)",
    bot_prompt_consent: "कृपया डेटा साझाकरण को अधिकृत करने के लिए अपनी स्क्रीन पर डिजिटल सहमति विंडो की पुष्टि करें।",
    bot_consent_granted: "सहमति स्वीकृत! आधार और राजस्व विभाग से विवरण प्राप्त किए जा रहे हैं...",
    bot_missing_father: "रिकॉर्ड सत्यापित हो गए हैं! हालांकि, 'पिता का व्यवसाय' सरकारी रिकॉर्ड में उपलब्ध नहीं है। कृपया अपने पिता का व्यवसाय बताएं।",
    bot_thank_father: "धन्यवाद! पिता का व्यवसाय दर्ज किया गया: ",
    bot_ready_submit: "। सभी विवरण पूरे हो चुके हैं। कृपया समीक्षा करें और सबमिट करें।",
    bot_denied: "सहमति अस्वीकार कर दी गई। डेटा सुरक्षा नियमों के कारण, हम आपकी अनुमति के बिना रिकॉर्ड नहीं ला सकते।",
    bot_submitted: "सफलता! आपका छात्रवृत्ति आवेदन आधिकारिक रूप से जमा कर दिया गया है। आवेदन संख्या: "
  },

  bn: {
    speechLang: 'bn-IN',
    brand_sub: "জাতীয় আন্তঃকার্যক্ষমতা ও পরিষেবা অর্কেস্ট্রেশন প্ল্যাটফর্ম",
    citizen_portal: "নাগরিক পোর্টাল",
    tab_orchestrator: "গভর্নমেন্ট চেইন (অরকেস্ট্রেটর)",
    tab_aadhaar: "১. ইউআইডিএআই আধার পোর্টাল",
    tab_income: "২. রাজ্য রাজস্ব পোর্টাল",
    tab_scholarship: "৩. স্কলারশিপ পোর্টাল",
    tab_audit: "কমপ্লায়েন্স ও অডিট লগ",
    hero_title: "একটি মাত্র অনুরোধ → সমন্বিত সরকারি পরিষেবা",
    hero_desc: "বারবার ফর্ম পূরণের দিন শেষ। গভর্নমেন্ট চেইন নাগরিকের সম্মতিতে সরকারি রেজিস্ট্রি থেকে সরাসরি তথ্য সংগ্রহ করে।",
    assistant_title: "গভর্নমেন্ট চেইন ভয়েস অ্যাসিস্ট্যান্ট",
    ready_assist: "সহায়তার জন্য প্রস্তুত",
    voice_assist: "ভয়েস অ্যাসিস্ট্যান্ট",
    bot_welcome: "<strong>Govt Chain</strong>-এ আপনাকে স্বাগতম! আমি আপনাকে স্কলারশিপের আবেদন করতে এবং সরকারি ডেটাবেস থেকে স্বয়ংক্রিয়ভাবে তথ্য পূরণ করতে সাহায্য করব।",
    chip_scholarship: "স্কলারশিপের জন্য আবেদন করুন",
    chip_docs: "নথিপত্র যাচাই করুন",
    chat_placeholder: "লিখুন অথবা মুখে বলতে 'ভয়েস অ্যাসিস্ট্যান্ট' ক্লিক করুন...",
    form_title: "স্কলারশিপ আবেদনপত্র (উচ্চশিক্ষা দপ্তর)",
    badge_awaiting: "আবেদনের অপেক্ষায়",
    autofill_notice: "সরকারি রেজিস্ট্রি থেকে তথ্য নিরাপদে লোড করা হয়েছে।",
    label_aadhaar: "আধার নম্বর (১২ সংখ্যার)",
    pick_citizen: "-- নথিভুক্ত নাগরিক নির্বাচন করুন --",
    label_name: "সম্পূর্ণ নাম",
    label_dob: "জন্ম তারিখ",
    label_phone: "মোবাইল নম্বর",
    label_income: "বার্ষিক পারিবারিক আয় (₹)",
    label_cert: "ইনকাম সার্টিফিকেট নম্বর",
    label_address: "স্থায়ী ঠিকানা",
    label_father: "পিতা বা অভিভাবকের পেশা",
    not_in_registry: "* (সরকারি রেকর্ডে অনুপস্থিত)",
    helper_occupation: "এই তথ্যটি আধার বা ইনকাম রেকর্ডে ছিল না; অনুগ্রহ করে মুখে বলুন বা লিখুন।",
    label_college: "কলেজ / প্রতিষ্ঠানের নাম",
    btn_clear: "মুছে ফেলুন",
    btn_submit: "যাচাই করুন ও জমা দিন",
    audit_title: "সিস্টেম ইন্টারঅপারেবিলিটি অডিট ও কনসেন্ট ট্রেইল",
    audit_desc: "Govt Chain-এর মাধ্যমে সম্পন্ন প্রতিটি স্বয়ংক্রিয় লেনদেন ডিজিটালভাবে স্বাক্ষরিত ও সংরক্ষিত থাকে।",
    th_time: "সময়",
    th_event: "কার্যক্রম",
    th_applicant: "আবেদনকারী",
    th_aadhaar: "যুক্ত আধার",
    th_income: "ইনকাম সার্টিফিকেট",
    th_consent: "সম্মতি নিশ্চিত",
    th_outcome: "ফলাফল",
    modal_title: "নাগরিক ডেটা সম্মতির অনুরোধ",
    modal_desc: "আপনার <strong>উচ্চশিক্ষা স্কলারশিপ</strong> সম্পূর্ণ করতে নিম্নলিখিত বিভাগ থেকে তথ্য আনার অনুমতি প্রয়োজন:",
    modal_aadhaar_pt: "আধার রেজিস্ট্রি:",
    modal_aadhaar_desc: "নাম, জন্ম তারিখ, স্থায়ী ঠিকানা",
    modal_income_pt: "রাজস্ব দপ্তর:",
    modal_income_desc: "বার্ষিক পারিবারিক আয়, বৈধ সার্টিফিকেট নম্বর",
    modal_lock: "ডেটা ট্রানজিটে এনক্রিপ্ট করা থাকে এবং কোনও তৃতীয় পক্ষের কাছে জমা থাকে না।",
    btn_deny: "বাতিল করুন",
    btn_grant: "অনুমতি দিন ও স্বয়ংক্রিয় পূরণ করুন",
    via_aadhaar: "(আধার থেকে সংগৃহীত)",
    via_revenue: "(রাজস্ব পোর্টাল থেকে সংগৃহীত)",
    bot_prompt_consent: "সরকারি রেজিস্ট্রি থেকে তথ্য সংগ্রহের জন্য আপনার স্ক্রিনে আসা ডিজিটাল অনুমতি উইন্ডোটি অনুমোদন করুন।",
    bot_consent_granted: "অনুমতি নিশ্চিত হয়েছে! আধার ও রাজস্ব নোড থেকে ডেটা আনা হচ্ছে...",
    bot_missing_father: "সব রেকর্ড যাচাই হয়েছে! কিন্তু 'পিতার পেশা' আধার বা ইনকাম রেকর্ডে নেই। আপনার বাবার পেশা কী?",
    bot_thank_father: "ধন্যবাদ! বাবার পেশা পূরণ করা হলো: ",
    bot_ready_submit: "। সব তথ্য সম্পূর্ণ হয়েছে। এবার ডানদিকের ফর্মটি দেখে নিয়ে Submit বাটনে ক্লিক করুন।",
    bot_denied: "অনুমতি বাতিল করা হয়েছে। নাগরিকের সরাসরি অনুমতি ছাড়া গভর্নমেন্ট চেইন তথ্য সংগ্রহ করতে পারে না।",
    bot_submitted: "অভিনন্দন! আপনার স্কলারশিপ আবেদন সফলভাবে জমা হয়েছে। ট্র্যাকিং আইডি: "
  },

  mr: {
    speechLang: 'mr-IN',
    brand_sub: "राष्ट्रीय इंटरऑपरेबिलिटी आणि सेवा ऑर्केस्ट्रेशन प्लॅटफॉर्म",
    citizen_portal: "नागरिक पोर्टल",
    tab_orchestrator: "गव्हर्नमेंट चेन (ऑर्केस्ट्रेटर)",
    tab_aadhaar: "१. यूआयडीएआय आधार पोर्टल",
    tab_income: "२. राज्य महसूल पोर्टल",
    tab_scholarship: "३. शिष्यवृत्ती पोर्टल",
    tab_audit: "ऑडिट व अनुपालन नोंदी",
    hero_title: "एकच विनंती → एकात्मिक सार्वजनिक सेवा",
    hero_desc: "पुन्हा पुन्हा फॉर्म भरण्याची गरज नाही. नागरिकांच्या संमतीने अधिकृत डेटाबेसमधून थेट माहिती उपलब्ध होते.",
    assistant_title: "गव्हर्नमेंट चेन व्हॉइस असिस्टंट",
    ready_assist: "मदतीसाठी सज्ज",
    voice_assist: "आवाजाद्वारे बोला",
    bot_welcome: "<strong>गव्हर्नमेंट चेन</strong> मध्ये आपले स्वागत आहे! मी तुम्हाला शिष्यवृत्तीसाठी अर्ज करण्यास आणि कागदपत्रे स्वयंचलितपणे सत्यापित करण्यास मदत करू शकतो.",
    chip_scholarship: "शिष्यवृत्तीसाठी अर्ज करा",
    chip_docs: "कागदपत्रे तपासा",
    chat_placeholder: "टाइप करा किंवा बोलण्यासाठी 'आवाजाद्वारे बोला' वर क्लिक करा...",
    form_title: "शिष्यवृत्ती अर्ज (उच्च व तंत्रशिक्षण विभाग)",
    badge_awaiting: "विनंतीची प्रतीक्षा",
    autofill_notice: "माहिती अधिकृत सरकारी नोंदींमधून सुरक्षितपणे भरली गेली आहे.",
    label_aadhaar: "आधार क्रमांक (१२ अंक)",
    pick_citizen: "-- नोंदणीकृत नागरिक निवडा --",
    label_name: "पूर्ण नाव",
    label_dob: "जन्मतारीख",
    label_phone: "मोबाईल क्रमांक",
    label_income: "वार्षिक कौटुंबिक उत्पन्न (₹)",
    label_cert: "उत्पन्न प्रमाणपत्र क्रमांक",
    label_address: "कायमचा पत्ता",
    label_father: "वडिलांचा / पालकांचा व्यवसाय",
    not_in_registry: "* (सरकारी नोंदीत उपलब्ध नाही)",
    helper_occupation: "ही माहिती सरकारी नोंदीत नव्हती; कृपया ती येथे नमूद करा.",
    label_college: "कॉलेज / संस्थेचे नाव",
    btn_clear: "रीसेट करा",
    btn_submit: "तपासा आणि सादर करा",
    audit_title: "प्रणाली इंटरऑपरेबिलिटी आणि संमती नोंदी",
    audit_desc: "गव्हर्नमेंट चेनद्वारे केलेली प्रत्येक स्वयंचलित देवाणघेवाण डिजिटल स्वाक्षरीने सुरक्षित ठेवली जाते.",
    th_time: "वेळ",
    th_event: "क्रिया",
    th_applicant: "अर्जदार",
    th_aadhaar: "आधार लिंक",
    th_income: "उत्पन्न प्रमाणपत्र",
    th_consent: "संमती सत्यापित",
    th_outcome: "निष्कर्ष",
    modal_title: "नागरिक डेटा संमती विनंती",
    modal_desc: "आपल्या <strong>उच्च शिक्षण शिष्यवृत्ती</strong> साठी खालील विभागांमधून अधिकृत माहिती आणण्यासाठी आपली परवानगी आवश्यक आहे:",
    modal_aadhaar_pt: "यूआयडीएआय आधार:",
    modal_aadhaar_desc: "पूर्ण नाव, जन्मतारीख, पत्ता",
    modal_income_pt: "ई-डिस्ट्रिक्ट महसूल:",
    modal_income_desc: "वार्षिक उत्पन्न, प्रमाणित प्रमाणपत्र क्रमांक",
    modal_lock: "डेटा ट्रान्झिटमध्ये एन्क्रिप्ट केलेला असतो आणि तृतीय पक्षाकडे साठवला जात नाही.",
    btn_deny: "नकार द्या",
    btn_grant: "संमती द्या आणि माहिती भरा",
    via_aadhaar: "(आधार नोंदीनुसार)",
    via_revenue: "(महसूल विभागाकडून)",
    bot_prompt_consent: "सरकारी नोंदींमधून माहिती आणण्यासाठी कृपया स्क्रीनवरील संमती पत्र मान्य करा.",
    bot_consent_granted: "संमती मंजूर! आधार आणि महसूल नोंदींमधून माहिती घेतली जात आहे...",
    bot_missing_father: "माहिती सत्यापित झाली आहे! पण 'वडिलांचा व्यवसाय' सरकारी नोंदीत नाही. कृपया वडिलांचा व्यवसाय सांगा.",
    bot_thank_father: "धन्यवाद! वडिलांचा व्यवसाय नोंदवला: ",
    bot_ready_submit: "। सर्व माहिती भरून झाली आहे. कृपया अर्ज तपासून सबमिट करा.",
    bot_denied: "संमती नाकारली गेली. आपल्या परवानगीशिवाय माहिती मिळवता येत नाही.",
    bot_submitted: "अभिनंदन! आपला अर्ज यशस्वीरित्या सादर झाला आहे. अर्ज क्रमांक: "
  }
};

let currentLang = 'en';

// Change Language Function
function changeLanguage(langKey) {
  if (!TRANSLATIONS[langKey]) return;
  currentLang = langKey;
  const t = TRANSLATIONS[langKey];

  // Update speech synthesis and recognition language
  if (speechRecognizer) {
    speechRecognizer.lang = t.speechLang;
  }

  // Update DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update origin tags if already populated
  if (currentAadhaarData) {
    document.getElementById('tag-name').innerText = t.via_aadhaar;
    document.getElementById('tag-dob').innerText = t.via_aadhaar;
    document.getElementById('tag-address').innerText = t.via_aadhaar;
    document.getElementById('tag-income').innerText = t.via_revenue;
    document.getElementById('tag-cert').innerText = t.via_revenue;
  }
}

// ==========================================
// STATE & SPEECH ENGINE
// ==========================================
let isListening = false;
let speechRecognizer = null;
let currentAadhaarData = null;
let currentIncomeData = null;
let awaitingField = null;

const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const voiceBtn = document.getElementById('voiceBtn');
const voiceStatusText = document.getElementById('voiceStatusText');
const consentModal = document.getElementById('consentModal');
const submitAppBtn = document.getElementById('submitAppBtn');
const formStatusBadge = document.getElementById('formStatusBadge');
const autoFillAlert = document.getElementById('autoFillAlert');

// function initSpeech() {
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   if (!SpeechRecognition) {
//     console.warn("Web Speech API not supported. Use Google Chrome or Microsoft Edge.");
//     voiceBtn.style.display = 'none';
//     return;
//   }

//   speechRecognizer = new SpeechRecognition();
//   speechRecognizer.continuous = false;
//   speechRecognizer.interimResults = false;
//   speechRecognizer.lang = TRANSLATIONS[currentLang].speechLang;

//   speechRecognizer.onstart = () => {
//     isListening = true;
//     voiceBtn.classList.add('listening');
//     voiceStatusText.innerText = currentLang === 'bn' ? "শুনছি..." : (currentLang === 'hi' ? "सुन रहा हूँ..." : "Listening...");
//   };

//   speechRecognizer.onresult = (event) => {
//     const transcript = event.results[0][0].transcript;
//     chatInput.value = transcript;
//     handleUserSend();
//   };

//   speechRecognizer.onerror = (event) => {
//     console.error("Speech recognition error:", event.error);
//     stopListening();
//   };

//   speechRecognizer.onend = () => {
//     stopListening();
//   };
// }

// function toggleVoice() {
//   if (!speechRecognizer) return;
//   if (isListening) {
//     speechRecognizer.stop();
//   } else {
//     speechRecognizer.lang = TRANSLATIONS[currentLang].speechLang;
//     speechRecognizer.start();
//   }
// }


// Optimized Mobile Speech Recognition
function initSpeech() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn("Web Speech API not supported on this browser.");
    voiceBtn.style.display = 'none';
    return;
  }

  speechRecognizer = new SpeechRecognition();
  speechRecognizer.continuous = false;
  speechRecognizer.interimResults = false;
  speechRecognizer.maxAlternatives = 1;
  speechRecognizer.lang = TRANSLATIONS[currentLang].speechLang;

  speechRecognizer.onstart = () => {
    isListening = true;
    voiceBtn.classList.add('listening');
    voiceStatusText.innerText = currentLang === 'bn' ? "শুনছি..." : (currentLang === 'hi' ? "सुन रहा हूँ..." : "Listening...");
  };

  speechRecognizer.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    chatInput.value = transcript;
    handleUserSend();
  };

  speechRecognizer.onerror = (event) => {
    console.warn("Speech recognition error:", event.error);
    stopListening();
  };

  speechRecognizer.onend = () => {
    stopListening();
  };
}

// Mobile Audio Unlock
function unlockMobileAudio() {
  if ('speechSynthesis' in window && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
}

// Touch and Click Event Handlers for Mobile
window.addEventListener('DOMContentLoaded', () => {
  initSpeech();
  loadEnrolledCitizens();
  
  // Attach both touch and click for mobile speed
  voiceBtn.addEventListener('click', (e) => {
    unlockMobileAudio();
    toggleVoice();
  });
  
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserSend();
  });

  // Unlock audio context on initial page touch
  document.body.addEventListener('touchstart', unlockMobileAudio, { once: true });
});


function stopListening() {
  isListening = false;
  voiceBtn.classList.remove('listening');
  voiceStatusText.innerText = TRANSLATIONS[currentLang].voice_assist;
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    // Strip HTML tags for clean speech synthesis
    const cleanText = text.replace(/<[^>]*>?/gm, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = TRANSLATIONS[currentLang].speechLang;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

// Navigation Tabs
function switchView(viewId) {
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  
  document.getElementById(`view-${viewId}`).classList.add('active');
  event.currentTarget.classList.add('active');

  if (viewId === 'audit') {
    fetchAuditLogs();
  }
}

// Chat Handlers
function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.innerHTML = `<p>${text}</p>`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  if (sender === 'bot') {
    speakText(text);
  }
}

function sendQuickMessage(type) {
  const t = TRANSLATIONS[currentLang];
  if (type === 'apply_scholarship') {
    chatInput.value = t.chip_scholarship;
  } else {
    chatInput.value = t.chip_docs;
  }
  handleUserSend();
}

function handleUserSend() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage('user', text);
  chatInput.value = '';
  processUserIntent(text);
}

// Intent Processing
function processUserIntent(rawText) {
  const t = TRANSLATIONS[currentLang];
  const query = rawText.toLowerCase();

  // If waiting for father's occupation
  if (awaitingField === 'fatherOccupation') {
    document.getElementById('fatherOccupation').value = rawText;
    awaitingField = null;
    submitAppBtn.disabled = false;
    formStatusBadge.innerText = currentLang === 'bn' ? "জমা দেওয়ার জন্য প্রস্তুত" : (currentLang === 'hi' ? "जमा करने के लिए तैयार" : "Ready for Submission");
    formStatusBadge.className = "badge success";

    addMessage('bot', `${t.bot_thank_father} "${rawText}" ${t.bot_ready_submit}`);
    return;
  }

  // Keywords across English, Hindi, Bengali, Marathi
  const isScholarship = query.includes('scholarship') || query.includes('স্কলারশিপ') || query.includes('छात्रवृत्ति') || query.includes('शिष्यवृत्ती') || query.includes('apply');
  const isDocs = query.includes('document') || query.includes('নথি') || query.includes('दस्तावेज') || query.includes('कागदपत्र');

  if (isScholarship) {
    promptConsent();
  } else if (isDocs) {
    addMessage('bot', "Govt Chain node status: UIDAI Aadhaar [ONLINE], State Revenue [ONLINE].");
  } else {
    promptConsent();
  }
}

function promptConsent() {
  const t = TRANSLATIONS[currentLang];
  consentModal.style.display = 'flex';
  addMessage('bot', t.bot_prompt_consent);
}

function rejectConsent() {
  const t = TRANSLATIONS[currentLang];
  consentModal.style.display = 'none';
  addMessage('bot', t.bot_denied);
}

async function acceptConsent() {
  const t = TRANSLATIONS[currentLang];
  consentModal.style.display = 'none';
  const aadhaarNumber = document.getElementById('aadhaarNumber').value.trim();

  if (!aadhaarNumber) {
    addMessage('bot', "Please enter or pick an Aadhaar number first.");
    return;
  }

  addMessage('bot', t.bot_consent_granted);

  try {
    const aadhaarRes = await fetch(`/api/aadhaar/${aadhaarNumber}`);
    const aadhaarJson = await aadhaarRes.json();

    if (!aadhaarJson.success) {
      addMessage('bot', `Aadhaar ID ${aadhaarNumber} not found. Please register this person in the Aadhaar Portal tab.`);
      return;
    }

    const incomeRes = await fetch(`/api/income/${aadhaarNumber}`);
    const incomeJson = await incomeRes.json();

    currentAadhaarData = aadhaarJson.data;
    currentIncomeData = incomeJson.success ? incomeJson.data : {
      annualIncome: 125000,
      certificateNumber: "WB-REV-AUTO-" + Math.floor(1000 + Math.random() * 9000)
    };

    populateScholarshipForm(currentAadhaarData, currentIncomeData);

    autoFillAlert.style.display = 'flex';
    formStatusBadge.innerText = currentLang === 'bn' ? "তথ্য পূরণ হয়েছে" : (currentLang === 'hi' ? "डेटा भरा गया" : "Data Populated");
    formStatusBadge.className = "badge success";

    setTimeout(() => {
      awaitingField = 'fatherOccupation';
      addMessage('bot', t.bot_missing_father);
    }, 1200);

  } catch (err) {
    console.error(err);
    addMessage('bot', "Failed to connect to government adapter services. Ensure your server is running.");
  }
}

function populateScholarshipForm(aadhaar, income) {
  const t = TRANSLATIONS[currentLang];
  document.getElementById('fullName').value = aadhaar.fullName;
  document.getElementById('dob').value = aadhaar.dob;
  document.getElementById('phone').value = aadhaar.phone;
  document.getElementById('address').value = `${aadhaar.address.street}, ${aadhaar.address.city}, ${aadhaar.address.state} - ${aadhaar.address.pincode}`;
  document.getElementById('annualIncome').value = income.annualIncome;
  document.getElementById('incomeCertNo').value = income.certificateNumber;

  document.getElementById('tag-name').innerText = t.via_aadhaar;
  document.getElementById('tag-dob').innerText = t.via_aadhaar;
  document.getElementById('tag-address').innerText = t.via_aadhaar;
  document.getElementById('tag-income').innerText = t.via_revenue;
  document.getElementById('tag-cert').innerText = t.via_revenue;
}

async function submitScholarshipForm() {
  const t = TRANSLATIONS[currentLang];
  const payload = {
    aadhaarNumber: document.getElementById('aadhaarNumber').value,
    fullName: document.getElementById('fullName').value,
    dob: document.getElementById('dob').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    annualIncome: document.getElementById('annualIncome').value,
    incomeCertificateNo: document.getElementById('incomeCertNo').value,
    fatherOccupation: document.getElementById('fatherOccupation').value,
    collegeName: document.getElementById('collegeName').value,
    consentGranted: true
  };

  try {
    const res = await fetch('/api/scholarship/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data.success) {
      addMessage('bot', `${t.bot_submitted} ${data.applicationId}`);
      formStatusBadge.innerText = `Submitted (${data.applicationId})`;
      submitAppBtn.disabled = true;
    }
  } catch (err) {
    console.error(err);
  }
}

function resetForm() {
  const t = TRANSLATIONS[currentLang];
  document.getElementById('scholarshipForm').reset();
  document.getElementById('tag-name').innerText = "";
  document.getElementById('tag-dob').innerText = "";
  document.getElementById('tag-address').innerText = "";
  document.getElementById('tag-income').innerText = "";
  document.getElementById('tag-cert').innerText = "";
  autoFillAlert.style.display = 'none';
  submitAppBtn.disabled = true;
  formStatusBadge.innerText = t.badge_awaiting;
  formStatusBadge.className = "badge";
}

async function fetchAuditLogs() {
  const tableBody = document.getElementById('auditTableBody');
  tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center;">Loading audit trails...</td></tr>`;

  try {
    const res = await fetch('/api/audit-logs');
    const data = await res.json();

    if (data.logs.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center;">No interoperability transactions recorded yet. Submit a scholarship to create an audit record.</td></tr>`;
      return;
    }

    tableBody.innerHTML = '';
    data.logs.forEach(log => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${log.timestamp}</td>
        <td><strong>${log.event}</strong></td>
        <td>${log.applicant}</td>
        <td><span style="color:#2563eb;">${log.aadhaarRef}</span></td>
        <td>${log.incomeCertRef}</td>
        <td><span style="color:#16a34a; font-weight:bold;">${log.consentGranted ? 'YES (Verified)' : 'NO'}</span></td>
        <td>${log.outcome}</td>
      `;
      tableBody.appendChild(tr);
    });
  } catch (err) {
    console.error(err);
  }
}

async function loadEnrolledCitizens() {
  try {
    const res = await fetch('/api/citizens');
    const data = await res.json();
    if (data.success && data.citizens.length > 0) {
      const select = document.getElementById('citizenDropdown');
      select.innerHTML = `<option value="">${TRANSLATIONS[currentLang].pick_citizen}</option>`;
      data.citizens.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.aadhaarNumber;
        opt.textContent = `${c.fullName} (${c.aadhaarNumber})`;
        select.appendChild(opt);
      });
    }
  } catch(e) {}
}

window.addEventListener('DOMContentLoaded', () => {
  initSpeech();
  loadEnrolledCitizens();
  voiceBtn.addEventListener('click', toggleVoice);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserSend();
  });
});
