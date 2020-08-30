"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ForumCategories = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "section-title" },
            react_1.default.createElement("div", { className: "px-2" },
                react_1.default.createElement("div", { className: "pt-5 pb-4" },
                    react_1.default.createElement("h1", null, "Categories")))),
        react_1.default.createElement("section", { className: "fj-category-list" },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("div", { className: "fj-category-container" },
                        react_1.default.createElement("a", { className: "fj-category subtle-shadow no-border", href: "#" },
                            react_1.default.createElement("div", { className: "category-information" },
                                react_1.default.createElement("div", { className: "heading gray-90" }, "General Discussion"),
                                react_1.default.createElement("div", { className: "description" }, "Just general question"))))),
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("div", { className: "fj-category-container" },
                        react_1.default.createElement("a", { className: "fj-category subtle-shadow no-border", href: "#" },
                            react_1.default.createElement("div", { className: "category-information" },
                                react_1.default.createElement("div", { className: "heading gray-90" }, "Other Discussion"),
                                react_1.default.createElement("div", { className: "description" }, "Just general question"))))),
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("div", { className: "fj-category-container" },
                        react_1.default.createElement("a", { className: "fj-category subtle-shadow no-border", href: "#" },
                            react_1.default.createElement("div", { className: "category-information" },
                                react_1.default.createElement("div", { className: "heading gray-90" }, "Some Discussion"),
                                react_1.default.createElement("div", { className: "description" }, "Just general question")))))))));
};
exports.default = ForumCategories;
