"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Posts = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "section-title" },
            react_1.default.createElement("div", { className: "px-2" },
                react_1.default.createElement("div", { className: "pt-5 pb-4" },
                    react_1.default.createElement("h1", null, "Login Page")))),
        react_1.default.createElement("div", { className: "bwm-form" },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-md-5 mx-auto" },
                    react_1.default.createElement("h1", { className: "page-title" }, "Login"),
                    react_1.default.createElement("form", null,
                        react_1.default.createElement("div", { className: "form-group" },
                            react_1.default.createElement("label", { htmlFor: "email" }, "Email"),
                            react_1.default.createElement("input", { type: "email", className: "form-control", id: "email" })),
                        react_1.default.createElement("div", { className: "form-group" },
                            react_1.default.createElement("label", { htmlFor: "password" }, "Password"),
                            react_1.default.createElement("input", { type: "password", className: "form-control", id: "password" })),
                        react_1.default.createElement("button", { type: "submit", className: "btn btn-main bg-blue py-2 ttu" }, "Submit")))))));
};
exports.default = Posts;
