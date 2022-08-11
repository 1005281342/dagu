import React from 'react';
import { Stack, Box, Chip } from '@mui/material';
import LabeledItem from './LabeledItem';
import { DAG } from '../models';

type Props = {
  dag: DAG;
};

function ConfigInfoTable({ dag: config }: Props) {
  const preconditions = config.Preconditions?.map((c) => (
    <li>
      {c.Condition}
      {' => '}
      {c.Expected}
    </li>
  ));
  return (
    <Stack direction="column" spacing={1}>
      <LabeledItem label="Name">{config.Name}</LabeledItem>
      <LabeledItem label="Schedule">
        <Stack direction={'row'}>
          {config.ScheduleExp?.map((s) => (
            <Chip
              key={s}
              sx={{
                fontWeight: 'semibold',
                marginRight: 1,
              }}
              size="small"
              label={s}
            />
          ))}
        </Stack>
      </LabeledItem>
      <LabeledItem label="Description">{config.Description}</LabeledItem>
      <LabeledItem label="Max Active Runs">{config.MaxActiveRuns}</LabeledItem>
      <LabeledItem label="Params">{config.Params}</LabeledItem>
      <Stack direction={'column'}>
        <React.Fragment>
          <LabeledItem label="Preconditions">{null}</LabeledItem>
          <Box sx={{ pl: 2 }}>
            <ul>{preconditions}</ul>
          </Box>
        </React.Fragment>
      </Stack>
    </Stack>
  );
}

export default ConfigInfoTable;
