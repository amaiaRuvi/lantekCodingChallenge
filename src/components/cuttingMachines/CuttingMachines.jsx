import React, { useState, useEffect  } from "react"

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { getCuttingMachines } from './actions'

const useStyles = makeStyles({
  table: {
    padding: '50px',
    width: 'inherit'
  },
  tableCell: {
    borderBottom: '1px solid #00918f'
  },
  button: {
    fontSize: '18px',
    lineHeight: '25px',
    width: '100%',
    maxWidth: '205px',
    minHeight: '55px',
    padding: '5px 0',
    backgroundColor: '#00918f',
    borderRadius: 0,
    color: 'white',
    '&:hover': {
      backgroundColor: '#be5108',
      color: 'white',
    },
    '&:disabled': {
      backgroundColor: '#00918f4a',
      color: 'white',
    }
  },
  alert: {
    padding: '10px',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
})

const CuttingMachines = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorText, setErrorText] = useState('')
  const [cuttingMachines, setCuttingMachines] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getCuttingMachines()
      .then(response => {
        setCuttingMachines(response)
        setIsLoading(false)
        setErrorText('')
      })
      .catch(error => {
        setErrorText('Something went wrong: ' + error?.message)
        setIsLoading(false)
      })
    }, 500)
  }, [])

  const handleRefreshButtonClick = () => {
    setIsLoading(true)
    setErrorText('')

    setTimeout(() => {
      getCuttingMachines()
      .then(response => {
        setCuttingMachines(response)
        setIsLoading(false)
        setErrorText('')
      })
      .catch(error => {
        setErrorText('Something went wrong: ' + error?.message)
        setIsLoading(false)
      })
    }, 500)
  }

  const classes = useStyles()

  return (
    <div data-testid='cutting-machines-component'>
      <h2 className="title">
        Available cutting machines:
      </h2>
      <Button data-testid='refresh-button' className={classes.button} onClick={handleRefreshButtonClick} disabled={isLoading}>
        {isLoading && <CircularProgress data-testid='loading-component' size={24} style={{ position: 'absolute' }} />}
        Refresh
      </Button>
      {errorText !== '' && <Typography className={classes.alert}>
        {errorText}
      </Typography>}
      {errorText === '' && !isLoading &&
        <TableContainer className={classes.table}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Name</TableCell>
                <TableCell className={classes.tableCell} align="left">Manufacturer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cuttingMachines.map((machine) => (
                <TableRow key={machine.id}>
                  <TableCell className={classes.tableCell} component="th" scope="row">
                    {machine.name}
                  </TableCell>
                  <TableCell align="left">{machine.manufacturer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </div>
  )
}

export default CuttingMachines