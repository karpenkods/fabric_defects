import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import FabricOptions from './components/FabricOptions/FabricOptions'
import FabricOptionsAgain from './components/FabricOptions/FabricOptionsAgain'
import Examination from './components/Examination/Examination'
import ExaminationTurn from './components/Examination/ExaminationTurn'
import ExaminationAgain from './components/Examination/ExaminationAgain'
import Results from './components/Results/Results'
import ResultsAgain from './components/Results/ResultsAgain'
import CheckRegister from './components/CheckRegister/CheckRegister'
import DefectiveCard from './components/DefectiveCard/DefectiveCard'
import './index.scss'

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/fabric_defects" element={<Home />} />
        <Route exact path="/new_check" element={<FabricOptions />} />
        <Route exact path="/new_check_again" element={<FabricOptionsAgain />} />
        <Route exact path="/examination" element={<Examination />} />
        <Route exact path="/examination_turn" element={<ExaminationTurn />} />
        <Route exact path="/examination_again" element={<ExaminationAgain />} />
        <Route exact path="/check_register" element={<CheckRegister />} />
        <Route exact path="/scan_results" element={<Results />} />
        <Route exact path="/scan_results_again" element={<ResultsAgain />} />
        <Route exact path="/defective_card" element={<DefectiveCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
