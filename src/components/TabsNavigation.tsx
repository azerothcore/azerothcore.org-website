import * as React from 'react';
import cx from 'classnames';
import { Nav, NavItem, NavLink } from 'reactstrap';

type TabItem = {
  label: string;
  id: string;
};

type TabsNavigationProps = {
  tabs: TabItem[];
  activeTab: string;
  toggle: Function;
};

const TabsNavigation: React.FC<TabsNavigationProps> = ({
  tabs,
  activeTab,
  toggle,
}) => {
  return (
    <Nav tabs>
      {tabs.map(tab => {
        return (
          <NavItem key={tab.id}>
            <NavLink
              className={cx({ active: activeTab === tab.id })}
              onClick={() => {
                toggle(tab.id);
              }}
            >
              {tab.label}
            </NavLink>
          </NavItem>
        );
      })}
      <style jsx global>
        {`
          .nav-tabs .nav-link.active,
          .nav-tabs .nav-item.show .nav-link,
          .nav-tabs .nav-link {
            color: #d90000;
          }
          .nav-tabs .nav-link:hover,
          .nav-tabs .nav-link:focus {
            color: #d90000;
          }
          .nav-tabs .nav-item {
            cursor: pointer;
          }
        `}
      </style>
    </Nav>
  );
};

export default TabsNavigation;
