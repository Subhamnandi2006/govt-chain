const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// MOCK DATABASE / REGISTRIES
// ==========================================
const MOCK_AADHAAR_DB = {
  "123456789012": {
    aadhaarNumber: "123456789012",
    fullName: "Srinjoy Roy",
    dob: "2002-08-15",
    gender: "Male",
    phone: "9876543210",
    address: {
      street: "12/A Salt Lake Sector V",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700091"
    },
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  }
};

const MOCK_INCOME_DB = {
  "123456789012": {
    certificateNumber: "WB-REV-2026-9812",
    beneficiaryName: "Srinjoy Roy",
    annualIncome: 120000,
    incomeBracket: "Below 1.5 Lakhs (EWS)",
    financialYear: "2025-2026",
    issuingAuthority: "Office of the Sub-Divisional Officer, Salt Lake",
    issueDate: "2026-01-10",
    status: "VALID"
  }
};

// In-memory submissions & audit trail
const scholarshipApplications = [];
const auditTrailLogs = [];

// ==========================================
// REST APIS FOR EXTERNAL PORTALS
// ==========================================

// 1. Mock Aadhaar API (UIDAI Simulator)
app.get('/api/aadhaar/:id', (req, res) => {
  const record = MOCK_AADHAAR_DB[req.params.id];
  if (!record) {
    return res.status(404).json({ success: false, message: "Aadhaar record not found" });
  }
  res.json({ success: true, data: record });
});

// Register / Enroll new Aadhaar record + Auto-link Revenue registry
app.post('/api/aadhaar/enroll', (req, res) => {
  const { fullName, dob, gender, phone, address, annualIncome } = req.body;
  const aadhaarNumber = Math.floor(100000000000 + Math.random() * 900000000000).toString();

  // 1. Save in UIDAI Registry
  MOCK_AADHAAR_DB[aadhaarNumber] = {
    aadhaarNumber,
    fullName,
    dob: dob || "2001-05-20",
    gender: gender || "Male",
    phone: phone || "9876500000",
    address: address || {
      street: "Main Road",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700001"
    },
    photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
  };

  // 2. Automatically link in State Revenue Portal with a verified certificate
  const incomeValue = annualIncome ? Number(annualIncome) : 140000;
  MOCK_INCOME_DB[aadhaarNumber] = {
    certificateNumber: "WB-REV-2026-" + Math.floor(1000 + Math.random() * 9000),
    beneficiaryName: fullName,
    annualIncome: incomeValue,
    incomeBracket: incomeValue <= 150000 ? "Below 1.5 Lakhs (EWS)" : "General",
    financialYear: "2025-2026",
    issuingAuthority: "Office of the Sub-Divisional Officer",
    issueDate: new Date().toISOString().split('T')[0],
    status: "VALID"
  };

  res.json({
    success: true,
    aadhaarNumber,
    fullName,
    message: "Aadhaar enrolled and automatically linked to State Revenue Registry!"
  });
});

// Endpoint to list all registered citizens for easy testing
app.get('/api/citizens', (req, res) => {
  const list = Object.values(MOCK_AADHAAR_DB).map(u => ({
    aadhaarNumber: u.aadhaarNumber,
    fullName: u.fullName
  }));
  res.json({ success: true, citizens: list });
});



// 2. Mock Income Certificate API (Revenue Dept Simulator)
app.get('/api/income/:id', (req, res) => {
  const record = MOCK_INCOME_DB[req.params.id];
  if (!record) {
    return res.status(404).json({ success: false, message: "Income record not found" });
  }
  res.json({ success: true, data: record });
});

// Issue / Create new Income Certificate record
app.post('/api/income/issue', (req, res) => {
  const { aadhaarNumber, beneficiaryName, annualIncome } = req.body;
  const certificateNumber = "WB-REV-2026-" + Math.floor(1000 + Math.random() * 9000);

  MOCK_INCOME_DB[aadhaarNumber] = {
    certificateNumber,
    beneficiaryName,
    annualIncome: Number(annualIncome),
    incomeBracket: Number(annualIncome) <= 150000 ? "EWS (< 1.5L)" : "General",
    financialYear: "2025-2026",
    issuingAuthority: "Office of the Sub-Divisional Officer, Salt Lake",
    issueDate: new Date().toISOString().split('T')[0],
    status: "VALID"
  };

  res.json({ success: true, certificateNumber, message: "Certificate issued successfully" });
});


// 3. Scholarship Application Submission API
app.post('/api/scholarship/submit', (req, res) => {
  const payload = req.body;
  const applicationId = "SCH-MH-" + Math.floor(100000 + Math.random() * 900000);
  
  const applicationRecord = {
    applicationId,
    timestamp: new Date().toISOString(),
    status: "UNDER_REVIEW",
    data: payload
  };

  scholarshipApplications.push(applicationRecord);

  // Write audit trail
  auditTrailLogs.unshift({
    id: "LOG-" + Date.now(),
    timestamp: new Date().toLocaleTimeString(),
    event: "Scholarship Application Created",
    applicant: payload.fullName,
    aadhaarRef: payload.aadhaarNumber,
    incomeCertRef: payload.incomeCertificateNo,
    consentGranted: payload.consentGranted === true,
    outcome: "Success (Submitted to Higher Education Dept)"
  });

  res.json({
    success: true,
    applicationId,
    message: "Scholarship application successfully submitted via Govt Chain orchestration layer."
  });
});

// 4. Audit Log Endpoint (For Admin & Compliance Review)
app.get('/api/audit-logs', (req, res) => {
  res.json({ success: true, logs: auditTrailLogs });
});
``
// Server listener
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Govt Chain Server running locally at http://localhost:${PORT}`);
  console.log(`For Mobile access on your Wi-Fi: http://<YOUR-PC-IP>:${PORT}`);
});

