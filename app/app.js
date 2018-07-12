"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const app = express();
app.set('view engine', 'ejs');
app.all('*', (req, res) => {
    const { text = 'aaa', color = 'yellow' } = req.query;
    res
        .header('content-type', 'text/javascript; charset=UTF-8')
        .render(path.resolve('app/response.ejs'), {
        text,
        color
    });
});
app.listen(process.env.PORT || 8000);
//# sourceMappingURL=app.js.map