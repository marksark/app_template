import React, { useState } from 'react';
import Layout from '../components/layout';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Everyone", content: "Everyone" },
    { label: "Students", content: "Students" },
    { label: "Parents", content: "Parents" },
    { label: "C. Members", content: "Community Members" }
  ]

  const _handleTabChange = (e, newValue) => {
    setActiveTab(newValue);
  }


  const TabPanel = ({ children, index }) => {

    return (
      <div
        role="tabpanel"
        id={`simple-tabpanel-${index}`}
      >
        {activeTab === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Layout>
      <Stack direction="row" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={_handleTabChange}>
          {tabs.map((tab) => (
            <Tab key={tab.label} label={tab.label} />
          ))}
        </Tabs>
        <Button variant="contained" disableElevation sx={{ ml: 'auto', borderRadius: 0, whiteSpace: 'nowrap', minWidth: 'max-content' }}>New Client +</Button>
      </Stack>
      {tabs.map((tab, index) => (
        <TabPanel key={tab.label} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Layout>

  );
}