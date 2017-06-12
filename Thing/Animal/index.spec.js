describe("Animal", () => {
  it("should have 6 legs if it's an insect", () => {
    const insect = new Animal("insect");
    expect(insect.getNumOfLegs()).toBe(6);
  })

  it("should have 8 legs if it's a spider", () => {
    const spider = new Animal("spider");
    expect(spider.getNumOfLegs()).toBe(8);
  })

  it("shouldn't know number of legs of a kraken", () => {
    const kraken = new Animal("kraken");
    expect(kraken.getNumOfLegs()).toBeUndefined();
  })
})
