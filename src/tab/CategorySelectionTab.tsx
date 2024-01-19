import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Category = {
  name: string;
}

type CategorySelectionProps = {
  categories: Array<Category>;
  selectedCategory: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  color: string;
}

const CategorySelectionTab = (props: CategorySelectionProps) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: props.color,
      },
    },
  });

  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    props.setCategory(newValue);
  };

  const listTabs = props.categories.map((category, index) => 
    <Tab label={category.name} {...a11yProps(index)} />
  );

  return (
    <ThemeProvider theme = {theme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs
            value={props.selectedCategory}
            onChange={handleChange}
            textColor='primary'
            indicatorColor='primary'
            variant="scrollable"
            scrollButtons="auto"
            centered
          >
            {listTabs}
          </Tabs>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export { CategorySelectionTab };