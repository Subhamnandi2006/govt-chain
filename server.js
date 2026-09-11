const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- IN-MEMORY REGISTRIES WITH SRIJOY RAY'S DATA ---
const aadhaarDatabase = {
  "123456789012": {
    name: "Srijoy Ray",
    dob: "2002-08-15",
    gender: "Male",
    phone: "+91 9876543210",
    address: "12/A Salt Lake Sector V, Kolkata, WB",
    pincode: "700091"
  }
};

const incomeDatabase = {
  "123456789012": {
    certNumber: "WB-REV-2026-9812",
    annualIncome: 120000,
    validUpto: "2027-03-31",
    issueDate: "2026-01-10",
    status: "Verified Active",
    fatherOccupation: "Small Business / Service",
    issuingAuthority: "Sub-Divisional Officer (Revenue), West Bengal"
  }
};

let scholarshipSubmissions = [];

let auditLogs = [
  {
    id: "AUD-8901",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    event: "Scholarship Consent Granted",
    subject: "Aadhaar: 123456789012 (Srijoy Ray)",
    requestedBy: "Ministry of Education (NSP Portal)",
    scope: "Basic Identity & Income Proof",
    status: "APPROVED_BY_USER",
    receiptHash: "0x8fa2...c31b"
  },
  {
    id: "AUD-8902",
    timestamp: new Date(Date.now() - 1800000).toISOString(),
    event: "Zero-Knowledge Eligibility Check",
    subject: "Aadhaar: 123456789012 (Srijoy Ray)",
    requestedBy: "Revenue Dept / Scholarship Service",
    scope: "Annual Income ≤ 2,50,000 INR (Verified: ₹1,20,000)",
    status: "VERIFIED_VALID",
    receiptHash: "0x91b4...e881"
  }
];

function recordAuditLog(event, subject, requestedBy, scope, status) {
  const hash = "0x" + Math.random().toString(16).substring(2, 10) + "..." + Math.random().toString(16).substring(2, 6);
  const log = {
    id: "AUD-" + Math.floor(1000 + Math.random() * 9000),
    timestamp: new Date().toISOString(),
    event,
    subject,
    requestedBy,
    scope,
    status,
    receiptHash: hash
  };
  auditLogs.unshift(log);
  return log;
}

// --- CONSOLIDATED API ROUTES ---

// Aadhaar API
app.get('/api/aadhaar/:id', (req, res) => {
  const record = aadhaarDatabase[req.params.id];
  if (!record) return res.status(404).json({ error: "Aadhaar record not found" });
  recordAuditLog("Aadhaar Data Verified", `UID: ${req.params.id} (${record.name})`, "Citizen Consent Token", "Name, DOB, Address", "SUCCESS");
  res.json({ success: true, data: record });
});

app.post('/api/enroll-aadhaar', (req, res) => {
  const { aadhaarNumber, name, dob, gender, phone, address, pincode } = req.body;
  if (!aadhaarNumber || !name) return res.status(400).json({ error: "Missing required fields" });
  aadhaarDatabase[aadhaarNumber] = { name, dob, gender, phone, address, pincode };
  recordAuditLog("New Aadhaar Enrollment", `UID: ${aadhaarNumber} (${name})`, "UIDAI Enrollment Desk", "Full Demographic Record", "ENROLLED");
  res.json({ success: true, message: "Aadhaar enrolled successfully", data: aadhaarDatabase[aadhaarNumber] });
});

// Income & Revenue API
app.get('/api/income/:id', (req, res) => {
  const record = incomeDatabase[req.params.id];
  if (!record) return res.status(404).json({ error: "Income certificate record not found" });
  recordAuditLog("Income Proof Checked", `UID: ${req.params.id}`, "Citizen Request", `Cert: ${record.certNumber}, Income: ₹${record.annualIncome}`, "SUCCESS");
  res.json({ success: true, data: record });
});

app.post('/api/issue-certificate', (req, res) => {
  const { aadhaarNumber, certNumber, annualIncome, validUpto, fatherOccupation } = req.body;
  if (!aadhaarNumber || !annualIncome) return res.status(400).json({ error: "Missing required fields" });
  incomeDatabase[aadhaarNumber] = {
    certNumber: certNumber || `WB-REV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    annualIncome: Number(annualIncome),
    validUpto: validUpto || "2027-03-31",
    issueDate: new Date().toISOString().split('T')[0],
    status: "Verified Active",
    fatherOccupation: fatherOccupation || "Not Specified",
    issuingAuthority: "Sub-Divisional Officer (Revenue), West Bengal"
  };
  recordAuditLog("Income Certificate Issued", `UID: ${aadhaarNumber}`, "Revenue Tehsildar Desk", "Income Assessment", "ISSUED");
  res.json({ success: true, message: "Certificate issued successfully", data: incomeDatabase[aadhaarNumber] });
});

// Scholarship API
app.post('/api/scholarships', (req, res) => {
  const submission = {
    id: "SCH-" + (1000 + scholarshipSubmissions.length + 1),
    submittedAt: new Date().toISOString(),
    ...req.body
  };
  scholarshipSubmissions.push(submission);
  recordAuditLog("Scholarship Submitted", `Applicant: ${submission.name || 'Srijoy Ray'}`, "National Scholarship Portal", "Scholarship Application Package", "PENDING_VERIFICATION");
  res.json({ success: true, message: "Scholarship application submitted successfully", applicationId: submission.id, data: submission });
});

// Audit API
app.get('/api/audit-logs', (req, res) => {
  const { search, status } = req.query;
  let result = auditLogs;
  if (search) {
    const s = String(search).toLowerCase();
    result = result.filter(l =>
      l.event.toLowerCase().includes(s) ||
      l.subject.toLowerCase().includes(s) ||
      l.requestedBy.toLowerCase().includes(s)
    );
  }
  if (status && status !== 'all') {
    result = result.filter(l => l.status === status);
  }
  res.json({ success: true, logs: result, total: result.length });
});

// --- STATIC FRONTEND ROUTES ---
const PUB = path.join(__dirname, 'public');
const staticOpts = { index: false };

app.get('/', (req, res) => res.sendFile(path.join(PUB, 'index.html')));
app.get('/scholarship', (req, res) => res.sendFile(path.join(PUB, 'scholarship.html')));
app.get('/aadhaar', (req, res) => res.sendFile(path.join(PUB, 'aadhaar.html')));
app.get('/income', (req, res) => res.sendFile(path.join(PUB, 'income.html')));
app.get('/audit', (req, res) => res.sendFile(path.join(PUB, 'audit.html')));

// Assets & static resources
app.use(express.static(PUB, staticOpts));

// Fallback: unknown routes go to index
app.get('*', (req, res) => res.sendFile(path.join(PUB, 'index.html')));

app.listen(PORT, () => {
  console.log(`Gov-Chain running on port ${PORT}`);
});
