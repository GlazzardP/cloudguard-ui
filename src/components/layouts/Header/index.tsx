import { useState } from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import profilepic from "../../../assets/images/profilepic.jpg";

import { FAKE_HEADER_DATA } from "../../../data";
import { Button, MenuItem, Select, Typography, useTheme } from "@mui/material";

interface HeaderProps {
  sideBarWidth: number;
}

const Header = ({ sideBarWidth }: HeaderProps) => {
  const [selectedCompany, setSelectedCompany] = useState(
    FAKE_HEADER_DATA[0].companyName
  );
  const [selectedTenant, setSelectedTenant] = useState(
    FAKE_HEADER_DATA[0].tenants[0].tenantName
  );
  const [selectedWorkspace, setSelectedWorkspace] = useState(
    FAKE_HEADER_DATA[0].tenants[0].workspaces[0]
  );
  const { custom } = useTheme();

  const selectedCompanyObj = FAKE_HEADER_DATA.find(
    (company) => company.companyName === selectedCompany
  );

  const selectedTenantObj = selectedCompanyObj?.tenants.find(
    (tenant) => tenant.tenantName === selectedTenant
  );

  return (
    <Box
      position="fixed"
      sx={{
        top: 0,
        width: { sm: `calc(100% - ${sideBarWidth}px)` },
        ml: `${sideBarWidth}px`,
        height: "10vh",
        backgroundColor: custom.colors.backgroundLight,

        paddingInline: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Select
            sx={{ minWidth: "125px", height: "3rem" }}
            value={selectedCompany}
            label="Company"
            onChange={(e) => {
              setSelectedCompany(e.target.value);
              setSelectedTenant("");
              setSelectedWorkspace("");
            }}
          >
            {FAKE_HEADER_DATA.map((header) => (
              <MenuItem key={header.companyName} value={header.companyName}>
                {header.companyName}
              </MenuItem>
            ))}
          </Select>

          <Select
            value={selectedTenant}
            disabled={!selectedCompany}
            label="Tenant"
            onChange={(e) => {
              setSelectedTenant(e.target.value);
              setSelectedWorkspace("");
            }}
            sx={{ minWidth: "125px", height: "3rem" }}
          >
            {selectedCompanyObj?.tenants.map((tenant) => (
              <MenuItem key={tenant.tenantName} value={tenant.tenantName}>
                {tenant.tenantName}
              </MenuItem>
            ))}
          </Select>

          <Select
            value={selectedWorkspace}
            label="Workspace"
            onChange={(e) => setSelectedWorkspace(e.target.value)}
            disabled={!selectedTenant}
            sx={{ minWidth: "125px", height: "3rem" }}
          >
            {selectedTenantObj?.workspaces.map((workspace) => (
              <MenuItem key={workspace} value={workspace}>
                {workspace}
              </MenuItem>
            ))}
          </Select>
        </Toolbar>
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Button variant="outlined">Raise a ticket</Button>
          <Button variant="outlined">ICON</Button>
          <Typography fontWeight={600}>RADICANT</Typography>
          <Box
            component="img"
            src={profilepic}
            alt={"Profile Pic"}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #ccc", // Optional border
            }}
          />
        </Toolbar>
      </Box>
    </Box>
  );
};
export default Header;
