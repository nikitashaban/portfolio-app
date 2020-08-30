"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// const apiCall = (): Promise<IProps> => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res({ testingData: "123" });
//     }, 2000);
//   });
// };
const Portfolios = ({ testingData }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "section-title" },
            react_1.default.createElement("div", { className: "px-2" },
                react_1.default.createElement("div", { className: "pt-5 pb-4" },
                    react_1.default.createElement("h1", null, "Portfolios")))),
        react_1.default.createElement("section", { className: "pb-5" },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("div", { className: "card subtle-shadow no-border" },
                        react_1.default.createElement("div", { className: "card-body" },
                            react_1.default.createElement("h5", { className: "card-title" }, "Card title"),
                            react_1.default.createElement("h6", { className: "card-subtitle mb-2 text-muted" }, "Card subtitle"),
                            react_1.default.createElement("p", { className: "card-text fs-2" }, "Some quick example text to build on the card title and make up the bulk of the card's content.")),
                        react_1.default.createElement("div", { className: "card-footer no-border" },
                            react_1.default.createElement("small", { className: "text-muted" }, "Last updated 3 mins ago")))),
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("div", { className: "card subtle-shadow no-border" },
                        react_1.default.createElement("div", { className: "card-body" },
                            react_1.default.createElement("h5", { className: "card-title" }, "Card title"),
                            react_1.default.createElement("h6", { className: "card-subtitle mb-2 text-muted" }, "Card subtitle"),
                            react_1.default.createElement("p", { className: "card-text fs-2 " }, "Some quick example text to build on the card title and make up the bulk of the card's content.")),
                        react_1.default.createElement("div", { className: "card-footer no-border" },
                            react_1.default.createElement("small", { className: "text-muted" }, "Last updated 3 mins ago")))),
                react_1.default.createElement("div", { className: "col-md-4" },
                    react_1.default.createElement("div", { className: "card subtle-shadow no-border" },
                        react_1.default.createElement("div", { className: "card-body" },
                            react_1.default.createElement("h5", { className: "card-title" }, "Card title"),
                            react_1.default.createElement("h6", { className: "card-subtitle mb-2 text-muted" }, "Card subtitle"),
                            react_1.default.createElement("p", { className: "card-text fs-2 " }, "Some quick example text to build on the card title and make up the bulk of the card's content.")),
                        react_1.default.createElement("div", { className: "card-footer no-border" },
                            react_1.default.createElement("small", { className: "text-muted" }, "Last updated 3 mins ago"))))))));
};
// Portfolios.getInitialProps = async () => {
//   const data = await apiCall();
//   return { ...data };
// };
exports.default = Portfolios;
