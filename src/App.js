// Shared Elements
import Header from "./views/shared/Header.js";
import Footer from "./views/shared/Footer.js";

//  Home and Tasks
import Home from "./views/Home.js";
import Tasks from "./views/Tasks.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";  

function App() {
  return (
    
    <div>
        <Header />
     <main>
      {/* use the classes from react-router-dom to set up the url maping for each page */}
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tasks" element={<Tasks />} />
         </Routes>
         </BrowserRouter>
     </main>
       <Footer />
      
    </div>
   
  );
}

export default App;
