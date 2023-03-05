import '@testing-library/jest-dom'
import axios from 'axios'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CuttingMachines from './CuttingMachines'
import * as actions from './actions'

jest.mock('axios')
jest.setTimeout(30000)
const cuttingMachinesResponse = [
  {
    "id": "8bd1304b-5ac6-49ef-93b4-df0a12b93a3b",
    "name": "GF3015",
    "manufacturer": "HGTech"
  },
  {
    "id": "fffe0fd5-5b1e-49d3-b761-8b9518ee1b72",
    "name": "LT8.10",
    "manufacturer": "BLM Group"
  }
]

describe('CuttingMachines:', () => {
  test('Renders CuttingMachines module', () => {
    render(<CuttingMachines />)
    const cuttingMachinesComponent = screen.getByTestId('cutting-machines-component')
    expect(cuttingMachinesComponent).toBeInTheDocument()
  })

  test('Fetches cutting machines from an API and fails', async () => {
    actions.getCuttingMachines = axios.mockRejectedValue(new Error(''))

    render(<CuttingMachines />)
    const refreshButton = screen.getByTestId('refresh-button')
    const loadingComponent = screen.getByTestId('loading-component')
    
    expect(refreshButton).toBeDisabled()
    expect(loadingComponent).toBeInTheDocument()

    const errorText = await screen.findByText(/Something went wrong/, {}, { timeout: 5000 })
    expect(errorText).toBeInTheDocument()

    expect(refreshButton).toBeEnabled()
    expect(loadingComponent).not.toBeInTheDocument()
  })

  test('Fetches cutting machines from an API and displays them', async () => {
    actions.getCuttingMachines = axios.mockResolvedValue(cuttingMachinesResponse)

    render(<CuttingMachines />)
    const refreshButton = screen.getByTestId('refresh-button')
    const loadingComponent = screen.getByTestId('loading-component')
    
    expect(refreshButton).toBeDisabled()
    expect(loadingComponent).toBeInTheDocument()

    const tableItems = await screen.findAllByRole('row', {}, { timeout: 5000 })
    expect(tableItems.length).toBe(3);

    expect(refreshButton).toBeEnabled()
    expect(loadingComponent).not.toBeInTheDocument()
  })

  test('Refresh button click process', async () => {
    actions.getCuttingMachines = axios.mockResolvedValue(cuttingMachinesResponse)

    render(<CuttingMachines />)
    const refreshButton = screen.getByTestId('refresh-button')
    const loadingComponent = screen.getByTestId('loading-component')
    
    expect(refreshButton).toBeDisabled()
    expect(loadingComponent).toBeInTheDocument()

    let tableItems = await screen.findAllByRole('row', {}, { timeout: 5000 })
    expect(tableItems.length).toBe(3);

    expect(refreshButton).toBeEnabled()
    expect(loadingComponent).not.toBeInTheDocument()

    // Click refresh button
    userEvent.click(refreshButton)
    expect(refreshButton).toBeDisabled()
    waitFor(() => expect(loadingComponent).toBeInTheDocument())
    tableItems = await screen.findAllByRole('row', {}, { timeout: 5000 })
    expect(tableItems.length).toBe(3)
    expect(refreshButton).toBeEnabled()
    expect(loadingComponent).not.toBeInTheDocument()
  })
})