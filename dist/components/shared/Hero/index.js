"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Hero = () => {
    return (react_1.default.createElement("section", { className: "fj-hero" },
        react_1.default.createElement("div", { className: "fj-hero-wrapper row" },
            react_1.default.createElement("div", { className: "hero-left col-md-6" },
                react_1.default.createElement("h1", { className: "white hero-title" }, "Hey I'm Filip. Experienced full stack developer"),
                react_1.default.createElement("h2", { className: "white hero-subtitle" }, "Check my portfolio and video tutorials"),
                react_1.default.createElement("div", { className: "button-container" },
                    react_1.default.createElement("a", { href: "", className: "btn btn-main bg-blue ttu" }, "See my work"))),
            react_1.default.createElement("div", { className: "hero-right col-md-6" },
                react_1.default.createElement("div", { className: "hero-image-container" },
                    react_1.default.createElement("a", { className: "grow hero-link" },
                        react_1.default.createElement("img", { className: "hero-image", src: "https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg" })))))));
};
exports.default = Hero;
