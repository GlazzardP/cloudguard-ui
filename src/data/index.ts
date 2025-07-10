export type Workspace = string;

export type Tenant = {
  tenantName: string;
  workspaces: Workspace[];
};

export type Company = {
  companyName: string;
  tenants: Tenant[];
};

export type HeaderData = Company[];

export const FAKE_HEADER_DATA: HeaderData = [
  {
    companyName: "ABC",
    tenants: [
      {
        tenantName: "Tenant X",
        workspaces: ["Workspace X"],
      },
      {
        tenantName: "Tenant Z",
        workspaces: ["Workspace A", "Workspace B", "Workspace C"],
      },
    ],
  },
  {
    companyName: "XYZ (Trial)",
    tenants: [
      {
        tenantName: "Tenant 1.2.4",
        workspaces: ["Workspace 1"],
      },
      {
        tenantName: "Tenant",
        workspaces: [
          "Workspace Manchester",
          "Workspace London",
          "Workspace Bristol",
        ],
      },
    ],
  },
];

export type IncidentLevel = "low" | "med" | "high";

export interface Incident {
  level: IncidentLevel;
  incidentName: string;
  code: string;
  date: string; // could be Date type if you parse it, but string for raw data
}

export const FAKE_TRIAGE_DATA: Incident[] = [
  {
    level: "high",
    incidentName: "Data Corruption",
    code: "DAT345",
    date: "2025-07-05",
  },
  {
    level: "high",
    incidentName: "Security Breach",
    code: "SEC789",
    date: "2025-07-07",
  },
  {
    level: "med",
    incidentName: "Database Timeout",
    code: "DBT456",
    date: "2025-07-08",
  },
  {
    level: "low",
    incidentName: "Network Latency",
    code: "NET123",
    date: "2025-07-09",
  },

  {
    level: "low",
    incidentName: "Server Maintenance",
    code: "SRV012",
    date: "2025-07-06",
  },
];
