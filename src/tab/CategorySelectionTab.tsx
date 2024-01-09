import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { ToolSelectionTab } from './ToolSelectionTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Category = {
  name: string;
  tools: Array<string>;
}

type CategorySelectionProps = {
  categories: Array<Category>;
}

const CategorySelectionTab = (props: CategorySelectionProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const listTabs = props.categories.map((category, index) => 
    <Tab label={category.name} {...a11yProps(index)} />
  );

  const listCustomTabPanels = props.categories.map((category, index) => 
    <CustomTabPanel value={value} index={index}>
      <ToolSelectionTab tools={category.tools} />
    </CustomTabPanel>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          {listTabs}
        </Tabs>
      </Box>

      {listCustomTabPanels}
    </Box>
  );
}


export { CategorySelectionTab };