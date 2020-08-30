"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Topics = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "section-title" },
            react_1.default.createElement("div", { className: "px-2" },
                react_1.default.createElement("div", { className: "pt-5 pb-4" },
                    react_1.default.createElement("h1", null, "Specific Category")))),
        react_1.default.createElement("section", { className: "fj-topic-list" },
            react_1.default.createElement("table", { className: "table table-hover " },
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", { scope: "col" }, "Topic"),
                        react_1.default.createElement("th", { scope: "col" }, "Category"),
                        react_1.default.createElement("th", { scope: "col" }, "Author"),
                        react_1.default.createElement("th", { scope: "col" }, "Replies"))),
                react_1.default.createElement("tbody", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", null, "Some Topic Info"),
                        react_1.default.createElement("td", { className: "category" }, "General Discussion"),
                        react_1.default.createElement("td", null, "Filip Jerga"),
                        react_1.default.createElement("td", null, "2")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", null, "Some Topic Info"),
                        react_1.default.createElement("td", { className: "category" }, "General Discussion"),
                        react_1.default.createElement("td", null, "Filip Jerga"),
                        react_1.default.createElement("td", null, "2")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", null, "Some Topic Info"),
                        react_1.default.createElement("td", { className: "category" }, "General Discussion"),
                        react_1.default.createElement("td", null, "Filip Jerga"),
                        react_1.default.createElement("td", null, "2")))))));
};
exports.default = Topics;
