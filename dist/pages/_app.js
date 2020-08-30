"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
require("@/styles/index.scss");
const NavBar_1 = require("../components/shared/NavBar");
const Hero_1 = require("../components/shared/Hero");
const MyApp = ({ Component, pageProps }) => {
    const isHonmePage = () => Component.name === "Home";
    return (react_1.default.createElement("div", { className: "portfolio-app" },
        react_1.default.createElement(NavBar_1.default, null),
        isHonmePage() && react_1.default.createElement(Hero_1.default, null),
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(Component, Object.assign({}, pageProps))),
        isHonmePage() && (react_1.default.createElement("footer", { id: "sticky-footer", className: "py-4 bg-black text-white-50 py-3" },
            react_1.default.createElement("div", { className: "container text-center" },
                react_1.default.createElement("small", null, "Copyright \u00A9 Your Website"))))));
};
exports.default = MyApp;
