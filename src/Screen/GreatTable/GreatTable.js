import React from 'react';
import './GreatTable.scss';
import GreatTableMenus from './GreatTableMenus/GreatTableMenus';
import GreatTableBody from './GreatTableBody/GreatTableBody';
const GreatTable = () => {
    return (
        <div className="greatTable__container">
            <div className="greatTable__menus">
              <GreatTableMenus />
            </div>
            <div className="greatTable__body">
                 <GreatTableBody />
            </div>
        </div>
    )
}

export default GreatTable;

