const test = require("node:test");
const assert = require("node:assert");

test("Application basic test", () => {
    assert.strictEqual(1 + 1, 2);
});

test("Application port should be 3000", () => {
    const PORT = process.env.PORT || 3000;

    assert.strictEqual(PORT, 3000);
});
