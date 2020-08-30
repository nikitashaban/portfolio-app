"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const router_1 = require("next/router");
const PortfolioDetail = () => {
    const router = router_1.useRouter();
    const { id } = router.query;
    return (react_1.default.createElement("div", null, id));
};
exports.default = PortfolioDetail;
