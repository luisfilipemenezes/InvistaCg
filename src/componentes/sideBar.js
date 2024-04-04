import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faStore } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState('4rem');
  const [labelsVisible, setLabelsVisible] = useState(false);
  const [changeMargin, setChangeMargin] = useState('4rem')

  const toggleSidebar = () => {
    if (sidebarWidth === '16rem') {
      setSidebarWidth('4rem');
      setLabelsVisible(false);
      setChangeMargin ('4rem')
      console.log(labelsVisible)
    } else {
      setSidebarWidth('16rem');
      setLabelsVisible(true);
      setChangeMargin ('16rem')

      console.log(labelsVisible)

    }
  };

  const highlightSidebarItem = () => {
    // Implemente a lógica para destacar o item da barra lateral aqui
  };

  return (
    <div>
      <nav className="bg-white border-b border-gray-300">
        <div className="flex justify-between items-center px-6">
          <button id="menu-button" onClick={toggleSidebar} className="h-20 w-28">
            <FontAwesomeIcon icon={faBars} className="text-cyan-500 text-lg" />
          </button>
        </div>
      </nav>

      <div id="sidebar" style={{ width: sidebarWidth }} className="w-28 bg-white h-screen fixed rounded-none border-none transition-all duration-200 ease-in-out overflow-hidden">
        <div className="p-2 space-y-4">
          <button className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group" onClick={highlightSidebarItem}>
            <FontAwesomeIcon icon={faHome} className="text-lg" />

            {labelsVisible && <span className="font-medium transition-all duration-200 ">Inicio</span>}
          </button>

          <button className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group" onClick={highlightSidebarItem}>
            <FontAwesomeIcon icon={faStore} className="text-lg" />
            {labelsVisible && <span className="font-medium transition-all duration-200 ">Comercios</span>}
          </button>
            
        </div>
      </div>

      <div style={{marginLeft:changeMargin}}  className="ml-16 bg-gray-100 h-screen fixed w-full  transition-all duration-200 ease-in-out">
        {/* Conteúdo do lado direito da barra lateral */}
      </div>

      
    </div>
  );
};

export default Sidebar;
