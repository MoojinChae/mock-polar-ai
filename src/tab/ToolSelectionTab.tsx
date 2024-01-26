/* eslint-disable react/jsx-key */
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

type ToolSelectionProps = {
  tools: Array<string>;
};

const ToolSelectionTab = (props: ToolSelectionProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const listTabs = props.tools.map((tool, index) => (
    <Tab label={tool} {...a11yProps(index)} />
  ));

  const listTabPanels = props.tools.map((tool, index) => (
    <TabPanel value={value} index={index}>
      <div className="my-4">{tool}</div>
      <Button variant="contained">Download</Button>
    </TabPanel>
  ));

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {listTabs}
      </Tabs>
      {listTabPanels}
    </Box>
  );
};

export { ToolSelectionTab };
