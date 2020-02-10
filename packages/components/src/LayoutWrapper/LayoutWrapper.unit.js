import Application from "./Application";

test("exports a valid component", () => {
  expect(Application).toBeAComponent();
});

test('adds a "application" class on the root element', () => {
  const { element } = shallowMount(Application);
  expect(element.classList.contains("application")).toBe(true);
});
