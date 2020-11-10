import React, { useCallback, useEffect, useState, useContext } from 'react';
import { UserContext } from '../../components/UserContextProvider';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Props {
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  capitalize: {
    textTransform: "capitalize"
  }
});

function createData(key: string, value: string) {
  return { key, value };
}


const Userinfo: React.FC<Props> = (props) => {
  const { userinfo } = useContext(UserContext);
  const rows = Object.entries(userinfo).map(entry => createData(entry[0], entry[1]));
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <caption>A basic table example with a caption</caption>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.key}>
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Userinfo;