"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const link_1 = require("next/link");
const AppLink = ({ children, className, href }) => {
    return react_1.default.createElement(link_1.default, { href: href },
        react_1.default.createElement("a", { className: className }, children));
};
const AppNavBar = () => {
    return (react_1.default.createElement("div", { className: "navbar-wrapper" },
        react_1.default.createElement(react_bootstrap_1.Navbar, { expand: "lg", className: "navbar-dark fj-mw9" },
            react_1.default.createElement(AppLink, { href: "/", className: "navbar-brand mr-3 font-weight-bold" }, "NikitaShaban"),
            react_1.default.createElement(react_bootstrap_1.Navbar.Toggle, null),
            react_1.default.createElement(react_bootstrap_1.Navbar.Collapse, null,
                react_1.default.createElement(react_bootstrap_1.Nav, { className: "mr-auto" },
                    react_1.default.createElement(AppLink, { className: "nav-link mr-3", href: "/portfolios" }, "Portfolios"),
                    react_1.default.createElement(AppLink, { className: "nav-link mr-3", href: "/forum/categories" }, "Forum"),
                    react_1.default.createElement(AppLink, { className: "nav-link mr-3", href: "/cv" }, "Cv")),
                react_1.default.createElement(react_bootstrap_1.Nav, null,
                    react_1.default.createElement(AppLink, { className: "nav-link mr-3", href: "/login" }, "Sign In"),
                    react_1.default.createElement(AppLink, { className: "mr-3 btn btn-success bg-green-2 bright", href: "/register" }, "Sign Up"))))));
};
exports.default = AppNavBar;
