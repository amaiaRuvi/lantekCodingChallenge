import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LantekGetCuttingMachinesApp from './LantekGetCuttingMachinesApp'

test('Renders Lantek logo', () => {
  render(<LantekGetCuttingMachinesApp />)
  const lantekLogo = screen.getByTestId('lantek-logo')
  expect(lantekLogo).toBeInTheDocument()
})
