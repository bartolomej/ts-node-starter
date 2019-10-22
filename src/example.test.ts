import example from "./example";

describe("Test example function", () => {

  it("should return example string", () => {
    expect(example()).toEqual('Hello world! It works!');
  });

});
