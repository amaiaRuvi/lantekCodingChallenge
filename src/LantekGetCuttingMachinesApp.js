import CuttingMachines from './components/cuttingMachines/CuttingMachines'

const LantekGetCuttingMachinesApp = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          href={process.env.REACT_APP_LANTEK_LINK}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img data-testid='lantek-logo' src={process.env.PUBLIC_URL + '/images/lantek_logo.png'} className='App-logo' alt='logo' />
        </a>
        <span>Sheet Metal Solutions</span>
      </header>
      <CuttingMachines />
    </div>
  )
}

export default LantekGetCuttingMachinesApp
