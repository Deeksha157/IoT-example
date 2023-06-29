import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div
            style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: "inherit"}}
                    >
                         Menu
                    </a>
                   
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/cpu"  activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">CPU</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/tables" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Memory</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Disk </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="wifi">
                                Wifi
                            </CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink
                            exact
                            to="/hero404"
                            target="_blank"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="exclamation-circle">
                                404 page
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: "center" }}>
                    <div style={{ padding: "20px 5px" }}>
                        <NavLink exact to="/info" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="info">Info</CDBSidebarMenuItem>
                        </NavLink>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
