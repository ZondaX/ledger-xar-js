import XarApp from "index.js";

test("check address conversion", async () => {
  const pkStr = "034fef9cd7c4c63588d3b03feb5281b9d232cba34d6f3d71aee59211ffbfe1fe87";
  const pk = Buffer.from(pkStr, "hex");
  const addr = XarApp.getBech32FromPK("xar", pk);
  expect(addr).toEqual("xar1w34k53py5v5xyluazqpq65agyajavep27a5eqp");
});
