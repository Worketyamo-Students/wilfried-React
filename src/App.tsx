/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 03/08/2024 - 16:45:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/08/2024
    * - Author          : Hp
    * - Modification    : 
**/

import Body from './components/body'
import Footer from './components/footer'
import Nav_bar from './components/nav_bar'
import './index.css'
function App() {
  return (
    <>
      <div className='h-[100vh] overflow-hidden '>
        <Nav_bar/>
        <Body/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
